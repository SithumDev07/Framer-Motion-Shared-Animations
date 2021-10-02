import './App.css';
import "./sass/main.scss";

//* Components
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <>
    {loading ? (
      <Loader setLoading={setLoading}/>
    ) : (
      <>
      </>
    )}
    </>
  );
}

export default App;
