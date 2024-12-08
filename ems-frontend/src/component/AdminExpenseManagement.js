import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminExpenseManagement = () => {
  const [expenseList, setExpenseList] = useState([]);

  // Inline CSS styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      marginTop: '20px',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px',
      textAlign: 'left',
    },
    tableCell: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      textAlign: 'left',
    },
  };

  // Fetch expenses from the API
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/expense/getexpenses');
      setExpenseList(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Fetch expenses on component mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span role="img" aria-label="building">🏛️</span> Expense Management System
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>User</th>
            <th style={styles.tableHeader}>Amount</th>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Category</th>
            <th style={styles.tableHeader}>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.length > 0 ? (
            expenseList.map((exp, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{exp.userName}</td>
                <td style={styles.tableCell}>{exp.amount}</td>
                <td style={styles.tableCell}>{exp.date}</td>
                <td style={styles.tableCell}>{exp.category}</td>
                <td style={styles.tableCell}>{exp.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={styles.tableCell}>No expenses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminExpenseManagement;
