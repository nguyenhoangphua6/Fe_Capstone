import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";

const ResultExam = () => {
  const [teacherComment, setTeacherComment] = useState("");
  const [teacherScore, setTeacherScore] = useState("");

  const handleSubmit = () => {
    // Xử lý khi nhấn nút Submit
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          {/* Hiển thị bài làm của học sinh */}
          <img src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/07/nhung-bai-thi-chu-dep-nhu-mo-cua-hoc-sinh-sai-gon-2.jpg" alt="Student Answer" style={{ width: "100%" }} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Tên học sinh" name="studentName">
              <Input value="John Doe" disabled />
            </Form.Item>
            <Form.Item label="Lớp" name="studentClass">
              <Input value="10A" disabled />
            </Form.Item>
            <Form.Item label="Điểm dự đoán của GPT" name="predictedScore">
              <Input value="8.5" disabled />
            </Form.Item>
            <Form.Item label="Nhận xét của GPT" name="gptComment">
              <Input.TextArea value="Bài làm của học sinh rất tốt và chi tiết." disabled autoSize={{ minRows: 3 }} />
            </Form.Item>
            <Form.Item label="Nhận xét của giáo viên" name="teacherComment">
              <Input.TextArea value={teacherComment} onChange={(e) => setTeacherComment(e.target.value)} autoSize={{ minRows: 3 }} />
            </Form.Item>
            <Form.Item label="Điểm giáo viên cho" name="teacherScore">
              <Input value={teacherScore} onChange={(e) => setTeacherScore(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ResultExam;
