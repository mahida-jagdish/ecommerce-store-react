import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../assets/loading4.webm';
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView';

const CategoryProduct = () => {
    const [searchData, setSearchData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const category = params.category;

    const getProductsByCategory = async (category) => {
        // Logic to fetch products based on category
        try{
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            const data = response.data;
            setSearchData(data);
            console.log(data);
            
        }
        catch(error){
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        if(category) {
            getProductsByCategory(category);
        }
        window.scrollTo(0, 0);
    }, [category]);
  return (
    <div>
        {
            searchData.length > 0 ? (
                <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
                    <button onClick={() => navigate(-1)} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft />Back</button>
                    {
                        searchData.map((item, index) => {
                            return <ProductListView key={index} product={item} />
                        })
                    }
                </div>
            ):(
                <div className='flex items-center justify-center h-[400px]'>
                    <video muted autoPlay loop>
                        <source src={Loading} type='video/webm'/>
                    </video>
                </div>
            )
        }
    </div>
  )
}

export default CategoryProduct