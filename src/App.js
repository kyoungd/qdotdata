import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

// Fonts 
import './assets/css/flaticon-set.css'
import './assets/fonts/remixicon.css';
import './assets/fonts/themify-icons.css';

// Css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-modal-video/css/modal-video.css'
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import './assets/css/helper.css'
import './assets/css/unit-test.css'
import './assets/css/style.css'

// Components
import PreLoader from './Components/PreLoader';
import Home from './Pages/Home';
import NotFound from './Components/NotFound';
import ScrollUpBtn from './Components/ScrollUpBtn';

function App() {

  //  Preloader 
  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1400)
  }, [])

  return (
    <>
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>QDOTDATA</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          </Helmet>

          <Routes>
            <Route path='/' name='home' element={<Home />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  );
}

export default App;
