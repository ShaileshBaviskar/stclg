import React from 'react';

const Login = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg flex max-w-4xl mx-auto">
                <div className="p-8 w-1/2">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            alt="College Logo"
                            className="mr-3"
                            height="50"
                            src="https://s3-alpha-sig.figma.com/img/fc3c/5e08/cb583e095f8ec641750e3b9b78d9c8b0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jgjawRRISC1Hj1EbudYUg40lZgWq5jsVE4issWBFvNlggtXJCwlbFJ2c76YWz0ygPgAgpRefy7UTiTVIYLa5T8~r-xT~34FjpU2gmtvr1nEFMA7ug1oKeas6RjLAFs0Ks~FtWh~55CDrP86HO-A5Mko13wBLuc~IcJJWwz3ZE~DZ8mEm~AstGZ7vFjqtcPAPZv8OFUQJ5sudyDBx4INAWLlCKS5-wa6Cnd7Bcg7O5Gt2XCEE4osTK0eDxzwH6YUBa1Nnndq71AmzJ492pL8wwX~k0IRNtBhtNJ1hXYy97UdYH3dKAh7PdCb5YR3zLPrCVNfVPEJbOUrrtBTI6e3a9A_"
                            width="180"
                        />
                    </div>
                    <form>
                        <div className="mb-4 flex justify-between">
                            <label className="text-gray-700">
                                <input className="mr-2" type="checkbox" /> Student
                            </label>
                            <label className="text-gray-700">
                                <input className="mr-2" type="checkbox" /> Faculty
                            </label>
                            <label className="text-gray-700">
                                <input className="mr-2" type="checkbox" /> Management
                            </label>
                        </div>
                        <div className="mb-4">
                            <input
                                className="input-field"
                                placeholder="Email Address"
                                type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="input-field"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-gray-700">
                                <input className="mr-2" type="checkbox" /> Remember Me
                            </label>
                            <a className="text-blue-500" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="login-button">Login</button>
                    </form>
                    <div className="text-center my-4 text-gray-500">Login With</div>
                    <div className="flex justify-between">
                        <button className="google-button">
                            <i className="fab fa-google mr-2"></i> Google
                        </button>
                        <button className="facebook-button">
                            <i className="fab fa-facebook-f mr-2"></i> Facebook
                        </button>
                    </div>
                </div>
                <div className="w-1/2 p-8">
                    <img
                        alt="Illustration of students studying with a large book and laptop"
                        className="w-full h-full object-cover"
                        height="400"
                        src="https://storage.googleapis.com/a1aa/image/PwqKepglpKY5lDdq3mpb0I9fHnSVjOhpiNv0zV17Qsg.jpg"
                        width="600"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;

const styles = `
    .input-field {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.3s ease-in-out;
    }

    .input-field:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }

    .login-button {
        width: 100%;
        background-color: #3b82f6;
        color: white;
        padding: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease-in-out;
    }

    .login-button:hover {
        background-color: #2563eb;
    }

    .google-button {
        width: 48%;
        background-color: #dc2626;
        color: white;
        padding: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease-in-out;
    }

    .google-button:hover {
        background-color: #b91c1c;
    }

    .facebook-button {
        width: 48%;
        background-color: #1e40af;
        color: white;
        padding: 10px;
        border-radius: 8px;
        transition: background-color 0.3s ease-in-out;
    }

    .facebook-button:hover {
        background-color: #1e3a8a;
    }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);