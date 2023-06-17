import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
// const Cards = lazy(() => import("../views/ui/Cards"));
// const Grid = lazy(() => import("../views/ui/Grid"));
// const Tables = lazy(() => import("../views/ui/Tables"));
const StudentList = lazy(() => import("../views/ui/StudentList"));
const Login = lazy(() => import("../views/ui/Login"));
const AddStudent = lazy(() => import("../views/ui/AddStudent"));
const AddTeacher = lazy(() => import("../views/ui/AddTeacher"));
const CreateAccount = lazy(() => import("../views/ui/CreateAccount"));
const TeacherList = lazy(() => import("../views/ui/TeacherList"));
// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      // { path: "/about", exact: true, element: <About /> },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/addstudent", exact: true, element: <AddStudent /> },
      { path: "/addteacher", exact: true, element: <AddTeacher /> },
      { path: "/createaccount", exact: true, element: <CreateAccount /> },
      // { path: "/tables", exact: true, element: <Tables /> },
      { path: "/studentlist", exact: true, element: <StudentList /> },
      { path: "/teacherlist", exact: true, element: <TeacherList /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
