import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    street: "",
    city: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (!formData.contactNo) formErrors.contactNo = "Contact number is required";
    if (!formData.street) formErrors.street = "Street is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.pincode) formErrors.pincode = "Pincode is required";

    return formErrors;
  };

  const register = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return; 
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:9000/register", {
        ...formData,
        id: new Date().getTime(), 
      });

      setMessage(response.data?.message || "Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNo: "",
        street: "",
        city: "",
        pincode: "",
      });
      setErrors({});
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Register</h2>

        <form onSubmit={register} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, firstName: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, lastName: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, email: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, password: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <Input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, contactNo: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.contactNo ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.contactNo && <p className="text-xs text-red-500 mt-1">{errors.contactNo}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <Input
              type="text"
              name="street"
              value={formData.street}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, street: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.street ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.street && <p className="text-xs text-red-500 mt-1">{errors.street}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, city: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <Input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, pincode: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${errors.pincode ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
          </div>

          <div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </form>

        {message && (
          <div className="mt-4 text-center text-md text-red-500">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
