import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const CategoryManagement = ( ) => {
  const { userId } = useParams();
  // Form state
  const [category, setCategory] = useState({ name: '', description: '' });
  const [categoryList, setCategoryList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Backend API URL
  const API_URL = `http://localhost:8080/api/user/${userId}/category`;

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
    form: {
      width: '600px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
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
    actionButton: {
      margin: '0 5px',
      cursor: 'pointer',
    },
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      setCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      // Update category
      const updatedCategoryList = [...categoryList];
      updatedCategoryList[editIndex] = category;
      setCategoryList(updatedCategoryList);
      setEditing(false);
      setEditIndex(null);
    } else {
      try {
        await axios.post(`${API_URL}/add`, category);
        fetchCategories(); // Refresh categories
      } catch (error) {
        console.error('Error adding category:', error);
      }
    }
    setCategory({ name: '', description: '' }); // Reset form
  };

  // Handle delete action
  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`${API_URL}/delete/${categoryId}`);
      fetchCategories(); // Refresh categories
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Handle edit action
  const handleEdit = (index) => {
    const categoryToEdit = categoryList[index];
    setCategory({ name: categoryToEdit.name, description: categoryToEdit.description });
    setEditIndex(index);
    setEditing(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span role="img" aria-label="building">🏛️</span> Expense Management System
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Name*</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={category.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Description*</label>
          <textarea
            style={styles.input}
            name="description"
            placeholder="Enter description"
            value={category.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button style={styles.button} type="submit">
          {editing ? 'Update' : 'Create'}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((cat, index) => (
            <tr key={cat.id || index}>
              <td style={styles.tableCell}>{cat.name}</td>
              <td style={styles.tableCell}>{cat.description}</td>
              <td style={styles.tableCell}>
                <button
                  style={styles.actionButton}
                  onClick={() => handleEdit(index)}
                >
                  ✏️
                </button>
                <button
                  style={styles.actionButton}
                  onClick={() => handleDelete(cat.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
