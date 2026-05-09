import React from 'react';
import Sidebar from '../components/Sidebar';
import PageHeader from './PageHeader';

const StaffDashboard = () => {
  const menuItems = [
    { label: 'Tasks', path: '/staff' },
    { label: 'Notifications', path: '/staff/notifications' },
    { label: 'History of Services', path: '/staff/history' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar menuItems={menuItems} />
      
      <div className="ml-64 p-8">
        <PageHeader
          title="OPERATIONAL QUEUE"
          subtitle="Your assigned tasks and current workload"
        />

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="text-center py-16 text-muted-foreground">
            No active assignments for today
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
