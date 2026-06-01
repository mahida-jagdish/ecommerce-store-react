import { useCart } from '../context/CardContext';
import { LuNotebookText } from 'react-icons/lu';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdDeliveryDining } from 'react-icons/md';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCard from '../assets/empty-Cart.png';



const Card = ({ location = {}, getLocation = () => {} } ) => {
    const {user} = useUser();
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate()
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className='mt-10 max-w-6xl mx-auto mb-5'>
            {
                cartItems.length > 0 ? <div>
                    <h1 className='font-bold text-2xl ml-5'>My Cart ({cartItems.length})</h1>
                    <div>
                        <div className='mt-10'>
                            {
                                cartItems.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3  mx-4 md:px-0 overflow-hidden'>
                                            <div className='flex item gap-4'>
                                                <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md' />
                                                <div>
                                                    <h1 className='md:w-[300px] md:line-clamp-2 line-clamp-1'>{item.title}</h1>
                                                    <p className='text-red-500 font-semibold md:text-lg text-xl'>{item.price}</p>
                                                </div>
                                            </div>
                                            <div className='bg-red-500 rounded-md flex gap-4 p-2 font-bold text-xl text-white'>
                                                <button className='cursor-pointer' onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className='cursor-pointer' onClick={() => updateQuantity(item.id, 'increment')}>+</button>
                                            </div>
                                            <span>
                                                <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer mx-3' onClick={() => removeFromCart(item.id)} />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=' grid-cols-1 md:grid-cols-2 grid md:gap-20 mx-4 md:px-0 '>
                            <div className='mt-4 bg-gray-100 rounded-md space-y-2 p-7'>
                                <h1 className='font-bold text-xl text-gray-800'>Delivery Information</h1>
                                <div className='flex flex-col space-y-1 w-full'>
                                    <label htmlFor="">Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your name' 
                                        className='p-2 rounded-md' 
                                        value={user?.fullName || user?.firstName + ' ' + (user?.lastName || '')} 
                                    />
                                </div>
                                <div className='flex flex-col space-y-1 w-full'>
                                    <label htmlFor="">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your address' 
                                        className='p-2 rounded-md' 
                                        value={location?.address || ''} 
                                    />
                                </div>
                                <div className='flex w-full gap-5'>
                                    <div className='flex flex-col space-y-1 w-full'>
                                        <label htmlFor="">State</label>
                                        <input 
                                            type="text" 
                                            placeholder='Enter your state' 
                                            className='p-2 rounded-md w-full' 
                                            value={location?.state || ''} 
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-1 w-full'>
                                        <label htmlFor="">PostCode</label>
                                        <input 
                                            type="text" 
                                            placeholder='Enter your postcode' 
                                            className='p-2 rounded-md w-full' 
                                            value={location?.postcode || ''} 
                                        />
                                    </div>
                                </div>
                                <div className='flex w-full gap-5'>
                                    <div className='flex flex-col space-y-1 w-full'>
                                        <label htmlFor="">Country</label>
                                        <input 
                                            type="text" 
                                            placeholder='Enter your country' 
                                            className='p-2 rounded-md w-full' 
                                            value={location?.country || ''}
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-1 w-full'>
                                        <label htmlFor="">Phone No.</label>
                                        <input type="text" placeholder='Enter your phone number' className='p-2 rounded-md w-full' />
                                    </div>
                                </div>
                                <button className='bg-red-500 text-white px-3 py-1 mt-3 cursor-pointer rounded-md'>Submit</button>
                                <div className='flex flex-col items-center justify-center w-full text-gray-700'>
                                    -------OR-------
                                    <div className='flex items-center justify-center mt-5'>
                                        <button className='bg-red-500 rounded-md px-3 py-2 text-white' onClick={getLocation}>Detect Location</button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>
                                <h1 className='text-gray-800 font-bold text-xl'>Bill Details</h1>
                                <div className='flex items-center justify-between'>
                                    <h1 className='flex gap-1 items-center text-gray-700'> <span><LuNotebookText></LuNotebookText></span> Items total</h1>
                                    <p>${totalPrice}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='flex gap-1 items-center text-gray-700'> <span><MdDeliveryDining></MdDeliveryDining></span>Delivery Charge</h1>
                                    <p className='text-red-500 font-semibold'><span className='line-through text-gray-600'>$25</span> FREE </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='flex gap-1 items-center text-gray-700'> <span><GiShoppingBag></GiShoppingBag></span>Handling Charge</h1>
                                    <p className='text-red-500 font-semibold'> $5 </p>
                                </div>
                                <hr className='mt-2 text-gray-400' />
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-semibold text-lg'> Grand total </h1>
                                    <p className='font-semibold text-lg'>${totalPrice + 5}</p>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                                    <div className='flex gap-3'>
                                        <input type="text" placeholder='Enter Code' className='p-2 rounded-md w-full' />
                                        <button className='text-white bg-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                                    </div>
                                </div>
                                <button className='bg-red-500 text-white px-3 py-2 rounded-md w-full curosr-pointer mt-3'>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div> : <div className='flex flex-col gap-3 justify-center items-center h-[600px]'>
                    {/* <GiShoppingBag className='text-red-400 text-9xl' /> */}
                    <img src={emptyCard} alt="" className='md:h-[300px] h-[150px]'/>
                    <h1 className='md:text-5xl text-red-500 font-bold text-2xl'>Your Cart is Empty</h1>
                    <p className='text-gray-500 md:text-2xl text-xl'>Add items to it now.</p>
                    <button className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer mt-3' onClick={() => navigate('/products')}>Shop Now</button>
                </div>
            }
        </div>
    )
}

export default Card