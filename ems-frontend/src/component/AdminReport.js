import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminReport = () => {
    const { userId } = useParams();
  const [users, setUsers] = useState([]);
   
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reports, setReports] = useState([]);

  // Inline CSS styles
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

  // Fetch all users
  useEffect(() => {
    axios.get("http://localhost:8080/api/admin/report/getreports").then((res) => {
      setUsers(res.data);
    });
  }, []);

  // Fetch reports for a user
  const fetchReports = () => {
    axios.get(`http://localhost:8080/api/admin/report/getreports`).then((res) => {
      setReports(res.data);
    });
  };

  // Generate report
  const generateReport = () => {
    const reportData = {
      period: `${new Date(startDate).toLocaleDateString()} - ${new Date(
        endDate
      ).toLocaleDateString()}`,
      totalAmount: Math.floor(Math.random() * 1000) + 100,  
      generatedDate: new Date(),
    };

    axios
      .post(`http://localhost:8080/api/user/${userId}/report/add`, reportData)
      .then((res) => {
        setReports(res.data);
      });
  };

  // Delete a report
  const deleteReport = (reportId) => {
    axios
      .delete(`http://localhost:8080/api/user/${userId}/report/delete/${reportId}`)
      .then((res) => {
        setReports(res.data);
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Expense Management System</h1>
       
       
       
      <button style={styles.button} onClick={fetchReports}>
        Generate
      </button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>User</th>
            <th style={styles.tableHeader}>Period</th>
            <th style={styles.tableHeader}>Total Amount</th>
            <th style={styles.tableHeader}>Generated Date</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.reportId}>
              <td style={styles.tableCell}>{report.userName}</td>
              <td style={styles.tableCell}>{"20 Days "}</td>
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

export default AdminReport;
