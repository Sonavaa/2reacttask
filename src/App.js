import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';


function App() {
  const [users,setUsers] = useState([]);

useEffect(() => {
const getUsers = async  () => {
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(response.data);
setUsers(response.data)
}
getUsers();
  }, [])
 


  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     
     <Routes>
      <Route path='/' element={<HomePage userList={users}/>}/>
      <Route path='/add' element={<AddUser/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
