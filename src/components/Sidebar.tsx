import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface MenuItem {
  label: string;
  path: string;
  icon?: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="text-2xl font-bold">
          <span className="text-primary">Speed</span>
          <span className="text-sidebar-foreground">Way</span>
        </div>
      </div>

      {/* User Info */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold">
              {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-sidebar-foreground truncate">
              {profile?.full_name || 'User'}
            </div>
            <div className="text-xs text-primary font-medium">
              {profile?.role || 'CUSTOMER'}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full px-6 py-3 text-left text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button
          onClick={() => navigate('/settings')}
          className="w-full px-4 py-2 text-left text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
        >
          Settings
        </button>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
