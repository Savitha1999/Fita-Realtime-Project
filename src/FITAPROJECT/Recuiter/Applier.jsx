// import React, { useState } from 'react';
// import './applier.css';

// import Topbar from '../Navbar/Topbar';

// export default function Applier()
// {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!username || !password) {
  //     alert('Please fill in both fields');
  //     return;
  //   }
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   setUsername('');
  //   setPassword('');
  // };

//   return (
//     <>
//       <Topbar />
             
    // <div className='recruiter p-5' style={{marginTop:"140px"}}>
    // <h1 className='text-danger'> Recruiter Form </h1>
    // <form  onSubmit={handleSubmit}>
    //   <div>
    //     <label>Username:</label>
    //     <input 
    //       type="email" 
    //       placeholder='User Name'          
    //       value={username} 
    //       onChange={(e) => setUsername(e.target.value)} 
    //     />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input 
    //       type="password" 
    //       placeholder='User Password'          
    //       value={password} 
    //       onChange={(e) => setPassword(e.target.value)} 
    //     />
    //   </div>
    //   {/* <button type="submit" className='mt-2' style={{marginLeft:"13px",borderRadius:"25px"}}>Login</button> */}
     
    // </form>
    // </div>
//     </>
//   );
// };









import React, { useState } from 'react';
import './applier.css';

import Topbar from '../Navbar/Topbar';
import { Link } from 'react-router-dom';

export default function Applier() {
 
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <Topbar />
             
      <div className='recruiter' style={{marginTop: "180px"}}>
        <h1 className='text-danger'> Recruiter Form </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input 
              type="email" 
              placeholder='User Name'
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              placeholder='User Password'
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <Link to={'/card'} >
           <button type="submit" className='mt-2 w-100' style={{marginLeft:"13px",borderRadius:"25px"}}>Login</button> 

          </Link>
        </form>
      </div>
    </>
  );
}
