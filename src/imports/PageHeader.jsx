import React from 'react';

const PageHeader = ({ title, subtitle, badge, children }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold uppercase">{title}</h1>
            {badge && (
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
          )}
        </div>
        {children && (
          <div className="flex items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
