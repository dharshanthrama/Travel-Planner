import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'; // Importing AlertDialog components
import { Button } from '@/components/ui/button'; // Importing Button component
import '@/Service/Register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [pincode, setPincode] = useState('');

  // State to hold error messages
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false); // For controlling the error dialog visibility
  const [errorMessage, setErrorMessage] = useState(''); // For storing error messages

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});
    
    // Validate form fields
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"; // Basic email validation
    if (!password) newErrors.password = "Password is required";
    if (!dob) newErrors.dob = "Date of birth is required";
    if (!address) newErrors.address = "Address is required";
    if (!contactNo) newErrors.contactNo = "Contact number is required";
    if (!pincode) newErrors.pincode = "Pincode is required";

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with the API call
    try {
      const response = await axios.post('http://localhost:9000/register', {
        firstName,
        lastName,
        email,
        password,
        dob,
        address,
        contactNo,
        pincode,
      });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed. Please check your details and try again.');
      setIsError(true); // Show error dialog
    }
  };

  return (
    <div className="auth-container">
      <div className="register-box">
        <h2 className="register-heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          
          <div className="input-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`input-field ${errors.firstName ? 'error' : ''}`}
            />
            {errors.firstName && <div className="error-text">{errors.firstName}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`input-field ${errors.lastName ? 'error' : ''}`}
            />
            {errors.lastName && <div className="error-text">{errors.lastName}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input-field ${errors.email ? 'error' : ''}`}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`input-field ${errors.password ? 'error' : ''}`}
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className={`input-field ${errors.dob ? 'error' : ''}`}
            />
            {errors.dob && <div className="error-text">{errors.dob}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`input-field ${errors.address ? 'error' : ''}`}
            />
            {errors.address && <div className="error-text">{errors.address}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="contactNo" className="form-label">Contact Number</label>
            <input
              type="tel"
              id="contactNo"
              placeholder="Enter your contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className={`input-field ${errors.contactNo ? 'error' : ''}`}
            />
            {errors.contactNo && <div className="error-text">{errors.contactNo}</div>}
          </div>

          <div className="input-group">
            <label htmlFor="pincode" className="form-label">Pincode</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter your pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className={`input-field ${errors.pincode ? 'error' : ''}`}
            />
            {errors.pincode && <div className="error-text">{errors.pincode}</div>}
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="message-container">
          Already have an account? <Link to="/login" className="login-link">Login here!</Link>
        </p>
      </div>

      <AlertDialog open={isError} onOpenChange={(open) => setIsError(open)}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="hidden" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error</AlertDialogTitle>
            <AlertDialogDescription>{errorMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsError(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setIsError(false)}>Ok</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Register;
