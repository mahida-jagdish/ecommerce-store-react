import React from 'react'

const Pagination = ({page, pageHandle, dynamicPage}) => {

    const getPages = (current, total) => {
        let pages = [];
        if(total <= 5){
            for(let i=1; i<= total; i++){
                pages.push(i);
            }
        } else {
            if(current <= 3){
                pages = [1,2,3,4, '...', total];
            }else if(current >= total -2){
                pages = [1, '...', total -3, total -2, total -1, total];
            }else{
                pages = [1, '...', current -1, current, current +1, '...', total];
            }
        }
        return pages;
    }

  return (
    <div className='mt-8 mb-8 space-x-4'>
        <button disabled={page === 1} className={`${page === 1 ? 'bg-red-400':'bg-red-500'} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={() => pageHandle(page - 1)}>Prev</button>
        {
            getPages(page, dynamicPage).map((pg, index) => (
                <button key={index} onClick={() => pageHandle(pg)} className={` ${pg === page ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-md cursor-pointer`}>{pg}</button>
            ))
        }
        <button disabled={page === dynamicPage} className={`${page === dynamicPage ? 'bg-red-400':'bg-red-500'} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={() => pageHandle(page + 1)}>Next</button>
    </div>
  )
}

export default Pagination