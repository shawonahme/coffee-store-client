import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateCoffee = () => {

const upDateInfo = useLoaderData();
const {photo,details,taste,chef,price,supplier,coffee_name,_id} =  upDateInfo;
const navigation = useNavigate()
const handleUpdated = (event)=>{
  event.preventDefault()
  const from = event.target;
  const coffee_name = from.coffee_name.value;
  const supplier = from.supplier.value;
  const price = from.price.value;
  const chef = from.chef.value;
  const taste = from.taste.value;
  const details = from.details.value;
  const photo = from.photo.value;
  const coffee_Info = {coffee_name,supplier,price,chef,taste,details,photo};

  fetch(`http://localhost:5000/users/${_id}`,{
    method:'put',
    headers:{
      'content-type':'application/json'
    },
   body:JSON.stringify(coffee_Info)
  })
  .then(res => res.json())
  .then(updateInfo =>{

    if(updateInfo.modifiedCount > 0){
      alert('updated data successfully')
      event.target.reset()
      navigation('/')
    }

  })
}

  return (
    <>
      <div className='w-11/12 mx-auto my-6'>
        <Link to='/'> <button className='btn my-2'>Back to home</button></Link>
      </div>

      <div className='w-[70%] mx-auto text-center bg-[#F4F3F0] rounded-lg p-8'>
        <div className='py-4'>
          <h2 className='text-2xl font-bold  py-3'>Update Existing Coffee Details</h2>
          <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>

        <div>
          <div className="card w-full  shrink-0 ">
            <form onSubmit={handleUpdated} className="card-body w-full">

              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">name</span>
                    </label>
                    <input type="text" name='coffee_name' defaultValue={coffee_name} placeholder="Enter coffee name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Supplier</span>
                    </label>
                    <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />

                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} placeholder="Enter coffee price" className="input input-bordered" required />

                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Chef</span>
                    </label>
                    <input type="text" name='chef' defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Taste</span>
                    </label>
                    <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />

                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Details</span>
                    </label>
                    <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />

                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Photo</span>
                </label>
                <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className=" py-3 rounded-lg font-semibold bg-[#D2B48C] border-2 text-red-950 border-red-950">Update Coffee Details</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;