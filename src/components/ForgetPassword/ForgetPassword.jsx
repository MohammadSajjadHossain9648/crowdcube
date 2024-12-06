import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        if(email) {
            toast.warning('Password reset link sent! Check your email.');
            navigate('/');
            setTimeout(() => {
                window.location.href = "https://mail.google.com/mail/u/0/";
            }, 5000);
        }
        else{
            toast.warning('Please enter a valid email address.');
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Forgot Password?</h1>
                    <p className="py-6">
                        Enter your email address to reset your password.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleResetPassword}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;