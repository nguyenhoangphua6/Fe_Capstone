import React from "react";
import { Card, Button } from "antd";
import {
    Row,
    Col,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";

const ExamShow = () => {
  const handleSubmit = () => {
    // Xử lý khi nộp bài kiểm tra
  };

  return (
    <div>
      <Card
        title="Tên bài kiểm tra"
        cover={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt="Hình ảnh bài kiểm tra"
              src="https://toanmath.com/wp-content/uploads/2019/10/de-kiem-tra-1-tiet-chuong-1-hinh-hoc-11-truong-thpt-xuan-giang-ha-noi.png"
              style={{ width: "50%" }}
            />
          </div>
        }
      >
        <Form>
                <FormGroup>
                  <Label for="baremfile">Nộp bài làm</Label>
                  <Input id="baremfile" name="file" type="file" />
                  <FormText>
                    Please turn in assignment here.
                  </FormText>
                </FormGroup>
                <Button type="primary" onClick={handleSubmit}>
          Nộp bài kiểm tra
        </Button>
              </Form>

      </Card>
    </div>
  );
};

export default ExamShow;