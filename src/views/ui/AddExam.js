import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Upload } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddExam() {
  const [form] = Form.useForm();
  const [baremCount, setBaremCount] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState("");

  const handleBaremCountChange = (value) => {
    setBaremCount(value);
    console.log(id)
  };

  const { id } = useParams();

  useEffect(() => {
    form.setFieldsValue({
      course_id: localStorage.getItem("courseID"),
    });
  }, [form, id]);




 const handleFileChange = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post(
      "http://be.chamdiemthi.phunguyen.store/api/upload",
      formData
    );
    console.log("Upload response:", res.data);

    const imageUrl = res.data.image_url;

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile(e.target.result);
      setImageFileName(file.name);
    };
    reader.readAsDataURL(file);

    form.setFieldsValue({
      question_image_url: imageUrl
    });
  } catch (error) {
    console.error("Upload error:", error);
  }
};






  const handleSubmit = async (values) => {
    let baremData = [];
    let result_data = [];

    for (let i = 1; i <= parseInt(values.barem); i++) {
      const data2 = {
        idea: values[`barem[${i - 1}].idea`],
        score: values[`barem[${i - 1}].score`],
      };
      result_data.push(data2);
    }

    const data = {
      question_image_url: imageFileName,
      max_scores: parseFloat(values.max_scores),
      start_time: values.start_time,
      end_time: values.end_time,
      course_id: values.course_id,
      barem: result_data,
    };

    try {
      console.log("Data:", data);
      const res = await axios.post(
        "http://be.chamdiemthi.phunguyen.store/api/add_exam",
        data
      );
      console.log("Response:", res.data);
      // Handle successful response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const renderBaremFields = () => {
    const fields = [];
    for (let i = 0; i < baremCount; i++) {
      fields.push(
        <Space key={i} style={{ marginBottom: 8 }}>
          <Form.Item name={`barem[${i}].idea`} label="Ý">
            <Input placeholder="Idea" />
          </Form.Item>
          <Form.Item name={`barem[${i}].score`} label="Điểm">
            <Input placeholder="Score" />
          </Form.Item>
        </Space>
      );
    }
    return fields.map((field, index) => <div key={index}>{field}</div>);
  };

  return (
    <Form
      form={form}
      initialValues={{
        course_id: id,
      }}
      onFinish={handleSubmit}
    >
        <Form.Item name="course_id" label="Mã khóa học">
          <Input placeholder="Course Id" disabled />
        </Form.Item>
      <Form.Item name="start_time" label="Thời gian bắt đầu">
        <Input placeholder="Start Time" />
      </Form.Item>
      <Form.Item name="end_time" label="Thời gian kết thúc">
        <Input placeholder="End Time" />
      </Form.Item>
      <Form.Item name="max_scores" label="Điểm tối đa">
        <Input type="number" placeholder="ex: 100" />
      </Form.Item>
      <Form.Item name="image" label="Đề thi">
        <Upload beforeUpload={handleFileChange} showUploadList={false}>
          <Button>Upload</Button>
        </Upload>
        {imageFile && (
          <img
            src={imageFile}
            alt="Preview"
            style={{ marginTop: "8px", maxWidth: "100%", height: "auto" }}
          />
        )}
      </Form.Item>
      <Form.Item name="barem" label="số ý trong barem">
        <Input type="number" placeholder="ex: 3" onChange={(e) => handleBaremCountChange(e.target.value)} />
      </Form.Item>
      {renderBaremFields()}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Tạo bài thi
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddExam;
