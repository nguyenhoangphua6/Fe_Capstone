import { lazy } from "react";
import { Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";

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
const SubjectList = lazy(() => import("../views/ui/SubjectList"));
const ResuiltTable = lazy(() => import("../views/ui/ResuiltTable"));
const Login = lazy(() => import("../views/ui/Login"));
const AddStudent = lazy(() => import("../views/ui/AddStudent"));
const AddTeacher = lazy(() => import("../views/ui/AddTeacher"));
const TeacherList = lazy(() => import("../views/ui/TeacherList"));
const ChangePassword = lazy(() => import("../views/ui/ChangePassword"));
const ResetPassword = lazy(() => import("../views/ui/ResetPassword"));
const AddExam = lazy(() => import("../views/ui/AddExam"));
const ExamShow = lazy(() => import("../views/ui/ExamShow"));
const ListExam = lazy(() => import("../views/ui/ListExam"));
const Result = lazy(() => import("../views/ui/Result"));
const CheckEssay = lazy(() => import("../views/ui/CheckEssay"));
const AddStudentIntoCourse = lazy(() => import("../views/ui/AddStudentIntoCourse"));
const AddTeacherIntoCourse = lazy(() => import("../views/ui/AddTeacherIntoCourse"));
const ListSutdentDoExam = lazy(() => import("../views/ui/ListSutdentDoExam"));
const Profile = lazy(() => import("../views/ui/Profile"));
const EditProfile = lazy(() => import("../views/ui/EditProfile"));

// const Forms = lazy(() => import("../views/ui/Forms"));
// const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      { path: "/login", exact: true, element: <Login /> },
      { path: "/", exact: true, element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      // { path: "/", exact: true, element: <Login /> },
      { path: "/starter", exact: true, element: <Starter /> },
      // { path: "/about", exact: true, element: <About /> },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      { path: "/changepassword", exact: true, element: <ChangePassword /> },
      { path: "/resetpassword", exact: true, element: <ResetPassword /> },
      { path: "/examshow/:id", exact: true, element: <ExamShow /> },
      { path: "/result/:id", exact: true, element: <Result /> },  
      { path: "/profile", exact: true, element: <Profile /> },
      { path: "/addstudent", exact: true, element: <AddStudent /> },
      { path: "/addteacher", exact: true, element: <AddTeacher /> },
      { path: "/editprofile", exact: true, element: <EditProfile /> },
      { path: "/addstudentintocourse", exact: true, element: <AddStudentIntoCourse /> },
      { path: "/addteacherintocourse", exact: true, element: <AddTeacherIntoCourse /> },
      { path: "/subjectlist", exact: true, element: <SubjectList /> },
      // { path: "/tables", exact: true, element: <Tables /> },
      { path: "/studentlist", exact: true, element: <StudentList /> },
      { path: "/teacherlist", exact: true, element: <TeacherList /> },
      { path: "/resuilttable", exact: true, element: <ResuiltTable /> },
      { path: "/addexam/:id", exact: true, element: <AddExam /> },
      { path: "/listexam/:id", exact: true, element: <ListExam /> },
      { path: "/listsutdentdoexam/:id", exact: true, element: <ListSutdentDoExam /> },
      { path: "/CheckEssay", exact: true, element: <CheckEssay /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
