import React, { useState} from 'react';
import LoginForm from './components/LoginForm'
import Table from './components/Table'

function App() {
  const adminUser = {
    email:  'admin@admin.com',
    password:  'password'       
  }

  const [user, setUser] = useState({name:'', email:''});
  const [error,setError] = useState('');

  const Login = details =>{
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log('Logged in')
        setUser({
          name: details.name,
          email: details.email 
          
        })
      }else{  
      console.log('Details do not match');
      setError('Details do not match');
      }
    }

  const Logout = () =>{
    setUser({name:'', email:''})
    console.log('Logged out')
  }


  return (
    <div className="App">
      { (user.email != '') ? (
        <div className ='Welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <hr/>
          <Table user={user} Logout={Logout}/>
          <button className='button' onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
       )
    } 

    </div>
  );
}

export default App;
