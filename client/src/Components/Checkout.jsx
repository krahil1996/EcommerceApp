import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCart, clearCart } from '../Slice/cartSlice';

// Define the Checkout component
export default function Checkout() {
  // Define products state
  
  const items = useSelector(state => state.cart.items);

  const [quantities, setQuantities] = useState({});

  const subtotal = items.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1; 
    return acc + item.price * quantity;
  }, 0);


  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(RemoveCart(itemId));
    alert("Item removed:")
    console.log(itemId)
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: quantity
    }));
  };

  const handlePlaceOrder = () => {
    // Clear the cart in Redux state
    dispatch(clearCart());

    // Clear cart data from local storage
    localStorage.removeItem('cart');

    // You can add additional logic here, such as redirecting to a success page
  };



  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 m-2 pr-12 mt-[7%] mb-[5%]">
        {/* Personal Information Section */}
        <div className='lg:col-span-3 mr-2 bg-white border border-rounded-lg p-8 m-3  rounded-lg border-hidden border-shadow-md'>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            {/* Form fields for personal information */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Email Address */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Country */}
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              {/* Street Address */}
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* City */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* State / Province */}
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* ZIP / Postal Code */}
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-6 flex  justify-center gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Section */}
        <div className='lg:col-span-1 w-[110%]'>
          <div className="mx-auto max-w-7xl px-0 pb-30 bg-white pt-4 mt-3 mb-10 border rounded-lg border-hidden border-shadow-md">
            <h2 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 text-center'>Cart</h2>
            {/* Product list */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {/* Iterate over products */}
                  {items.map((product,index) => (
                    <li key={`${product.id}-${index}`}  className="flex py-6">
                      {/* Product Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumbnail}
                          
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      {/* Product Details */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          {/* Product Name and Price */}
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              {product.title}
                            </h3>
                            <p className="ml-4">Price: ${product.price * (quantities[product.id] || 1)}</p>
                          </div>
                          {/* Product Color */}
                          <p className="mt-1 text-sm text-gray-500">{product.selectedColor}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            {/* Quantity selector */}
                            <label htmlFor="quantity" className='inline text-sm font-medium leading-6 text-gray-900 ml-3'>Qty</label>
                            <select className='ml-3' onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          {/* Remove button */}
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(product.id)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Subtotal and Checkout button */}
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-10">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-2 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-4">
                <Link to="/success"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={handlePlaceOrder}
                >
                 Place Order
                </Link>
              </div>
              <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <Link to="/home">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"></span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action buttons */}
   
    </form>
  );
}
