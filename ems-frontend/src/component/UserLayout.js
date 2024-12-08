 
import React from 'react';
import Sidebar from './UserSidebar';

const UserLayout = ({ children }) => {
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
      <Sidebar />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
