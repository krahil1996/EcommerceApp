import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f3e8ff] ">
      <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg p-8 shadow-md">
        <div className="text-center h-100">
          <h1 className="text-3xl font-bold text-green-700 mb-4"> 🎉Congratulations!</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Order has been confirmed</h2>
          <p className="text-base text-gray-600 mb-4">Check your email for tracking your order.</p>

<Link to="/home">
          <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                    </Link>
        </div>
      </div>
    </div>
  );
}
