import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCategoryManagement = () => {
  const [categoryList, setCategoryList] = useState([]);

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

  // Fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:9898/api/admin/category/getcategories');
      setCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span role="img" aria-label="building">🏛️</span> Category Management System
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Description</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 ? (
            categoryList.map((cat) => (
              <tr key={cat.id}>
                <td style={styles.tableCell}>{cat.name}</td>
                <td style={styles.tableCell}>{cat.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={styles.tableCell}>No categories available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategoryManagement;
