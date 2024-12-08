import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Correctly use navigate

  const handleLogout = () => {
    navigate("/"); // Navigate to home on logout
  };

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    logoutButton: {
      padding: "10px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
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
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Section */}
      <div style={styles.sidebar}>
        {/* Logo Section */}
        <div style={styles.logo}>
          <span style={styles.logoIcon} role="img" aria-label="dollar-sign">💲</span> EMS
        </div>

        {/* Navigation Links */}
        <Link
          to="/admin/expenses"
          style={{
            ...styles.menuItem,
            ...(location.pathname === '/admin/expenses' ? styles.activeMenuItem : {}),
          }}
        >
          Expenses
        </Link>
        <Link
          to="/admin/category"
          style={{
            ...styles.menuItem,
            ...(location.pathname === '/admin/category' ? styles.activeMenuItem : {}),
          }}
        >
          Category
        </Link>
        <Link
          to="/admin/reports"
          style={{
            ...styles.menuItem,
            ...(location.pathname === '/admin/reports' ? styles.activeMenuItem : {}),
          }}
        >
          Reports
        </Link>
        <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
      </div>

      {/* Header Section */}
       
    </div>
  );
};

export default AdminSidebar;
