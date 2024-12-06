import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogIn = () => {
    const {handleToGoogle, handleToLogin} = useContext(authContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleToSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleToLogin(email, password)
        .then(res => {
            navigate(location.state?.from || '/');
        })
        .catch(err => {
            toast.error(err.message);
        })
    };

    const handleToGoogleLogIn = () => {
        handleToGoogle()
        .then(res => {
            navigate(location.state?.from || '/');
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-orange_color">Login now!</h1>
                    <p className="text-dark_gray_color py-6">
                        Welcome back! Log in to access your account, explore new features, and manage your preferences with ease. We're excited to see you again!
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onClick={handleToSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue_color">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue_color">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <div className="flex justify-between">
                                <label className="label">
                                    <Link to={'#'} className="label-text-alt link link-hover text-dark_gray_color">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to={'/Register'} className="label-text-alt link link-hover text-dark_gray_color">Create Account</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleToLogin} className="btn text-white_color font-bold bg-blue_bg_color">Login</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                            <h2 className="font-bold text-black_color mx-2">or</h2>
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                        </div>
                        <div className="form-control">
                            <button onClick={handleToGoogleLogIn} className="btn text-white_color font-bold bg-blue_bg_color">
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;