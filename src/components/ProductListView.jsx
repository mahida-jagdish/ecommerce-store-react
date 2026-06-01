import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CardContext';


const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className='space-y-4 mt-4 rounded-md'>
      <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
        <img src={product.image} alt={product.title} className='md:w-60 md:h-60 h-25 w-25 rounded-md cursor-pointer p-3' onClick={() => navigate(`/products/${product.id}`)}/>
        <div className='space-y-2'>
          <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-600 md:w-full w-[220px]'>{product.title}</h1>
          <p className='font-semibold md:text-4xl text-2xl'>${product.price}</p>
          <p className='line-clamp-3'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span></p>
          <button className='bg-red-500 rounded-md px-3 py-2 text-white cursor-pointer' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView