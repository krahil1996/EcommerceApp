import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

export default function Login() {
    // const token= localStorage.getItem('token')
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name:''
      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fetchData = await axios.post('http://localhost:8080/api/auth/login', formData);
            console.log(fetchData);
            localStorage.setItem('token',fetchData.data.token);
            localStorage.setItem('userName',fetchData.data.name);
            console.log('data :',fetchData.data);
            console.log('token :',fetchData.data.token);
           
          
            navigate('/home');
            
        } catch (error) {
            alert("Login error");
            console.log("cannot login", error);
        }
    };

    return (
        <div className="flex min-h- flex-1 lg:flex-row bg-[#ffffff]  w-[60%] ml-[20%] mt-[3%]">
            {/* Left Section */}
            <div className="lg:w-[80%] bg-amber-500 ">
                <img
                    // src="https://static.vecteezy.com/system/resources/previews/005/605/254/non_2x/businessmen-work-together-to-find-a-way-to-unlock-the-key-to-connect-to-trade-information-and-target-audience-free-vector.jpg"
                    src="src\assets\abc.png"
                    className="  mt-[10%] h-15 ml-[-5%] object-cover rounded transform scale-100 hover:scale-110 transition-transform duration-500 ease-in-out"
                    alt="Side Image"
                />
            </div>
            {/* Right Section */}
            <div className="lg:w-1/2 ">
                <div className="flex flex-col justify-center   ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                        <img
                            className="mx-auto h-[280px] w-auto absolute top-[3%]"
                            src="src\assets\abc.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-[50%] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Login to your account
                        </h2>
                        <form onSubmit={handleSubmit} className="m-5  space-y-6 " action="#" method="POST">
                            {/* Email input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div> </div>
                            {/* Password input */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Sign in button */}
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login in
                                </button>
                            </div>
                        </form>
                        {/* Registration link */}
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
