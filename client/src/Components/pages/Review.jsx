import React, { useState } from 'react';

const Review = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, rating, comment };
    setReviews([...reviews, newReview]);
    console.log('Submitted:', newReview);
    setName('');
    setRating(0);
    setComment('');
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}
          onClick={() => setRating(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="mx-auto mt-2  lg:gap-x-8 lg:px-8 bg-white pt-4 w-[100%] mb-8">
      <h1 className="text-3xl font-bold mb-4">Product Reviews</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating</label>
          <div className="flex text-2xl cursor-pointer">
            {renderStars()}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment</label>
          <textarea 
            id="comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            rows="4" 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required 
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit Review</button>
      </form>
      
      <div className="border rounded-md p-4">
        <h2 className="text-xl font-bold mb-2">Reviews</h2>
          {reviews.map((review, index) => (
          <div key={index} className="border-t border-gray-300 py-6">
            <p className="text-gray-700"><span className="font-bold">Name:</span> {review.name}</p>
            <p className="text-gray-700"><span className="font-bold ">Rating:</span> {review.rating}⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700"><span className="font-bold">Comment:</span> {review.comment}</p>
          </div>
          
        ))}

<div  className="border-t border-gray-300 py-2">
            <p className="text-gray-700"><span className="font-bold">Name: </span> John Doe </p>
            <p className="text-gray-700"><span className="font-bold">Rating: </span>  ⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700"><span className="font-bold">Comment: </span> First of all, let me thank Flipkart for its lightning deliveries. And the package was sent to me in a safe package. No dents, damages to the box and the CD. Kudos to Flipkart! Now coming to the game, the game is superb! Rockstar has really done a great job of creating this game. It has paid attention to every detail. It has evolved in a big way from predecessors. Although the facial expressions aren't so great, it's not such a big deal. The graphics is just okay but,hey, this game was created...
 </p>
          </div>
          <div  className="border-t border-gray-300 py-6">
            <p className="text-gray-700"><span className="font-bold">Name:</span> Peter Packer </p>
            <p className="text-gray-700"><span className="font-bold">Rating:</span>  ⭐⭐⭐⭐</p>
            <p className="text-gray-700"><span className="font-bold">Comment:</span> Though its late, having GTA V on the horizon, still, this game deserves a praise. GTA since vice city has been a popular open environment game, where you can ride almost any vehicle present in the game, run over the pedestrians, cop chase and most of all girls in bikinis. GTA IV took a turn, got great graphics, better gameplay and most of all it stuck to its stardom of open world interactions. Its story line was ok, though at first it would look very intriguing, but gradually you get over it....
READ MORE </p>
          </div>
     
      </div>
    </div>
  );
};

export default Review;
