import React from 'react';
import Sidebar from '../components/Sidebar';
import PageHeader from './PageHeader';

const AdminPayments = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Sidebar menuItems={menuItems} />
      
      <div className="ml-64 p-8">
        <PageHeader
          title="PAYMENTS"
          subtitle="Manage payment verification and refunds"
        />

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="text-center py-16 text-muted-foreground">
            No pending payments to verify
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
