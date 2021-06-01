import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { global } from "../config";
import { withRouter } from 'react-router-dom';

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: "false",
    redirectToReferrer: false,
  });
  const { email, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  /*const clickSubmit = (event) =>{
                event.preventDefault();
                setValues({...values, error:false, loading:true})
                signin({email, password})
                .then(data=>{
                        if(data.error){
                                setValues({...values, error:data.error, loading:false})
                        }
                        else{
                                authenticate(data, () =>{
                                        setValues({
                                                ...values,
                                                redirectToReferrer:true
                                        })
                                })
                        }
                })
        }*/

        const handleSubmit = (e) => {
          e.preventDefault();
          var userData = values;
         
            if (userData.email == "") {
              toast.error("Please fill your email!");
              return false;
            }
            if (userData.password == "") {
              toast.error("Please fill your password!");
              return false;
            }
            
          axios
            .post(global.API_HOST + "/signin", {
              email: userData.email,
              password: userData.password,
              role: "0",
            })
      
            .then((response) => {
              if(response.data.status == 400){
                      toast.error(response.data.message);
//                      <Redirect to="/signin" />;
                     // useHistory.push('signin');
              }
              else if(response.data.status == 401 ){
                toast.error(response.data.message);
              }
              else{
                toast.success("Login successfully..!");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userDetails", JSON.stringify(response.data.user));
                setTimeout(function () {
                  window.location.href = "/";
                },2000);
                //return <Redirect to="/" /> 
                
                //this.props.history.push('/');
              }
              console.log(response.data);
            })
            .catch((err) => console.log(err));
        };


  const signInForm = () => (
    <form onSubmit={(e) => {
      handleSubmit(e);
    }}>
      <div className="form-group">
        <label className="text-muted">Email/Phone number</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          value={password}
          className="form-control"
          required
        ></input>
      </div>
      <button className="btn btn-primary btn-outline" type="submit"/*onClick={clickSubmit}*/>
      Signin
        {/* <Link to="/">Signin</Link> */}
      </button>
    </form>
  );

  const showError = () => {
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>;
  };

  const showLoading = () => {
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  }

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 0) {
        return <Redirect to="/user/dashboard" />;
      } else {
        return <Redirect to="/vendor/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      <Redirect to="/" />;
    }
  };

  return (
    <Layout
      title="Signin Page"
      description="Signin to Shugl"
      className="container col-md-4 offset-md-4"
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
      
      <ToastContainer />
    </Layout>
  );
};

export default Signin;
