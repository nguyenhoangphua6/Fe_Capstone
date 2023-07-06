import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import axios from "axios";

const AddStudentIntoCourse = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post("http://be.chamdiemthi.phunguyen.store/api/add_student_course", {
        student_id: values.studentId,
        course_id: values.courseId,
      });

      message.success("Student added to course successfully");
      // Xử lý sau khi thêm học sinh vào khóa học thành công (nếu cần)

      console.log(response.data); // Log kết quả từ server (nếu cần)

      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    } catch (error) {
      message.error("Failed to add student to course");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Thêm học sinh vào khóa học</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="ID của học sinh"
          name="studentId"
          rules={[
            { required: true, message: "Hãy điền ID của học sinh" },
            // Add more validation rules if needed
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ID của khóa học"
          name="courseId"
          rules={[
            { required: true, message: "Hãy điền ID của khóa học" },
            // Add more validation rules if needed
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Thêm học sinh vào khóa học
          </Button>
        </Form.Item>
      </Form>
      {showSuccessAlert && (
        <Alert message="Thêm học sinh thành công" type="success" showIcon />
      )}
    </div>
  );
};

export default AddStudentIntoCourse;
