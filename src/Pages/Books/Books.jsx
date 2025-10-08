import React, { useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    
const [sort, setSort]= useState('')
const [sortedData, setSortedData]= useState(data)
   

    const handleSort = (type)=>{
        setSort(type)
        
        if(type=== 'Ratings'){
            const sorted=[...data].sort((a,b)=>b.rating- a.rating) 
           setSortedData(sorted)
        }
        
    }

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>



           <div className='flex justify-end'>
             <details className="dropdown  text-right">
  <summary className="btn m-1">Sort by: {sort? sort: ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('Page')}>Page</a></li>
    <li><a onClick={()=>handleSort('Ratings')}>Ratings</a></li>
  </ul>
</details>
           </div>



            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-30'>
                {sortedData.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook} />
        ))}
                {
                    data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;