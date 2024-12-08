import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoryManagement from "./CategoryManagement";
import AdminCategoryManagement from "./AdminCategoryManagement";
import ExpenseManagement from "./ExpenseManagement";
import AdminExpenseManagement from "./AdminExpenseManagement";
import HomePage from "./HomePage";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import UserLoginPage from "./UserLoginPage";
import AdminLoginPage from "./AdminLoginPage";
import RegistrationPage from "./RegistrationPage";
import AdminRegistrationPage from "./AdminRegistrationPage";
import UserReport from "./UserReport";
import AdminReport from "./AdminReport";

const AppLayout = () => {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/user/register" element={<RegistrationPage />} />
        <Route path="/admin/register" element={<AdminRegistrationPage />} />

        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route path="/user/expenses/:userId" element={<UserLayout><ExpenseManagement /></UserLayout>} />
        <Route path="/admin/expenses" element={<AdminLayout><AdminExpenseManagement /></AdminLayout>} />

        <Route path="/user/category/:userId" element={<UserLayout> <CategoryManagement /></UserLayout>} />
        <Route path="/admin/category" element={<AdminLayout> <AdminCategoryManagement /></AdminLayout>} />

        <Route path="/user/reports/:userId" element={<UserLayout> <UserReport /></UserLayout>} />
        <Route path="/admin/reports" element={<AdminLayout> <AdminReport /></AdminLayout>} />
      </Routes>
    </Router>
  );
};


export default AppLayout;
