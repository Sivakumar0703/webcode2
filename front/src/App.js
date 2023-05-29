
import './App.css';

//import Header from './components/header/header';
// import Footer from './components/footer/footer';
// import Search from './components/search/search';
// import Categories from './components/categories/categories';
// import Furniture from './routes/products/furniture/furniture';
import {BrowserRouter  , Route ,  Routes} from 'react-router-dom';
// import Landing from './routes/products/LandingPage/landing';
// import Layout from './components/layout/layout';
import HomePage from './routes/products/home/homePage';
import Electronics from './routes/products/electronics/electronics';
import Cart from './routes/products/cart/cart';
import Register from './routes/products/register/register';
import Login from './routes/products/login/login';
import Profile from './routes/profile/Profile';
//import Dummycart from './routes/products/cart/Dummycart';
import Admin from './routes/Admin/Admin';
import Adminproduct from './routes/Admin/Adminproduct';
import Adminonrental from './routes/Admin/Adminonrental';
import Adminaddproduct from './routes/Admin/Adminaddproduct';
//import New from './routes/products/cart/Payprocess';




// <Route path="/landing"  element={<Landing />} />

function App() {



















  return (
    <div className="App">
       {/* <Header />
       <Search />
       <Categories />
       <Furniture />
       <Footer />
       
       
       */}



<BrowserRouter>

<Routes>

  <Route path='/' element={<HomePage />}/>
  


<Route path='/electronics' element={<Electronics />} />

{/*   <Route path='/cart/:productId/:startDate/:endDate/:fromTime/:toTime' element={<Dummycart />} />   */}

 <Route path='/cart/:productId/:startDate/:endDate/:fromTime/:toTime' element={<Cart />} /> 


<Route path='/register' element={<Register />} />

<Route path='/login' element={<Login />} />

<Route path='/profile' element={<Profile />} />

<Route path = '/admin' element={<Admin />} />

<Route path = '/admin/products' element={<Adminproduct />} />

<Route path = '/admin/addproducts' element={<Adminaddproduct />} />

<Route path = '/admin/onrent' element={<Adminonrental />} />

</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;

