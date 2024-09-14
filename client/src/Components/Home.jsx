import Footer from './Footer/Footer'
import Header from './Header'
import Navbar from './Navbar'
import ProductList from './products/ProductList'
import Slider from './Slider'


export default function Home() {
  return (
    <div className='App'>
       <Navbar/>
        <div className="mt-[6%]">
          <Header />
        </div>
        <div className='mt-2 mb-2'> <Slider /></div>
        
      <ProductList />
      <Footer />
    </div>
  )
}
