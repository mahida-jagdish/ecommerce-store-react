import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CardContext';



const ProductsCard = ({ product }) => {   
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 md:h-max '>
        <img src={product.image} alt={product.name}  className='bg-gray-100 aspect-square product-img rounded-md p-3' onClick={() => {navigate(`/products/${product.id}`)}}/>
        <h1 className='p-1 font-semibold line-clamp-1'>{product.title}</h1>
        <p className='my-1 text-lx font-bold mb-2'>${product.price}</p>
        <button className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold mb-0' onClick={() => addToCart(product)}><IoCartOutline className="w-6 h-6 text-white"/>Add to Cart</button>
    </div>
  )
}

export default ProductsCard

