import React from 'react';
import './SignUpDesign.css'; // Import the CSS file

const SignUp = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="container">
                {/* Left Section */}
                <div className="form-section">
                    <div className="logo-container">
                        <img
                            alt="St. Engineering College Logo"
                            className="logo"
                            src="https://s3-alpha-sig.figma.com/img/fc3c/5e08/cb583e095f8ec641750e3b9b78d9c8b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jgjawRRISC1Hj1EbudYUg40lZgWq5jsVE4issWBFvNlggtXJCwlbFJ2c76YWz0ygPgAgpRefy7UTiTVIYLa5T8~r-xT~34FjpU2gmtvr1nEFMA7ug1oKeas6RjLAFs0Ks~FtWh~55CDrP86HO-A5Mko13wBLuc~IcJJWwz3ZE~DZ8mEm~AstGZ7vFjqtcPAPZv8OFUQJ5sudyDBx4INAWLlCKS5-wa6Cnd7Bcg7O5Gt2XCEE4osTK0eDxzwH6YUBa1Nnndq71AmzJ492pL8wwX~k0IRNtBhtNJ1hXYy97UdYH3dKAh7PdCb5YR3zLPrCVNfVPEJbOUrrtBTI6e3a9A_"
                        />
                    </div>
                    <div className="login-text">
                        <input className="form-checkbox" type="checkbox" />
                        <span>Already Have an account !</span>
                        <a className="text-blue-500" href="#">Login</a>
                    </div>
                    <form>
                        <input className="input-field" placeholder="Email Address" type="email" />
                        <input className="input-field" placeholder="Password" type="password" />

                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input className="form-checkbox" type="checkbox" />
                                <span className="ml-2">Remember Me</span>
                            </label>
                            <a className="text-blue-500" href="#">Forgot Password?</a>
                        </div>
                        <button className="signup-btn">Sign Up</button>
                    </form>

                    <div className="text-center mb-4">
                        <span>Login With</span>
                    </div>

                    <div className="social-buttons">
                        <button className="social-btn google">
                            <i className="fab fa-google mr-2"></i> Google
                        </button>
                        <button className="social-btn facebook">
                            <i className="fab fa-facebook-f mr-2"></i> Facebook
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="illustration">
                    <img
                        alt="Illustration of students studying"
                        className="illustration-img"
                        src="https://storage.googleapis.com/a1aa/image/PPi3hM8E66Fo3hJsXLBLrVFfGLN2q_-BMXxM-X7bHfc.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;