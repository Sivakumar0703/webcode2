
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Search from './components/search/search';
import Categories from './components/categories/categories';
import Furniture from './routes/products/furniture/furniture';
import {BrowserRouter  , Route , Link, Routes} from 'react-router-dom';
import Landing from './routes/products/LandingPage/landing';
import Layout from './components/layout/layout';
import HomePage from './routes/products/home/homePage';




function App() {
  return (
    <div className="App">
       {/* <Header />
       <Search />
       <Categories />
       <Furniture />
       <Footer /> */}

<Layout>

<BrowserRouter>

<Routes>

  <Route path='/' element={<HomePage />}/>
  
<Route path="/landing"  element={<Landing />} />

</Routes>

</BrowserRouter>









</Layout>




    </div>
  );
}

export default App;

