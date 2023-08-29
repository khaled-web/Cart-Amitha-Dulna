//..........
//importing
//..........

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home,Landing, Register, Error, ProtectedRoute} from './pages'




//..........
//App
//..........
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </BrowserRouter>
  );
}


//..........
//exporting
//..........
export default App;
