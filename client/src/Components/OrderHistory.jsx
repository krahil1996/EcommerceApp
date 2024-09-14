// src/components/OrderHistory.js
import React from 'react';

const OrderHistory = () => {
  const orders = 
//   [
//     { id: 1, reference: "#12345", orderNumber: "ORD-12345", placed: "February 20, 2024", status: "Delivered", total: "$50.00" },
//     { id: 2, reference: "#54321", orderNumber: "ORD-54321", placed: "February 15, 2024", status: "In Progress", total: "$75.00" },
//     { id: 3, reference: "#98765", orderNumber: "ORD-98765", placed: "February 10, 2024", status: "Cancelled", total: "$30.00" },
//   ];
[
    {
    "id": 0,
    "orderNumber":"#12345",
    "placed":"January 20, 2024",
    "status": "Delivered",
    "genre": [
    "Fiction",
    "Classic"
    ],
    "price": 259,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/819gqi50k4L._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71tZKJuoMRL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/91REf0GGuiL._SY385_.jpg"
    ],
    "rating": 4.5,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "Racial Injustice",
    "Southern Setting"
    ],
    "description": "A classic novel depicting racial injustice in the American South.",
    "publication_year": 1960
    },
    {
    "id": 1,
    "orderNumber":"#345345",
    "placed":"February 21, 2024",
    "status": "In Progress",
    "genre": [
    "Dystopian",
    "Science Fiction"
    ],
    "price": 345,
    "title": "1984",
    "author": "George Orwell",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81wNqSC-5iL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81XXSg6+dgL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81Cfrjtw+EL._SY385_.jpg"
    ],
    "rating": 4.7,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "Totalitarianism",
    "Surveillance"
    ],
    "description": "A dystopian novel portraying a totalitarian society.",
    "publication_year": 1949
    },
    {
    "id": 2,
    "orderNumber":"#12345",
    "placed":"March 22, 2024",
    "status": "Cancelled",
    "genre": [
    "Classic",
    "Romance"
    ],
    "price": 456,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/91eNaZPdvHL._SX550_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81-hXTFrKsL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/91+DOWIYCML._SY385_.jpg"
    ],
    "rating": 4.8,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "Love",
    "Marriage",
    "Social Norms"
    ],
    "description": "A classic novel exploring themes of love, marriage, and social norms.",
    "publication_year": 1813
    },
    {
    "id": 3,
    "orderNumber":"#12345",
    "placed":"October 09, 2023",
    "status": "Delivered",
    "genre": [
    "Fiction",
    "Classic"
    ],
    "price": 123,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81ShirsP9zL._SL1500_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/91O8Zn2YZUL._SL1500_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81bNxBcKaTL._SL1500_.jpg"
    ],
    "rating": 4.6,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "American Dream",
    "Roaring Twenties"
    ],
    "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
    "publication_year": 1925
    },
    {
    "id": 4,
    "orderNumber":"#12345",
    "placed":"November 24, 2023",
    "status": "In Progress",
    "genre": [
    "Fiction",
    "Adventure"
    ],
    "price": 234,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81XS2mY6qfL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/9185xrEUoQL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/91DwG1BituL._SY385_.jpg"
    ],
    "rating": 4.4,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Dotr8reqL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "Obsession",
    "Adventure"
    ],
    "description": "The epic tale of Captain Ahab's obsession with the white whale.",
    "publication_year": 1851
    },
    {
    "id": 5,
    "orderNumber":"#12345",
    "placed":"December 25, 2023",
    "status": "Cancelled",
    "genre": [
    "Fantasy",
    "Adventure"
    ],
    "price": 342,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "images": [
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71pZk3VdFAL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81fS8rYmUJL._SY385_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/719cZNePOpL._SY385_.jpg"
    ],
    "rating": 4.9,
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, lorem sed tempor elementum, libero ligula aliquet libero, nec accumsan ipsum sem eget quam. Phasellus nec ultricies magna. Nulla facilisi. Maecenas pharetra tellus sit amet lectus ultricies, nec interdum nulla suscipit. Proin lacinia vel magna vel vehicula. Nullam vel ipsum id felis cursus semper. Aliquam sed vestibulum nunc. Sed sit amet elit a magna vehicula condimentum. Integer in nunc lectus. Sed a est in nunc fermentum tincidunt id a orci. Integer pretium elit eget tortor vulputate, vel dictum velit consectetur. Nullam bibendum eu magna et pulvinar. Nam ultricies neque ac justo ultricies, id dapibus libero molestie. Fusce ut libero auctor, placerat nunc in, bibendum lorem. Vivamus non felis ut purus vestibulum cursus. Vivamus quis tortor nec sapien sagittis lobortis sit amet nec tellus.",
    "thumbnail": "https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg",
    "highlights": [
    "Epic Fantasy",
    "Quest"
    ],
    "description": "An epic fantasy saga about the quest to destroy the One Ring.",
    "publication_year": 1954
    }]
  return (
    <div className="order-history bg-gray-100 rounded-lg shadow-lg p-6 mt-[7%] mb-[5%]">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      <div className="flex justify-between items-center">
  <p className="text-3xl font-semibold mb-6">
    #11224467878
  </p>
  <button
    type="button"
    className="ml-auto mb-10 flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    Place Order
  </button>
</div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Reference</th>
              <th className="px-4 py-2 text-left">Order Number</th>
              <th className="px-4 py-2 text-left">Placed</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">
                    {/* <img src={order.thumbnail}/> */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={order.thumbnail}
                                   
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                </td>
                <td className="px-4 py-2">{order.orderNumber}</td>
                <td className="px-4 py-2">{order.placed}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold ${order.status === "Delivered" ? "bg-green-500 text-white" : order.status === "In Progress" ? "bg-yellow-500 text-gray-900" : "bg-red-500 text-white"}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">${order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
