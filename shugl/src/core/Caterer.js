import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import Card from '@material-ui/core/Card';
import {getCategories, getFilteredFarmhouse} from './apiCore';
import {prices} from './FixedPrices';
import {RadioBox} from './RadioBox'
import ProductReviewCard from '../Components/ProductReviewCard'
import shamsiFarmHouse from '../images/Farmhouse/shamsiFarmHouse.jpg'
import duaFarmHouse from "../images/Farmhouse/duaFarmHouse.jpg"
import JBFarmHouse from "../images/Farmhouse/jbFarmHouse.jpg"
import arabianFarmHouse from '../images/Farmhouse/arabianFarmHouse.jpg'
import deluxeFarmHouse from '../images/Farmhouse/deluxeFarmHouse.jpg'
import raniFarmHouse from '../images/Farmhouse/raniFarmHouse.jpeg'
import royalFarmHouse from '../images/Farmhouse/royalFarmHouse.jpg'
import durraniFarmHouse from '../images/Farmhouse/durraniFarmHouse.jpg'
import palmVillageFarmHouse from "../images/Farmhouse/palmVillage FarmHouse.jpg"
import alHadiFarmHouse from '../images/Farmhouse/alHadiFarmHouse.jpg'
import Caterer1 from '../images/Caterers/caterer1.jpg'
import Caterer2 from '../images/Caterers/caterer2.png'
import Caterer3 from '../images/Caterers/caterer3.jpg'
import {HostCard }from '../Components/HostCard'
import hostImage from '../images/hostImage.jpg'
import CategoriesButtons from '../Components/CategoriesButtons'
import { FaShuttleVan, FaCamera } from 'react-icons/fa';
import {GiHut, GiBalloons} from 'react-icons/gi'
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import { global } from "../config";

export const Caterer = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategories();
        //getPopularFramhouse();
      }, []);

      const getCategories = () => {
        fetch(`${global.API_HOST}/categories`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((response) => {
            setCategory(response);
          })
          .catch((err) => console.log(err));
      };


    const categories = () => (
        <div className='container' style={{marginBottom:'2rem'}}>
            <h3>Categories</h3>
            {category && category.length > 0 && (
            <div className='row'>
            {category.map((cat, index) => (
                  <CategoriesButtons
                    id={cat.name}
                    startIcon={<GiHut />}
                    name={cat.name}
                    key={index}
                  />
    
                  ))}
               
            </div>
              )}
        </div>
    )

    /*const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const[filteredResults, setFilteredResults] = useState(0)
    const [myFilters, setMyFilters] = useState({
        filters:{price:[]}
    })

    
    const init = () =>{
        getCategories().then(data=> {
            if(data.error) {
                setError(data.error)
            }
            else {
                setCategories(data)
            }
        })

    };
    
    const loadFilteredResults = (newFilters) => {
        console.log(newFilters)
        getFilteredFarmhouse(skip, limit, newFilters).then(data =>{
            if(data.error) {
                setError(data.error)
            }
            else {
                setFilteredResults(data.data)
            }
        })
    }


    useEffect(()=>{
        init();
        loadFilteredResults(skip, limit, myFilters.filters)
    }, [])

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters

        if(filterBy == 'price') {
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters);
    }

    const handlePrice = value => {
        const data = prices;
        let array = []

        for (let key in data) {
            if(data[key]._id === parseInt(value)) {
                array=data[key].array

            }

        }
        return array;
    }*/
    //TO BE USED UNDER THE HEADING All
    /*{filteredResults.map((farm, index)=>{
                    <ProductReviewCard key={index} farm={farm} />
                    
                        
                })}*/ 

    //TO BE USED UNDER THE HEADING FILTER BY PRICE RANGE
    /*<RadioBox 
                    prices={prices}
                    handleFilters={filters =>
                    handleFilters(filters, 'price')}
                     />*/ 
    
    return (
        <div>
            <Layout 
            title="Caterers"
            description="Search and find Caterers of your own choice"
            className='container-fluid'
            />
            <div className='row'>
                <div className='col col-md-3'>
                    <h3>Filter By price range</h3>
                    
                    <ul>

                    </ul>
                </div>
                <div className='col col-md-8'>
                    {categories()}
                    <h3>All</h3>
                    <div className='row'>
                        <ProductReviewCard name = "Hanif Rajput Caterers" price = '2800/per person' imgUrl={Caterer1} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Ghulam Mustafa Caterers" price = '1500/per person' imgUrl={Caterer2} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "United Catering" price = '1100/per person' imgUrl= {Caterer3}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name = "Faizan Caterers" price = '2800/per person' imgUrl={Caterer1} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Darbar Catering Services" price = '1500/per person' imgUrl={Caterer2} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "Globle catering" price = '1100/per person' imgUrl= {Caterer3}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name = "Mashallah catering" price = '1100/per person' imgUrl={Caterer1} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "A. Rasheed catering" price = '1100/per person' imgUrl={Caterer2} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "The chef caterers" price = '1100/per person' imgUrl= {Caterer3}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name = "Ghulam rasool catering" price = '1100/per person' imgUrl={Caterer1} address= "Malir, Karachi" description = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name = "Ghulam rasool catering" price = '1100/per person' imgUrl={Caterer2} address= "Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name = "Friends catering" price = '1100/per person' imgUrl= {Caterer3}  address= "Super Highway, Karachi" description ='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                </div>
            </div>
        </div>
    )
}