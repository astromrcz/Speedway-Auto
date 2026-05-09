import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import PageHeader from './PageHeader';

const CustomerDashboard = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Book Service', path: '/book' },
    { label: 'My Bookings', path: '/my-bookings' },
    { label: 'Notifications', path: '/notifications' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar menuItems={menuItems} />
      
      <div className="ml-64 p-8">
        <PageHeader
          title="DASHBOARD"
          subtitle="Welcome back to your SpeedWay dashboard"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-muted-foreground text-sm mb-2">Active Bookings</div>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-muted-foreground text-sm mb-2">Completed</div>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-muted-foreground text-sm mb-2">Total Spent</div>
            <div className="text-3xl font-bold">₱0</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-muted-foreground text-sm mb-2">Vehicles</div>
            <div className="text-3xl font-bold">0</div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/book')}
              className="p-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-left"
            >
              <div className="font-bold mb-1">Book New Service</div>
              <div className="text-sm opacity-90">Schedule your next detailing appointment</div>
            </button>
            <button
              onClick={() => navigate('/my-bookings')}
              className="p-4 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-left"
            >
              <div className="font-bold mb-1">View My Bookings</div>
              <div className="text-sm opacity-90">Check status of your appointments</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
