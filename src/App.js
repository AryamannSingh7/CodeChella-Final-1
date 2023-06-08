import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Landing from './Components/Landing';
import {Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Toaster position='top-right' toastOptions={{success: {theme:{primary: '#4aed88',},},}}></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
           <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

