import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../Slice/cartSlice';
import { toast } from 'react-toastify';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function BookDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
 
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items)


  const handleAddToCart = () => {
  
    dispatch(AddToCart(product));
    toast.success('Item added to cart');
    console.log(product)
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.npoint.io/3f01df492bc2410d4a27/books/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white mt-[7%]">
    <div className="pt-6">
      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                Category
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
              {product.title}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      {/* Image gallery */}
<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
<div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
  <img
    src={product.thumbnail}
    alt="First product image"
    className="h-full w-full object-fit object-center"
  />
</div>
<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    <img
      src={product.images[0]}
      alt="Second product image"
      className="h-full w-full object-fit object-center"
    />
  </div>
  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    <img
      src={product.images[1]}
      alt="Third product image"
      className="h-full w-full object-fit object-center"
    />
  </div>
</div>
<div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
  <img
    src={product.images[2]}
    alt="Fourth product image"
    className="h-full w-full object-fit object-center"
  />
</div>
</div>


      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            {/* Reviews code */}
          </div>

          <form className="mt-10">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">Genre</h3>
              <ul role="list" className="list-disc space-y-2 mt-2 pl-4 text-sm">
    {product.genre.map((highlight, index) => (
      <li key={index} className="text-gray-400">
        <span className="text-gray-600">{highlight}</span>
      </li>
    ))}
  </ul>
            
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Author :</h3>
                <p className="text-base text-gray-900">{product.author}</p>
              </div>

            

            </div>

            <div  className="mt-10 flex w-full items-center justify-center gap-8 ">
       <button
              type="button"
              onClick={()=>handleAddToCart(product)}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
            
            <button
              type="button"
              onClick={()=>handleAddToCart(product)}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Buy Now
            </button>

            </div> 
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900">{product.description}</p>
          </div>

          <div className="mt-10">
<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

<div className="mt-4">
  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
    {product.highlights.map((highlight, index) => (
      <li key={index} className="text-gray-400">
        <span className="text-gray-600">{highlight}</span>
      </li>
    ))}
  </ul>
</div>
</div>


          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>
            <p className="text-sm text-gray-600">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  
}

export default BookDetails;
