import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const CoffeeCards = () => {
  
    const coffInfo = useLoaderData();
    
    const {photo,details,taste,chef,price,supplier,coffee_name,_id} =  coffInfo;

    const [coffeeCard,setCoffeeCard] = useState(coffInfo)

    return (
       <>
       <div className='w-11/12 mx-auto text-center my-12'>
        <h2 className='text-[#331A15] text-xl font-bold'>Our Popular Products</h2>
       <Link to='/addcoffee'> <button className='btn my-2'>Add Coffee</button></Link>
        </div>
        <div className='w-11/12 grid grid-cols-2 gap-6  mx-auto'>
            {
                coffeeCard.map(data=> <CoffeeCard key={data._id} setCoffeeCard ={setCoffeeCard} coffeeCard ={coffeeCard} data = {data}></CoffeeCard>)
            }
            
        </div>
       
       </>
    );
};

export default CoffeeCards;