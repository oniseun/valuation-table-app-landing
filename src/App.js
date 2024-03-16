import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/assets/fonts/remixicon.css';
import '../src/assets/css/style.css';

// Components
import Home from './component/Pages/Home/Home';
import HomeTwo from './component/Pages/HomeTwo/HomeTwo';
import HomeThree from './component/Pages/HomeThree/HomeThree';
import HomeFour from './component/Pages/HomeFour/HomeFour';
import HomeFive from './component/Pages/HomeFive/HomeFive';
import HomeSix from './component/Pages/HomeSix/HomeSix';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
import Blog from './component/Pages/Blog/Blog';
import BlogDetails from './component/Pages/Blog/BlogDetails';
import Services from './component/Pages/Services/Services';
import Price from './component/Pages/Price/Price';
import Team from './component/Pages/Team/Team';
import TeamDetails from './component/Pages/TeamDetails/TeamDetails';
import Faq from './component/Pages/Faq/Faq';
import Login from './component/Pages/Login/Login';
import SignUp from './component/Pages/SignUp/SignUp';
import Error404 from './component/Pages/Error404/Error404';
import ScrollUpBtn from './component/Shared/ScrollUpBtn';

function App() {
  return (
    <div>
      <Helmet>
        <title>Spria - SaaS, App & Startup React Template</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>

      <Routes>
        <Route path='/' element={<HomeSix />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/privacy-policy' element={<BlogDetails />}></Route>
        <Route path='/terms' element={<BlogDetails />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <ScrollUpBtn />
      <ToastContainer />
    </div>
  );
}

export default App;
