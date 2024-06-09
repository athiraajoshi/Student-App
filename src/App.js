import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewStudent from './components/ViewStudent';
import DeleteStudent from './components/DeleteStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<AddStudent/>}/>
      <Route path='/Search' element ={<SearchStudent/>}/>
      <Route path='/Delete' element ={<DeleteStudent/>}/>
      <Route path='/View' element ={<ViewStudent/>}/>


    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
