import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyProducts from './screens/MyProducts/MyProducts';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/'element = {<LandingPage/>} exact/>
              <Route path='/myproducts' element = {<MyProducts/>}  />
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;