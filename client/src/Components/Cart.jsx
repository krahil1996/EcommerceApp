import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCart,InitializeCart } from '../Slice/cartSlice';
import { toast } from 'react-toastify';


export default function Cart() {
  const [open, setOpen] = useState(true)

  const items = useSelector(state => state.cart.items);

  const [quantities, setQuantities] = useState({});

  const subtotal = items.reduce((acc, item) => {
    const quantity = quantities[item.id] || 1; 
    return acc + item.price * quantity;
  }, 0);


  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(RemoveCart(itemId));
    toast.error('Item remove');
    // alert("Item removed:")
    console.log(itemId)
  };

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: quantity
    }));
  };

  // Load cart from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      dispatch(InitializeCart(savedCart));
    }
  }, [dispatch]);

  // Update local storage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ items }));
  }, [items]);


  return (
   <>
   <div className='mx-auto mt-[7%] max-w-7xl px-4 sm:px-6 lg:px-8  bg-white p-5 mt-3 mb-10 border rounded-lg border-hidden border-shadow-md'>
                    <h2 className=' ml-10 mb-4 text-4xl font-bold tracking-tight text-gray-900'>Cart</h2>
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((product,index) => (
                              <li key={`${product.id}-${index}`} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.thumbnail}
                                   
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                       {product.title}
                                      </h3>
                                      <p className="ml-4"> Price: ${product.price * (quantities[product.id] || 1)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.selectedColor}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500">

                                    <label htmlFor="quantity"
                                    className='>
inline text-sm font-medium leading-6 text-gray-900 ml-3'>Qty
                                    </label>
                                    
                                    
                                    <select className='ml-3' onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                       
                                    </select>
                                    </div>
                                   

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
                   
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-5">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link to="/checkout"
    
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <Link to="/home">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                    </div>  
                  
                
    </>
  )
}