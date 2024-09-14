import React from 'react'
const products = [
    {
      id: 1,
      name: 'Saree',
      href: '#',
      price: '$48',
      imageSrc: 'https://static.toiimg.com/photo/104183532.cms',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Dress',
      href: '#',
      price: '$35',
      imageSrc: "https://anaykaa.in/cdn/shop/products/2.png?v=1677354581&width=1445",
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Watch',
      href: '#',
      price: '$89',
      imageSrc: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw18bfecec/images/Titan/Catalog/5064DL05_1.jpg?sw=800&sh=800',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Shoes',
      href: '#',
      price: '$35',
      imageSrc: 'https://image.made-in-china.com/2f0j00sNzhjTVRHvgp/Fall-New-Breathable-and-Comfortable-Student-Sports-Shoes-Women-s-Height-Increase-Casual-Shoes-Chunky-Sneakers-Women.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Tops',
        href: '#',
        price: '$48',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0574/8998/1632/products/11ee6d6c1cc04f42bbab4a18d4f02614-Max.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Kurtas',
        href: '#',
        price: '$35',
        imageSrc: 'https://img.perniaspopupshop.com/catalog/product/s/a/SABH0922159_1.jpg?impolicy=detailimage',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Kurtis',
        href: '#',
        price: '$89',
        imageSrc: 'https://shopmulmul.com/cdn/shop/files/633_800x.jpg?v=1697453816',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Heels',
        href: '#',
        price: '$35',
        imageSrc: 'https://assets.vogue.com/photos/62f675d3b7e5ee538df7f91e/1:1/w_2321,h_2321,c_limit/HIGH_SUMMER_2022_STILL_LIFE_PR_MARKETING%20CROP_HORIZONTAL6.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Earrings',
        href: '#',
        price: '$35',
        imageSrc: 'https://media.istockphoto.com/id/1465816268/photo/indian-traditional-jewellery-displayed-in-a-street-shop-for-sale-in-pune-maharashtra-indian.jpg?s=612x612&w=0&k=20&c=fZRX47XkS9VWEXoALByl_lr-W4T0R2xgii26wmtUwiE=',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 10,
        name: 'Pendant',
        href: '#',
        price: '$35',
        imageSrc: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 11,
        name: 'Perfume',
        href: '#',
        price: '$35',
        imageSrc: 'https://m.media-amazon.com/images/I/61Fu-ibqcnL._AC_UF1000,1000_QL80_.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 12,
        name: 'Wallet',
        href: '#',
        price: '$35',
        imageSrc: 'https://walletkart.in/cdn/shop/products/IMG_6632_1024x1024@2x.jpg?v=1680695789',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      }
      
    // More products...
  ]
export default function ProductList() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
    <h2 className="font-bold text-2xl h-12">Top Deal</h2>

   
   <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
)
}
