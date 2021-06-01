import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Card from '@material-ui/core/Card';
import { getCategories, getFilteredFarmhouse } from './apiCore';
import { prices } from './FixedPrices';
import { RadioBox } from './RadioBox'
import ProductReviewCard from '../Components/ProductReviewCard'
import Caterer1 from '../images/Caterers/caterer1.jpg'
import Caterer2 from '../images/Caterers/caterer2.png'
import Caterer3 from '../images/Caterers/caterer3.jpg'
import CategoriesButtons from '../Components/CategoriesButtons'
import { FaShuttleVan, FaCamera } from 'react-icons/fa';
import { GiHut, GiBalloons } from 'react-icons/gi'
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const categories = () => (
    <div className='container' style={{ marginBottom: '2rem' }}>
        <h3>Categories</h3>
        <div className='row'>
            <CategoriesButtons id='beachHut' startIcon={<GiHut />} name='Beach Hut' />
            <CategoriesButtons id='transport' startIcon={<FaShuttleVan />} name='Transporation' />
            <CategoriesButtons id='hotel' startIcon={<HotelIcon />} name='Hotels' />
            <CategoriesButtons id='photographer' startIcon={<FaCamera />} name='Photogrphers' />
            <CategoriesButtons id='caterer' startIcon={<FastfoodIcon />} name='Caterers' />
            <CategoriesButtons id='lawnandbanquet' startIcon={<HotelIcon />} name='Lawns and Banquets' />
            <CategoriesButtons id='farmhouse' startIcon={<HotelIcon />} name='Farmhouses' />
            <CategoriesButtons id='eventdecorator' startIcon={<GiBalloons />} name='Event Decorators' />
        </div>
    </div>
)
export const Decorator = () => {

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
                title="Event Decorators"
                description="Search and find Decorators of your own choice"
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
                        <ProductReviewCard name="Event Decorator 1 " price='1300' imgUrl={Caterer1} address="Malir, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name="Event Decorator 2" price='1200' imgUrl={Caterer2} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name="Event Decorator 3" price='1100' imgUrl={Caterer3} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name="Event Decorator 4 " price='1300' imgUrl={Caterer1} address="Malir, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name="Event Decorator 5" price='1200' imgUrl={Caterer2} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name="Event Decorator 6" price='1100' imgUrl={Caterer3} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name="Event Decorator 7" price='1300' imgUrl={Caterer1} address="Malir, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name="Event Decorator 8" price='1200' imgUrl={Caterer2} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name="Event Decorator 9" price='1100' imgUrl={Caterer3} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>
                    <div className='row'>
                        <ProductReviewCard name="Event Decorator 10" price='1300' imgUrl={Caterer1} address="Malir, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add one cup of frozen peas along with the mussels if you like' />
                        <ProductReviewCard name="Event Decorator 11" price='1200' imgUrl={Caterer2} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                        <ProductReviewCard name="Event Decorator 12" price='1100' imgUrl={Caterer3} address="Super Highway, Karachi" description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' />
                    </div>

                </div>
            </div>
        </div>
    )
}