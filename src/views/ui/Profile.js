import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardTitle } from "reactstrap";

const Profile = () => {
  const { email } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://http://ai.chamdiemthi.phunguyen.store/api/profile/1`
        );
        setStudent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
  }, [email]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardTitle tag="h5" className="p-3 mb-0">
          Student Profile
        </CardTitle>
        <CardBody>
          <div>
            <h6>Email: {student.email}</h6>
            <h6>Full Name: {student.fullname}</h6>
            <h6>Ngày sinh: {student.birthday}</h6>
            <h6>Giới tính: {student.gender}</h6>
            <h6>Địa chỉ: {student.address}</h6>
            <h6>Thời gian tạo: {student.created_at}</h6>
            <h6>Thời gian update: {student.updated_at}</h6>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;