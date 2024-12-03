'use client';

import { useState } from 'react';
import { sendOTP, resendOTP, verifyOTP, registerUser, checkUsername } from '../lib/apiClient';

const JoinPage = () => {
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Enter Contact, 2: Verify OTP, 3: Register
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    type: 'athlete',
  });

  const handleSendOTP = async () => {
    try {
      const response = await sendOTP(contact);
      console.log(response.data);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await verifyOTP(contact, otp);
      console.log(response.data);
      setStep(response.data.isLogin ? 4 : 3); // Proceed to next step based on login status
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser({ contact, ...userData });
      console.log(response.data);
      setStep(4); // Registration complete
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleCheckUsername = async (username) => {
    try {
      const response = await checkUsername(username);
      return !response.data.exists;
    } catch (err) {
      setError('Error checking username');
      return false;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Join VYRA</h1>
      {error && <p className="text-red-500">{error}</p>}
      {step === 1 && (
        <>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your email or phone number"
            className="w-full p-2 border rounded mb-4"
          />
          <button onClick={handleSendOTP} className="w-full bg-blue-600 text-white p-2 rounded">
            Send OTP
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-2 border rounded mb-4"
          />
          <button onClick={handleVerifyOTP} className="w-full bg-blue-600 text-white p-2 rounded">
            Verify OTP
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <input
            type="text"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
            onBlur={async () => {
              const valid = await handleCheckUsername(userData.username);
              if (!valid) setError('Username already taken');
            }}
            placeholder="Choose a username"
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Your full name"
            className="w-full p-2 border rounded mb-4"
          />
          <button onClick={handleRegister} className="w-full bg-blue-600 text-white p-2 rounded">
            Register
          </button>
        </>
      )}
      {step === 4 && <p className="text-green-500">Registration complete! Welcome to VYRA.</p>}
    </div>
  );
};

export default JoinPage;
