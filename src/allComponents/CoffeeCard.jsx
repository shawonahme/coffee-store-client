import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({data,setCoffeeCard,coffeeCard}) => {
    const {photo,details,taste,chef,price,supplier,coffee_name,_id} =  data;

   
    
    const handleDelete = (_id)=>{

        fetch(`https://coffee-store-server-3ni3.onrender.com/users/${_id}`,{
            method:'delete'
        })
        .then(res => res.json())
        .then(newInfo=> {

            const remainingCoffees = coffeeCard.filter(coffee => coffee._id !== _id);
            setCoffeeCard(remainingCoffees);
        })
    
    }

    return (
        <div className='flex p-8 rounded-lg bg-[#F5F4F1] justify-around'>
            <div>
                <img className='h-[200px]' src={photo} alt="" />
            </div>
            <div>
                <p className='text-lg py-2 font-semibold'>name: <span className='text-gray-500 font-normal'>{coffee_name}</span> </p>
                <p className='text-lg py-2 font-semibold'>chef: <span className='text-gray-500 font-normal'>{chef}</span> </p>
                <p className='text-lg py-2 font-semibold'>price: <span className='text-gray-500 font-normal'>{price}tk</span> </p>
            </div>
            <div className='flex flex-col gap-3'>
            <button  className='btn  btn-warning'> <Link to={`/Details/${_id}`}>details</Link></button>
                <button className='btn btn-neutral'> <Link to = {`/update/${_id}`}>  edit</Link></button>
                <button onClick={()=>handleDelete(_id)} className='btn btn-error'>delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;