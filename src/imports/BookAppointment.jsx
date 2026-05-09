import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PageHeader from './PageHeader';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Book Service', path: '/book' },
    { label: 'My Bookings', path: '/my-bookings' },
    { label: 'Notifications', path: '/notifications' },
  ];

  const vehicleTypes = [
    { type: 'SEDAN', icon: '🚗' },
    { type: 'SUV', icon: '🚙' },
    { type: 'VAN/LIMO', icon: '🚐' },
    { type: 'MOTORCYCLE', icon: '🏍️' },
    { type: 'BIG BIKE', icon: '🏍️' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar menuItems={menuItems} />
      
      <div className="ml-64 p-8">
        <PageHeader
          title="FLEET SCHEDULER"
          subtitle="Build your fleet and schedule your premium services"
        />

        {/* Step Indicators */}
        <div className="flex justify-center mb-12">
          {[
            { num: 1, label: 'FLEET' },
            { num: 2, label: 'SERVICES' },
            { num: 3, label: 'FINALIZE' }
          ].map((item, idx) => (
            <div key={item.num} className="flex items-center">
              <div className={`flex items-center gap-3 ${idx > 0 ? 'ml-8' : ''}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  step >= item.num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground border-2 border-border'
                }`}>
                  {item.num}
                </div>
                <span className={`text-sm font-medium ${
                  step >= item.num ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </div>
              {idx < 2 && (
                <div className={`w-16 h-0.5 ml-8 ${
                  step > item.num ? 'bg-primary' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Select Machine Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {vehicleTypes.map((vehicle) => (
                <button
                  key={vehicle.type}
                  className="p-8 bg-card border-2 border-border rounded-lg hover:border-primary transition-colors text-center"
                >
                  <div className="text-5xl mb-4">{vehicle.icon}</div>
                  <div className="font-bold text-sm">{vehicle.type}</div>
                </button>
              ))}
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Your Fleet</h3>
              <div className="text-center py-12 text-muted-foreground">
                No vehicles added yet.
                <div className="mt-4">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90">
                    ADD FIRST VEHICLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
