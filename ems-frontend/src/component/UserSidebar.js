import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const UserSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Correctly define navigate
  const { userId } = useParams();

  const handleLogout = () => {
    navigate("/"); // Navigate to the home page on logout
  };

  const styles = {
    sidebar: {
      height: '100vh',
      width: '200px',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    logoIcon: {
      fontSize: '30px',
      marginRight: '5px',
    },
    menuItem: {
      width: '100%',
      padding: '10px 0',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#333',
      fontSize: '16px',
      cursor: 'pointer',
    },
    activeMenuItem: {
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: '20px',
    },
    logoutButton: {
      width: '90%',
      padding: '10px',
      textAlign: 'center',
      marginTop: '20px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.sidebar}>
      {/* Logo Section */}
      <div style={styles.logo}>
        <span style={styles.logoIcon} role="img" aria-label="dollar-sign">💲</span> EMS
      </div>

      {/* Navigation Links */}
      <Link
        to={`/user/expenses/${userId}`}
        style={{
          ...styles.menuItem,
          ...(location.pathname === `/user/expenses/${userId}` ? styles.activeMenuItem : {}),
        }}
      >
        Expenses
      </Link>
      <Link
        to={`/user/category/${userId}`}
        style={{
          ...styles.menuItem,
          ...(location.pathname === `/user/category/${userId}` ? styles.activeMenuItem : {}),
        }}
      >
        Category
      </Link>
      <Link
        to={`/user/reports/${userId}`}
        style={{
          ...styles.menuItem,
          ...(location.pathname === `/user/reports/${userId}` ? styles.activeMenuItem : {}),
        }}
      >
        Reports
      </Link>

      {/* Logout Button */}
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserSidebar;
