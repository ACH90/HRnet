// router/router.js
import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import EmployeeList from "../pages/EmployeeList/EmployeeList";

const router = createBrowserRouter([
  { path: "/", element: <CreateEmployee /> },
  { path: "/employee-list", element: <EmployeeList /> },
]);

export default router;
