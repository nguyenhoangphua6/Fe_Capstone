import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { message } from "antd";
import "./Profile.css"; // Import custom CSS file for styling

const Profile = () => {
  const { email } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://be.chamdiemthi.phunguyen.store/api/profile/${localStorage.getItem("Id")}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
  }, [email]);

  const handleEditProfile = () => {
    // Handle edit profile logic here
    message.success("Redirecting to edit profile page");
  };

  if (!student || Object.keys(student).length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <CardTitle tag="h5" className="profile-title">
          Thông tin cá nhân
        </CardTitle>
        <CardBody>
          <div className="profile-info">
            <div className="profile-item">
              <h6 className="profile-label">Email:</h6>
              <p className="profile-value">{student.email}</p>
            </div>
            <div className="profile-item">
              <h6 className="profile-label">Họ và tên:</h6>
              <p className="profile-value">{student.fullname}</p>
            </div>
            <div className="profile-item">
              <h6 className="profile-label">Ngày sinh:</h6>
              <p className="profile-value">{student.birthday}</p>
            </div>
            <div className="profile-item">
              <h6 className="profile-label">Giới tính:</h6>
              <p className="profile-value">{student.gender}</p>
            </div>
            <div className="profile-item">
              <h6 className="profile-label">Địa chỉ:</h6>
              <p className="profile-value">{student.address}</p>
            </div>
          </div>
          <Button tag={Link} to="/editprofile" color="primary" className="edit-profile-button">
            Edit Profile
          </Button>
          <Button tag={Link} to="/changepassword" className="change-password-button">
          Đổi mật khẩu
        </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
