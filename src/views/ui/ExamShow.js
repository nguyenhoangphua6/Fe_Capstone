import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from 'axios';

const ExamShow = () => {
  const [examData, setExamData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [subject, setSubject] = useState("");
  const [questionImageUrl, setQuestionImageUrl] = useState("");

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const response = await axios.get(`http://be.chamdiemthi.phunguyen.store/api/exam/${localStorage.getItem("examid")}`);
        setExamData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchExamData();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://be.chamdiemthi.phunguyen.store/api/upload",
        formData
      );
      console.log("Upload response:", res.data);

      const imageUrl = res.data.image_url;

      setQuestionImageUrl(imageUrl);
      setSelectedFile(file);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("question_image_url", examData.question_image_url);
      formData.append("subject", subject);
      formData.append("student_id", localStorage.getItem("Id"));
      formData.append("exam_id", localStorage.getItem("examid"));
      formData.append("answer_image_url", selectedFile.name);

      const jsonData = Object.fromEntries(formData);
      
      const response = await axios.post("http://be.chamdiemthi.phunguyen.store/api/submit", jsonData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      // Xử lý khi nộp bài thành công
      console.log(response.data);
    } catch (error) {
      // Xử lý khi có lỗi xảy ra
      console.error(error);
    }
  };

  return (
    <div>
      {examData && (
        <Card
          title={examData.course_id}
          cover={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="Hình ảnh bài kiểm tra"
                src={"http://be.chamdiemthi.phunguyen.store/api/image/" + examData.question_image_url}
                style={{ width: "80%" }}
              />
            </div>
          }
        >
          <p>Điểm tối đa: {examData.max_scores}</p>
          <p>Thời gian bắt đầu: {examData.start_time}</p>
          <p>Thời gian kết thúc: {examData.end_time}</p>
          <Form>
            <FormGroup>
              <Label for="subject">Tên môn học</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="ex: Môn Toán"
                value={subject}
                onChange={handleSubjectChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="baremfile">Bài làm</Label>
              <Input
                id="baremfile"
                name="file"
                type="file"
                onChange={handleFileChange}
              />
              <FormText>Please turn in assignment here.</FormText>
            </FormGroup>
            <Button type="primary" onClick={handleSubmit}>
              Nộp bài thi
            </Button>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default ExamShow;
