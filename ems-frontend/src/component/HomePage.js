import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from './ExpanseImage.jpeg';

 
const HomePage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    //   border: "1px solid red",
      backgroundImage: `url(${backgroundImage})`, // Path to your background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      textAlign: "center",
      padding: "20px",
      color: "#fff", // Ensuring text is readable on top of the background image
    },
    heading: {
      fontSize: "3.4rem",
      marginBottom: "20px",
      color: "red",
    },
    description: {
      fontSize: "1.8rem",
      color: "black",
      marginBottom: "40px",
    },
    buttonContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
    },
    button: {
      padding: "15px 30px",
      fontSize: "1.1rem",
      borderRadius: "25px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#4CAF50",
      border: "none",
      transition: "background-color 0.3s ease",
    },
    buttonSecondary: {
      backgroundColor: "#008CBA",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    buttonHoverSecondary: {
      backgroundColor: "#007B9A",
    },
    footer: {
      marginTop: "50px",
      fontSize: "1rem",
      color: "black",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Expense Management System</h1>
      <p style={styles.description}>
        Take control of your finances with our simple and easy-to-use
        Expense Management System. Track your spending, set budgets, and more.
      </p>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigate("/user/login")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Login as User
        </button>
        <button
          style={styles.button}
          onClick={() => navigate("/admin/login")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Login as Admin
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => navigate("/user/register")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHoverSecondary.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
        >
          Register as User
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onClick={() => navigate("/admin/register")}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHoverSecondary.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
        >
          Register as Admin
        </button>
      </div>

      <footer style={styles.footer}>
        &copy; 2024 Expense Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
