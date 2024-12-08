import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ExpenseManagement = () => {
  const { userId } = useParams(); // Extract userId from the route
  const navigate = useNavigate(); // Navigation hook for logout

  const [expense, setExpense] = useState({
    userName: "", // Display username fetched from the backend
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const [expenseList, setExpenseList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const API_BASE_URL = `http://localhost:8080/api/user/${userId}/expense`;

  
  const styles =  {
    
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    
    form: {
      width: "600px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    table: {
      width: "100%",
      marginTop: "20px",
      borderCollapse: "collapse",
    },
    tableHeader: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
    },
    tableCell: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
    },
  };

  // Fetch expenses for the specific user
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/all`)
      .then((response) => setExpenseList(response.data))
      .catch((error) => console.error("Error fetching expenses:", error));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const payload = { ...expense, id: editing ? editId : null };
  
    axios
      .post(`${API_BASE_URL}/add`, payload)
      .then((response) => {
        setExpenseList(response.data); // Assuming backend returns updated expense list
        resetForm();
      })
      .catch((error) => console.error("Error updating/adding expense:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/delete/${id}`)
      .then((response) => {
        setExpenseList(response.data); // Assuming backend returns updated expense list
      })
      .catch((error) => console.error("Error deleting expense:", error));
  };

  const handleEdit = (expense) => {
    setExpense({
      userName: expense.userName,
      amount: expense.amount,
      date: expense.date,
      category: expense.category,
      description: expense.description,
    });
    setEditId(expense.id);
    setEditing(true);
  };

  const resetForm = () => {
    setExpense({
      userName: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
    setEditId(null);
    setEditing(false);
  };

 

  return (
    <div style={styles.container}>
      

      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Amount*</label>
          <input
            style={styles.input}
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date*</label>
          <input
            style={styles.input}
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Category*</label>
          <input
            style={styles.input}
            name="category"
            placeholder="Enter category"
            value={expense.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description*</label>
          <textarea
            style={styles.input}
            name="description"
            placeholder="Enter description"
            value={expense.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button style={styles.button} type="submit">
          {editing ? "Update" : "Add Expense"}
        </button>
        {editing && (
          <button
            style={{ ...styles.button, backgroundColor: "gray" }}
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>User</th>
            <th style={styles.tableHeader}>Amount</th>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Category</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((exp) => (
            <tr key={exp.id}>
              <td style={styles.tableCell}>{exp.userName}</td>
              <td style={styles.tableCell}>{exp.amount}</td>
              <td style={styles.tableCell}>{exp.date}</td>
              <td style={styles.tableCell}>{exp.category}</td>
              <td style={styles.tableCell}>{exp.description}</td>
              <td style={styles.tableCell}>
                <button onClick={() => handleEdit(exp)}>Edit</button>
                <button onClick={() => handleDelete(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseManagement;
