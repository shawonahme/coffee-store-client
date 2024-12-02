import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const detailsInfo =  useLoaderData()   
 const {photo,details,taste,chef,price,supplier,coffee_name,_id} =  detailsInfo;
    return (
        <div className='w-8/12 mx-auto '>
            <div className='w-11/12 mx-auto my-6'>
       <Link to='/'> <button className='btn my-2'>Back to home</button></Link>
       </div>
           <div className='flex justify-center gap-12  bg-[#F4F3F0] py-8'>
            <div><img src={photo} alt="" /></div>
            <div>
            <p className='text-lg py-2 font-semibold'>name: <span className='text-gray-500 font-normal'>{coffee_name}</span> </p>
                <p className='text-lg py-2 font-semibold'>chef: <span className='text-gray-500 font-normal'>{chef}</span> </p>
                <p className='text-lg py-2 font-semibold'>price: <span className='text-gray-500 font-normal'>{price}tk</span> </p>
                <p className='text-lg py-2 font-semibold'>supplier: <span className='text-gray-500 font-normal'>{supplier}</span> </p>
                <p className='text-lg py-2 font-semibold'>taste: <span className='text-gray-500 font-normal'>{taste}</span> </p>
                <p className='text-lg py-2 font-semibold'>details: <span className='text-gray-500 font-normal'>{details}</span> </p>
            </div>
           </div>
        </div>
    );
};

export default Details;