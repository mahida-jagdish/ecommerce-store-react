import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums';
import Loading from '../assets/loading4.webm';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CardContext';


const SingleProduct = () => {
  const param = useParams();
  const [singaleProduct, setSingleProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  console.log(param);

  const getSingaleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
      const product = res.data;
      setSingleProduct(product);
      console.log(product);
      
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() =>{
    getSingaleProduct();
  }, [])

  return (
    <>
    {
      singaleProduct ? <div className='px-4 pb-4 md:px-0'>
        <Breadcrums title={singaleProduct.title} />
        <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden'>
          {/* {product img} */}
          <div className='w-[400px]'>
            <img src={singaleProduct.image} alt={singaleProduct.title} className='rounded-2xl md:w-full w-[300px] object-cover mx-8'/>
          </div>
          {/* {product details} */}
          <div className='flex flex-col gap-6'>
            <h1 className='md:text-3xl font-bold text-gray-800'>{singaleProduct.title}</h1>
            <div className='text-gray-700'>{singaleProduct.category?.toUpperCase()}</div>
            <p className='text-xl text-red-500 font-bold'>${singaleProduct.price} </p>
            <p className='text-gray-600'>{singaleProduct.description}</p>
            {/* Quantity select */}
            <div className='flex items-center gap-4'>
              <label htmlFor="quantity" className='text-gray-700 font-medium text-sm'>Quantity:</label>
              <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className='w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'/>
            </div>

            <div>
              <button className='px-6 flex gap-2 py-2 text-lg bg-red-500 rounded-md text-white' onClick={() => addToCart(singaleProduct)}><IoCartOutline className='h-6 w-6'/> Add to Cart</button>
            </div>
          </div>
        </div>
      </div> : 
      
      <div className="flex items-center justify-center h-screen">
        <video muted autoPlay loop >
          <source src={Loading} type="video/webm" />
        </video>
      </div>                 
    }
    </>
  )
}

export default SingleProduct