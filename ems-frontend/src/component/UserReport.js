import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserReport = () => {
  const { userId } = useParams(); // Extract userId from route params
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(""); // To handle API errors

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
      width: "100%",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    error: {
      color: "red",
      marginBottom: "10px",
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
    actionButton: {
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      padding: "5px 10px",
    },
  };

  // Fetch reports for a user
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    axios
      .get(`http://localhost:8080/api/user/${userId}/report/all`)
      .then((res) => setReports(res.data))
      .catch((err) => setError("Failed to fetch reports"));
  };

  // Generate report
  const generateReport = () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates");
      return;
    }

    const reportData = {
      startDate,
      endDate,
    };

    axios
      .post(`http://localhost:8080/api/user/${userId}/report/add`, reportData)
      .then((res) => {
        setReports((prevReports) => [...prevReports, res.data]);
        setError(""); // Clear any previous errors
      })
      .catch((err) => setError("Failed to generate report"));
  };

  // Delete a report
  const deleteReport = (reportId) => {
    axios
      .delete(`http://localhost:8080/api/user/${userId}/report/delete/${reportId}`)
      .then(() => setReports((prevReports) => prevReports.filter((r) => r.reportId !== reportId)))
      .catch((err) => setError("Failed to delete report"));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Expense Management System</h1>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.formGroup}>
        <label style={styles.label}>User ID:</label>
        <input value={userId} readOnly style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />
      </div>
      <button style={styles.button} onClick={generateReport}>
        Generate
      </button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Period</th>
            <th style={styles.tableHeader}>Total Amount</th>
            <th style={styles.tableHeader}>Generated Date</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.reportId}>
              <td style={styles.tableCell}>{"20 Days"}</td>
              <td style={styles.tableCell}>{20000}</td>
              <td style={styles.tableCell}>{report.startDate}
                {/* {new Date(report.generatedDate).toLocaleDateString()} */}
              </td>
              <td style={styles.tableCell}>
                <button
                  style={styles.actionButton}
                  onClick={() => deleteReport(report.reportId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserReport;
