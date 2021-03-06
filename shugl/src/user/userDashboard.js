import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth/index';
import {Link} from 'react-router-dom'


const Dashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();
    const roleAssignment =() => {
        if(role===1){
           return 'Admin'
        } 
        else if (role===0){
            return 'Registered User'
        } 
        else {
            return 'Vendor'
        }
    }

    const userLinks = () => {
        return (
            <div className='card'>
                 <h4 className='card-header'>My Links</h4>
                 <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='nav-link' to='/cart'>My Bookings</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to='/profile/update'>Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
        return (
            <div className='card mb-5'>
                <h3 className='card-header'>My Information</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>{name}</li>
                    <li className='list-group-item'>{email}</li>
                    <li className='list-group-item'>{roleAssignment()}</li>
                </ul>
            </div>
        )
        }
    const bookedHistory = () => {
        return (
            <div className='card mb-5'>
                <h3 className='card-header'>Booked Services history</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>history</li>
                </ul>
            </div>
        )
    }

    

    return (
        <Layout title='Profile' description={`Hi, Good Day! ${name}`} className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    {userLinks()}
                </div>
                <div className='col-9'>
                    {userInfo()}
                    {bookedHistory()}
                </div>
            </div>
        </Layout>
    )
        
    
}

export default Dashboard;