import  { useState, useEffect, useRef } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';
import { SidBar } from './Components/SidBar';

function App() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }else{
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='app'>
      <NavBar setOpen={setOpen} open={open} />
      <div className="d-flex">
        <SidBar open={open} ref={sidebarRef} />
        <Header />
      </div>
    </div>
  );
}

export default App;
