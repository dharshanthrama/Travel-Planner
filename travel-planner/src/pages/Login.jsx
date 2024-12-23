import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:9000/login", { email, password });

      const token = response.data.token;
      const userRole = response.data.role;

      localStorage.setItem("jwt_token", `Bearer ${token}`);
      localStorage.setItem("user_role", userRole);

      setMessage("Login successful!");
      setFormData({ email: "", password: "" });

      if (userRole === "ROLE_ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed, please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);
    login(formData.email, formData.password);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prevData) => ({ ...prevData, email: e.target.value }))
              }
              className={`mt-1 p-2 w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
              className={`mt-1 p-2 w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
          <div class="flex items-center justify-between">
          <div class="flex items-start">
  <div class="flex items-center h-5">
    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
     </div>
     <div class="ml-3 text-sm">
      <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
      </div>
      </div>
    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
     </div>    
      <button type="button" onClick={
       ()=>{window.location.href = "http://localhost:9000/oauth2/authorization/google"}
         } 
        className="flex bg-gray-200 p-2 text-sm m-auto rounded-lg"><img className="h-6" src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"></img>Sign in with google</button>
           <p class="text-sm font-light text-gray-500 dark:text-gray-400">
           Don’t have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
           </p>                                           
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

export default Login;
