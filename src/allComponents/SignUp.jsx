import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './Providers/AuthProvider';

const SignUp = () => {
    const {userSignUp} = useContext(authContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.surname.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
        const conpass = form.conpass.value;

        
        userSignUp(email,password)
        .then(users=>{
            const crateAt = users?.user?.metadata?.creationTime

            const user = {userName,address,email,password,conpass,crateAt}
            
            fetch('http://localhost:5000/userInfo',{
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
            })
            
        })
        .catch(error=>{

        })
    }
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">surname</span>
          </label>
          <input type="text" name='surname' placeholder="surname" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">address</span>
          </label>
          <input type="text" name='address' placeholder="address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">confrom Password</span>
          </label>
          <input type="password" name='conpass' placeholder="confrom password" className="input input-bordered" required />
         
        </div>
        <div>
            <Link to='/login' >you have already an  account? <span>signIn here</span></Link>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;