// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import the CSS file for styles

// const Login = ({ setIsLoggedIn }) => {
//   const [formObj, setFormObj] = useState({ username: "", password: "" });
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [errorLoggingIn, setErrorLoggingIn] = useState('');
//   const navigate = useNavigate();

//   const changeHandler = (e) => {
//     setFormObj({ ...formObj, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formObj);

//     try {
//       const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
//       console.log(resp);
//       if (resp.data.success) {
//         setLoggedIn(true);
//         setErrorLoggingIn('');
//         sessionStorage.setItem('isLoggedIn', 'true');
//         sessionStorage.setItem('userType', resp.data.user.userType); // Store userType
//         setIsLoggedIn(true);
//         console.log("Successfully logged in");
//         setTimeout(() => {
//           navigate('/');
//         }, 2000);
//       } else {
//         setLoggedIn(false);
//         setErrorLoggingIn("Invalid username or password");
//       }
//     } catch (error) {
//       console.log("Error while logging in");
//       console.log(error);
//       setLoggedIn(false);
//       setErrorLoggingIn("Error while logging in");
//     }
//   };

//   const Error = () => (
//     <div className="alert alert-danger" role="alert">
//       {errorLoggingIn}
//     </div>
//   );

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
//           <form onSubmit={handleSubmit}>
//             {errorLoggingIn && <Error />}
//             <div className="mb-4">
//               <label htmlFor="username" className="form-label text-gray-600">Username</label>
//               <input
//                 type="text"
//                 className="form-control form-control-sm border border-gray-300 rounded py-2 px-3 w-full"
//                 id="username"
//                 name="username"
//                 value={formObj.username}
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="form-label text-gray-600">Password</label>
//               <input
//                 type="password"
//                 className="form-control form-control-sm border border-gray-300 rounded py-2 px-3 w-full"
//                 id="password"
//                 name="password"
//                 value={formObj.password}
//                 onChange={changeHandler}
//               />
//             </div>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
//               Submit
//             </button>
//           </form>
//           {loggedIn && <div className="alert alert-success mt-4 text-center">Successfully logged in! Redirecting to home...</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css'; // Import the CSS file for styles

const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp);
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userType', resp.data.user.userType); // Store userType
        setIsLoggedIn(true);
        console.log("Successfully logged in");

        setTimeout(() => {
          const userType = resp.data.user.userType;
          if (userType === 'Admin' && formObj.password === '123') {
            navigate('/admin');
          } else if (userType === 'Doctor' && formObj.password === '321') {
            navigate('/chatbot');
          } else {
            navigate('/');
          }
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn("Invalid username or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-dark">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="username"
                    name="username"
                    value={formObj.username}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-submit mt-3">Submit</button>
              </form>
              {loggedIn && <div className="alert alert-success mt-3" role="alert">Successfully logged in!Redirecting to home...</div>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;*/
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css'; // Import the CSS file for styles

const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp);
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userType', resp.data.user.userType); // Store userType
        setIsLoggedIn(true);
        console.log("Successfully logged in");

        setTimeout(() => {
          const userType = resp.data.user.userType;
          if (userType === 'Admin' && formObj.password === '123') {
            navigate('/admin');
          } else if (userType === 'Doctor' && formObj.password === '321') {
            navigate('/chatbot');
          } else {
            navigate('/');
          }
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn("Invalid username or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-dark">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="username"
                    name="username"
                    value={formObj.username}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-submit mt-3">Submit</button>
              </form>
              {loggedIn && <div className="alert alert-success mt-3" role="alert">Successfully logged in! Redirecting to home...</div>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

