// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:5000/forgotpassword', { email });
//       console.log('Password reset email sent successfully');
//       // Add logic to show a success message or redirect the user
//     } catch (error) {
//       console.error('Error sending password reset email:', error);
//       // Handle error, e.g., display an error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Enter your email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:5000/forgotpassword', { email });
//       setAlertMessage('Password reset email sent successfully');
//       // Optionally, clear the email input field after successful submission
//       setEmail('');
//     } catch (error) {
//       console.error('Error sending password reset email:', error);
//       // Handle error, e.g., display an error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       {alertMessage && <div className="alert">{alertMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Enter your email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import axios from 'axios';
import './forgetpassword.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/forgotpassword', { email });
      window.alert(' email sent successfully ');
      // Optionally, clear the email input field after successful submission
      setEmail('');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 style={{color:'white'}} >Forgot Password</h2>
      <form className="forgot-password-form" onSubmit={handleSubmit} >
        <div>
         
          <input type="email" id="email" value={email} onChange={handleEmailChange} required className="forgot-password-input" placeholder='Enter your email' />
        </div>
        <button type="submit" className="forgot-password-button">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

