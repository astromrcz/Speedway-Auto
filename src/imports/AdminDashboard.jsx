import React from 'react';
import Sidebar from '../components/Sidebar';
import PageHeader from './PageHeader';

const AdminDashboard = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Bookings', path: '/admin/bookings' },
    { label: 'Payments', path: '/admin/payments' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Services', path: '/admin/services' },
    { label: 'Schedule', path: '/admin/schedule' },
    { label: 'Analytics', path: '/admin/analytics' },
    { label: 'Notifications', path: '/admin/notifications' },
  ];

  const stats = [
    { label: 'TODAY\'S REVENUE', value: '₱0', color: 'text-green-500' },
    { label: 'PENDING BOOKINGS', value: '0', color: 'text-yellow-500' },
    { label: 'ACTIVE SERVICES', value: '0', color: 'text-blue-500' },
    { label: 'TOTAL CUSTOMERS', value: '0', color: 'text-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar menuItems={menuItems} />
      
      <div className="ml-64 p-8">
        <PageHeader
          title="HELLO, CHARLES"
          subtitle="Administrative Console"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 rounded-lg border border-border">
              <div className="text-muted-foreground text-xs mb-2">{stat.label}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">PENDING PAYMENTS</h2>
            <div className="text-center py-8 text-muted-foreground">
              No pending payments
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">RECENT BOOKINGS</h2>
            <div className="text-center py-8 text-muted-foreground">
              No recent bookings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
