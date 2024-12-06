import React, { useContext, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const {handleToSignUp, updateUser, handleToGoogle} = useContext(authContext);

    const [visible1, setVisible1] = useState(false);
    const togglePassword1 = () => {
        setVisible1(!visible1);
    };
    const [visible2, setVisible2] = useState(false);
    const togglePassword2 = () => {
        setVisible2(!visible2);
    };

    const location = useLocation();
    const navigate = useNavigate();

    const handleToSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.files[0];
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        // check password condition
        if(password.length <6){
            toast.error("Password must be at least 6 characters");
            return ;
        }
        if(password != conPassword){
            toast.error("Passwords didn't match");
            return ;
        }
        if(!/[A-Z]/.test(password)){
            toast.error("Password must include at least one uppercase letter.");
            return ;
        }
        if(!/[a-z]/.test(password)){
            toast.error("Password must include at least one lowercase letter.");
            return ;
        }

        handleToSignUp(email, password)
        .then(res => {
            updateUser(name, image);
            toast.success("User created successfully",{
                position: "top-center",
                autoClose: 3000
            });
            navigate(location.state?.from || '/');
        })
        .catch(err => {
            toast.warning(`${err.message}`,{
                position: "top-center",
                autoClose: 3000
            });
        })
    };

    const handleToGoogleSignUp = () => {
        handleToGoogle()
        .then(res => {
            navigate(location.state?.from || '/');
        })
        .catch(err => {
            toast.warning(`${err.message}`,{
                position: "top-center",
                autoClose: 3000
            });
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange_color">Register Your Account</h1>
                    <p className="text-dark_gray_color py-6">
                        Welcome to our registration page! Get started by creating your account.
                    </p>
                </div>


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleToSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue_color">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue_color">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue_color">Image</span>
                            </label>
                            <input type="file" name="image" className="file-input file-input-bordered file-input-sm w-full max-w-sm" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-blue_color">Password</span>
                            </label>
                            <input type={visible1 ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <span onClick={togglePassword1} className='absolute bottom-4 right-4 bg-white_color'>{visible1 ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-blue_color">Confirm Password</span>
                            </label>
                            <input type={visible2 ? 'text' : 'password'} name="conPassword" placeholder="confirm password" className="input input-bordered" required />
                            <span onClick={togglePassword2} className='absolute bottom-4 right-4 bg-white_color'>{visible2 ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white_color font-bold bg-blue_bg_color">Submit</button>
                        </div>
                        <div className="flex justify-between">
                                <label className="label">
                                    <p className="text-blue_color">Already have an account?</p>
                                </label>
                                <label className="label">
                                    <Link to={'/LogIn'} className="label-text-alt link link-hover text-lg text-blue_color">Login</Link>
                                </label>
                            </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="w-36 border border-black_color rounded-lg"></div>
                            <h2 className="font-bold text-black_color mx-2">or</h2>
                            <div className="w-36 border border-black_color rounded-lg"></div>
                        </div>
                        <div className="form-control">
                            <button onClick={handleToGoogleSignUp} className="btn text-white_color font-bold bg-blue_bg_color">
                                Sign up with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;