import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { message } from "antd";
import "./EditProfile.css";
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = {
        address: student.address,
        birthday: student.birthday,
        fullname: student.fullname,
      };

      await axios.put(`http://be.chamdiemthi.phunguyen.store/api/profile/${localStorage.getItem("Id")}`, updatedProfile);

      message.success("Thay đổi thông tin cá nhân thành công");
      navigate('/profile');

    } catch (error) {
      console.error(error);
      // Handle error or display an error message
    }
  };

  if (!student || Object.keys(student).length === 0) {
    return <div>No data available</div>;
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <div className="edit-profile-container">
      <Card className="edit-profile-card">
        <CardTitle tag="h5" className="p-3 mb-0">
          Edit Profile
        </CardTitle>
        <CardBody>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup className="edit-profile-info">
              <div className="edit-profile-item">
                <Label className="edit-profile-label">Email:</Label>
                <Input
                  type="email"
                  className="edit-profile-value"
                  defaultValue={student.email}
                  disabled
                />
              </div>
              <div className="edit-profile-item">
                <Label className="edit-profile-label">Full Name:</Label>
                <Input
                  type="text"
                  className="edit-profile-value"
                  value={student.fullname}
                  name="fullname"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="edit-profile-item">
                <Label className="edit-profile-label">Ngày sinh:</Label>
                <Input
                  type="text"
                  className="edit-profile-value"
                  value={student.birthday}
                  name="birthday"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="edit-profile-item">
                <Label className="edit-profile-label">Giới tính:</Label>
                <Input
                  type="text"
                  className="edit-profile-value"
                  value={student.gender}
                  disabled
                />
              </div>
              <div className="edit-profile-item">
                <Label className="edit-profile-label">Địa chỉ:</Label>
                <Input
                  type="text"
                  className="edit-profile-value"
                  value={student.address}
                  name="address"
                  onChange={handleChangeInput}
                />
              </div>
            </FormGroup>
            <Button type="submit" color="primary">
              Save Changes
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditProfile;
