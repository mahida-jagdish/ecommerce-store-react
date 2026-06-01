import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';



const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SampleNextArrow = (props) => {
      const {className, style, onClick} = props;
      return(
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3, }}>
          <AiOutlineArrowRight className='arrow w-10 h-10 mt-[100px] md:h-10 md:w-10 md:m-1 md:rounded-full' style={{...style, display:"block", borderRadius:"50px", background:"#f53347", position:"absolute", padding:"2px", right:"50px",color:"white"}} 
          ></AiOutlineArrowRight>
        </div>
      )
  }

  const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3, }}>
        <AiOutlineArrowLeft className='arrow w-10 h-10 mt-[100px] md:h-10 md:w-10 md:m-1 md:rounded-full' style={{...style, display:"block", borderRadius:"50px", background:"#f53347", position:"absolute", padding:"2px", left:"50px",color:"white"}} 
        ></AiOutlineArrowLeft>
      </div>
    )
  }

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev"/>
  };
  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0,data.length).map((item, index) =>{
            return (
              <div key={index} className=' bg-white z-10'>
                <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] items-center px-4 my-20 md:my-0 '>
                  <div className='md:space-y-6 space-y-3'>
                    <h3 className='text-red-500 font-semibold font-sans text-lg md:text-xl line-clamp-1'>Powering your world with the best in Electronics</h3>
                    <h1 className='md:text-4xl text-2xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-black'>{item.title}</h1>
                    <p className='md:w-[500px] line-clamp-3 text-black pr-7 font-light text-lg md:text-xl'>{item.description}</p>
                    <button className='bg-linear-to-r from-red-500 to bg-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop now </button>
                  </div>
                  <div>
                    <img src={item.image} alt={item.title} className='rounded-full hover:scale-105 transition-all shadow-2xl shadow-black bg-white p-10 img'/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <Category></Category>
    </div>
  )
}

export default Carousel