import './App.css';
import "./sass/main.scss";

import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'

//* Components
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
    {loading ? (
      <motion.div key="loader">
        <Loader setLoading={setLoading}/>
      </motion.div>
    ) : (
      <>
      <Header />
      <Banner />
      {
        !loading && (
          <div className="transition-image final">
            <motion.img 
              src={process.env.PUBLIC_URL + `/images/image-2.jpg`} 
              layoutId="main-image-1" 
              transition={{
                ease: [0.6,0.01,-0.05,0.95],
                duration: 1.6
              }}
            />
          </div>
        )
      }
      </>
    )}
    </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
