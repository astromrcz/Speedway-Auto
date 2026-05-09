import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from './Login';

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user && profile) {
      const routes = {
        ADMIN: '/admin',
        SUPER_ADMIN: '/admin',
        STAFF: '/staff',
        CUSTOMER: '/dashboard'
      };
      navigate(routes[profile.role] || '/dashboard');
    }
  }, [user, profile, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sidebar/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">Speed</span>
              <span className="text-foreground">Way</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">SERVICES</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">ABOUT</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">CONTACT</a>
          </nav>

          <button
            onClick={() => setShowLoginModal(true)}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            LOGIN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          background: 'linear-gradient(135deg, #0F1419 0%, #1F2937 50%, #7F1D1D 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #E63946 0%, transparent 50%), radial-gradient(circle at 80% 20%, #DC2F02 0%, transparent 50%)',
        }}></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            TURN THE COLOR<br />
            TO THE MAXIMUM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Precision-driven auto detailing and paint restoration. Book your appointment online and experience showroom perfection.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-12 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            BOOK NOW
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase">Our Services</h2>
            <p className="text-muted-foreground text-lg">Professional detailing services for all vehicle types</p>
          </div>

          <div className="text-center py-12 text-muted-foreground">
            Please login to view available services
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase">About SpeedWay</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We are a professional auto detailing studio specializing in paint correction,
              ceramic coating, and complete vehicle restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Quality</h3>
              <p className="text-muted-foreground text-sm">Expert technicians with years of experience</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-muted-foreground text-sm">Efficient processes without compromising quality</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-muted-foreground text-sm">100% satisfaction guaranteed on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book your appointment today and experience the SpeedWay difference
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-12 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-sidebar border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; 2026 SpeedWay AutoxMoto Detail Studio. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Login onSuccess={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
