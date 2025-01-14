import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPaymentStatus('');
    try {
      const response = await axios.post('http://localhost:9000/api/payments/create', formData);
      const token = response.data.split(': ')[1]; // Extract the token from the response
      setPaymentStatus('Payment token generated. Confirming payment...');
      await handleConfirmPayment(token);
    } catch (error) {
      setPaymentStatus(error.response?.data || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async (token) => {
    try {
      const response = await axios.post(`http://localhost:9000/api/payments/confirm?token=${token}`);
      setPaymentStatus(response.data); // The response will now be a simple success message
    } catch (error) {
      setPaymentStatus(error.response?.data || 'An error occurred while confirming payment.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Payment System</h1>
      <form 
        onSubmit={handleCreatePayment} 
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date (MM/YY):
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {loading ? 'Processing...' : 'Create Payment'}
        </button>
      </form>
      {paymentStatus && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-lg font-semibold mb-2">Status</h3>
          <p className="text-gray-700">{paymentStatus}</p>
        </div>
      )}
    </div>
  );
}

export default App;
