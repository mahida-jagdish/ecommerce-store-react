import { getData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


const Category = () => {
    const navigate = useNavigate();
    const { data } = getData();


    const getUniqueCategories = (data, property) => {
        let newVAl = data?.map((curElem) => {
            return curElem[property]
        })
        newVAl = [...new Set(newVAl)];
        return newVAl
    }

    const categoryOnlyData = getUniqueCategories(data, "category")

    return (
        <div className='bg-gray-700 shadow-md mt-4'>
            <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around  py-7 px-4'>
                {
                    categoryOnlyData.map((category, index) => {
                        return <div key={index}>
                            <button className='uppercase cursor-pointer bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md text' onClick={() => navigate(`/category/${category}`)}>{category}</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category