import React from 'react'
import { FaFilter } from 'react-icons/fa6';
import { getData } from '../context/DataContext';
import { set } from 'react-hook-form';

const MobileFilter = ({ openFilter, setOpenFilter, search, setSearch, categoryFilter, setCategoryFilter, brand, setBrand, priceRange, setPriceRange, handleBrandChange, handleCategoryChange }) => {
    const { categoryOnlyData, brandOnlyData} = getData();
  return (
    <>
        <div className='bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5'>
            <h1 className='font-semibold text-xl'>Filters</h1>
            <FaFilter onClick={() => setOpenFilter(!openFilter)}/>
        </div>
            {
                openFilter ? 
                    <div className='bg-gray-100 p-2 md:hidden'>
                              <input type="text" placeholder='Search...' className='bg-white p-2 border-gray-400 border-2 rounded-md w-full' onChange={(e) => setSearch(e.target.value)} value={search}/>

                                    {/* Brand only data */}
                                    <h1 className='font-semibold mt-5 text-xl '>Category</h1>
                                    <div className='flex flex-col gap-2 mt-3'>
                                      {
                                        categoryOnlyData?.map((item, index) =>{
                                          return <div className='flex gap-2' key={index}>
                                            <input type="checkbox" name={item} checked={categoryFilter === item} value={item} onChange={handleCategoryChange}/>
                                            <button className='cursor-pointer uppercase'>{item}</button>
                                          </div>
                                        })
                                      }
                                    </div>
                                    {/* Brand only data */}
                                    <h1 className='font-semibold mt-5 text-xl mb-3 '>Brand</h1>
                                    <select name="" id="" className='p-2 border-gray-400 border-2 rounded-md w-full' value={brand} onChange={handleBrandChange}>
                                      {
                                        brandOnlyData?.map((item, index) =>{
                                          return <option key={index} value={item}>{item}</option>
                                        })
                                      }
                                    </select>
                                    <h1 className='font-semibold mt-5 text-xl mb-3'>Price Range</h1>
                                          <div className='flex flex-col gap-2'>
                                            <label htmlFor="" className=''>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                                            <input type="range" min={0} max={100} className='md:w-full w-[200px]' value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}/>
                                          </div>
                                    
                                            <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-2 font-semibold'
                                            onClick={() => {
                                              setSearch("");
                                              setCategoryFilter("All");
                                              setBrand("All");
                                              setPriceRange([0, 100]);
                                              setOpenFilter(false);
                                            }}
                                            >Reset Filters</button>
                    </div>
                : null
            }
    </>

  )
}

export default MobileFilter