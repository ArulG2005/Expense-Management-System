import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

class Employee {
  constructor(id, name, age, position, department, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.position = position;
    this.department = department;
    this.email = email;
  }
}

const EmployeeService = {
  fetchAllEmployees: async () => {
    // Replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          new Employee(1, 'John Doe', 30, 'Developer', 'IT', 'john@example.com'),
          new Employee(2, 'Jane Smith', 25, 'Designer', 'Marketing', 'jane@example.com'),
        ]);
      }, 1000);
    });
  },
  removeOneEmployee: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Employee with ID ${id} deleted successfully!`);
      }, 1000);
    });
  },
};

const EmployeeAll = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const fetchAllEmployees = async () => {
    try {
      const data = await EmployeeService.fetchAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await EmployeeService.removeOneEmployee(id);
      setMessage(response);
      fetchAllEmployees(); // Refresh the employee list
    } catch (error) {
      console.error(error);
    }
  };

  const editEmployee = (id) => {
    navigate(`/edit/${id}`); // Use the appropriate path for editing
  };

  return (
    <div>
      <h2>Employee List</h2>
      {message && <div style={{ color: 'red' }}>{message}</div>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td>
                <button onClick={() => editEmployee(employee.id)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeAll;
