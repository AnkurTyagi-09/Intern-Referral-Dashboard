import { useState } from 'react';
import Button from './common/Button';
import { credentials } from '../data/dummyData';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    if (!formData.username || !formData.password) {
      setError('Please enter both username and password');
      console.error('Login failed: Missing credentials');
      return;
    }
    if (formData.username === credentials.username && formData.password === credentials.password) {
      console.log('Successful login for', formData.username);
      onLogin('mock-jwt-token');
    } else {
      setError('Invalid username or password');
      console.error('Login failed: Invalid credentials');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Welcome Back! Please log in to continue.
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}
      <div className="mb-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>
      <Button onClick={handleSubmit} text="Login" />
    </div>
  );
}

export default LoginForm;