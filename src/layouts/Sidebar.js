import { Button, Nav, NavItem } from "reactstrap";
import logoImage from "../assets/images/logos/logochamdiemthi.svg";
import { Link, useLocation } from "react-router-dom";

const role = localStorage.getItem("Role");
let navigation = [];

if(role === "1"){
  navigation = [
    {
      title: "Thông tin cá nhân",
      href: "/profile",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Sửa điểm",
      href: "/subjectlist",
      icon: "bi bi-layout-split",
    },
    {
      title: "Đổi mật khẩu",
      href: "/changepassword",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Đổi mật khẩu user",
      href: "/resetpassword",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Tạo tài khoản học sinh",
      href: "/addstudent",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Tạo tài khoản giáo viên",
      href: "/addteacher",
      icon: "bi bi-textarea-resize",
    },  
    {
      title: "Thêm học sinh vào khóa học",
      href: "/addstudentintocourse",
      icon: "bi bi-textarea-resize",
    }, 
    {
      title: "Thêm giáo viên vào khóa học",
      href: "/addteacherintocourse",
      icon: "bi bi-textarea-resize",
    }, 
    {
      title: "Danh sách học sinh",
      href: "/studentlist",
      icon: "bi bi-textarea-resize",
    }, 
    {
      title: "Danh sách giáo vien",
      href: "/teacherlist",
      icon: "bi bi-textarea-resize",
    }, 
  ];
}
else if(role === "2"){
  navigation = [
    {
      title: "Thông tin cá nhân",
      href: "/profile",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Danh sách môn học",
      href: "/subjectlist",
      icon: "bi bi-layout-split",
    },
    {
      title: "Kiểm tra đạo văn",
      href: "/checkessay",
      icon: "bi bi-layout-split",
    },
  ];
}
else{
  navigation = [
    {
      title: "Thông tin cá nhân",
      href: "/profile",
      icon: "bi bi-textarea-resize",
    },
    {
      title: "Danh sách môn học",
      href: "/subjectlist",
      icon: "bi bi-layout-split",
    },  
  ];
}


const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
      <img
          src={logoImage}
          alt="Logo"
          style={{ width: "200px", height: "200px" }}
        />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
