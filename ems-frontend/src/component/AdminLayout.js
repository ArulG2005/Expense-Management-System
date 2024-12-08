 
import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  const styles = {
    layout: {
      display: 'flex',
    },
    content: {
      flex: 1,
      padding: '20px',
    },
  };

  return (
    <div style={styles.layout}>
      <AdminSidebar />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
