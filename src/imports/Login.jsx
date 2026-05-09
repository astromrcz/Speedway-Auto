import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = ({ onSuccess }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, profile, signInWithPassword, signUp } = useAuth();

  useEffect(() => {
    if (user && profile) {
      const routes = {
        ADMIN: '/admin',
        SUPER_ADMIN: '/admin',
        STAFF: '/staff',
        CUSTOMER: '/dashboard'
      };
      navigate(routes[profile.role] || '/dashboard');
      if (onSuccess) onSuccess();
    }
  }, [user, profile, navigate, onSuccess]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await signInWithPassword(email, password);
      if (error) {
        alert(error.message);
      }
    } catch (err) {
      alert('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        alert(error.message);
      } else {
        alert('Registration successful! Please login.');
        setMode('login');
      }
    } catch (err) {
      alert('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-8 w-full max-w-md border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase">
          {mode === 'login' ? 'SPEEDWAY DETAIL STUDIO' : 'CREATE ACCOUNT'}
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          {mode === 'login' ? 'Welcome Back' : 'Join SpeedWay'}
        </p>
      </div>

      {mode === 'login' ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'LOGGING IN...' : 'LOGIN'}
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">Don't have an account? </span>
            <button
              type="button"
              onClick={() => setMode('register')}
              className="text-sm text-primary hover:underline font-medium"
            >
              Register
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary text-foreground"
              placeholder="Create a password (min 6 characters)"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'CREATING ACCOUNT...' : 'REGISTER'}
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">Already have an account? </span>
            <button
              type="button"
              onClick={() => setMode('login')}
              className="text-sm text-primary hover:underline font-medium"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
