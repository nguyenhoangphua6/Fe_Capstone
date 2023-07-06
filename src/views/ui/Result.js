import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [teacherComment, setTeacherComment] = useState("");
  const [teacherScore, setTeacherScore] = useState("");
  const [studentData, setStudentData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resuiltid = localStorage.getItem("resuiltid");
        const response = await axios.get(`http://be.chamdiemthi.phunguyen.store/api/studentexam/${resuiltid}`);
        if (response.data) {
          setStudentData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    if (studentData.comment) {
      setTeacherComment(studentData.comment);
    }
    if (studentData.score) {
      setTeacherScore(studentData.score.toString());
    }
  }, [studentData]);
  
  const handleSubmit = async () => {
    try {
      const roleId = localStorage.getItem("Role");
      let status = "";

      if (roleId === "3") {
        status = "học sinh đã sửa";
      } else if (roleId === "2") {
        status = "giáo viên đã chấm";
      } else if (roleId === "1") {
        status = "giáo vụ đã sửa";
      }

      const data = {
        id: studentData.id,
        result_image_url: studentData.result_image_url,
        score: teacherScore,
        comment: teacherComment,
        status: status
      };

      const response = await axios.put(`http://be.chamdiemthi.phunguyen.store/api/studentexam/${studentData.id}`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      // Xử lý sau khi gửi dữ liệu thành công (nếu cần)

      message.success("Chấm điểm thành công"); // Hiển thị thông báo thành công
      console.log(response.data); // Log kết quả từ server (nếu cần)

      // Quay trở lại trang trước đó
      navigate(-1);
    } catch (error) {
      console.error(error);
      message.error("Chấm điểm thất bại"); // Hiển thị thông báo thất bại
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const roleId = localStorage.getItem("Role");
  const isTeacherRole = roleId === "1" || roleId === "2";
  const isStudentRole = roleId === "3";

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          {/* Hiển thị bài làm của học sinh */}
          <img src={"http://be.chamdiemthi.phunguyen.store/api/image/" + studentData.result_image_url} alt="Student Answer" style={{ width: "100%" }} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Tên học sinh" name="studentName">
              <Input defaultValue={studentData.student.fullname} disabled style={{ color: 'black' }} />
            </Form.Item>
            <Form.Item label="Giới tính" name="studentClass">
              <Input defaultValue={studentData.student.gender} disabled style={{ color: 'black' }} />
            </Form.Item>
            <Form.Item label={isStudentRole ? "Nhận xét" : "Nhận xét của GPT"} name="gptComment">
              <Input.TextArea defaultValue={studentData.comment} disabled autoSize={{ minRows: 4 }} style={{ color: 'black' }} />
            </Form.Item>
            <Form.Item label={isStudentRole ? "Điểm số" : "Điểm dự đoán của GPT"} name="predictedScore">
              <Input defaultValue={studentData.score} disabled style={{ color: 'black' }} />
            </Form.Item>
            {isTeacherRole && (
              <>
                <Form.Item label="Nhận xét của giáo viên" name="teacherComment">
                  <Input.TextArea value={teacherComment} onChange={(e) => setTeacherComment(e.target.value)} autoSize={{ minRows: 4 }} />
                </Form.Item>
                <Form.Item label="Điểm giáo viên cho" name="teacherScore">
                  <Input value={teacherScore} onChange={(e) => setTeacherScore(e.target.value)} />
                </Form.Item>
                {isTeacherRole && (
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                )}
              </>
            )}
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Result;
