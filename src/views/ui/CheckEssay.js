import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import axios from "axios";

function CheckEssay() {
  const [imageFileName, setImageFileName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  const [form] = Form.useForm();

  const handleFileChange = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setImageFile(file);
    try {
      const author = "Bearer " + localStorage.getItem("Token");
      const res = await axios.post(
        "http://be.chamdiemthi.phunguyen.store/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: author,
          },
        }
      );
      try {
        const res = await axios.post(
          "http://ai.chamdiemthi.phunguyen.store/image-to-text",
          formData
        );

        console.log("Conversion response:", res.data);

        const convertedText = res.data.text;
        setText(convertedText);
      } catch (error) {
        console.error("Conversion error:", error);
        message.error("Failed to convert image to text.");
      }

      console.log("Upload response:", res.data);

      const imageUrl = res.data.image_url;

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFile(e.target.result);
        setImageFileName(file.name);
      };
      reader.readAsDataURL(file);

      form.setFieldsValue({
        image: imageUrl,
      });
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCheck = async () => {
    try {
      const data = {
        text: text,
      };

      const response = await axios.post(
        "http://ai.chamdiemthi.phunguyen.store/search",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API response:", response.data.percentPlagiarism);

      setResult(response.data);
      let kq = "Tỉ lệ đạo văn là: " + response.data.percentPlagiarism + "%" + "\n" + "Một số url được phát hiện:" + "\n";
      response.data.sources.forEach((source) => {
        kq =kq + source.url + "\n";
      });
      console.log(kq)
      alert(kq);
      
    } catch (error) {
      console.error("API error:", error);
      message.error("Failed to check the essay.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: 1,
          marginRight: "16px",
          background: "#f0f0f0",
          padding: "16px",
        }}
      >
        <Form form={form}>
          <Form.Item name="image" label="Hình ảnh bài làm">
            <Upload
              beforeUpload={handleFileChange}
              showUploadList={false}
              accept="image/*"
            >
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
        </Form>
      </div>
      <div
        style={{
          flex: 1,
          background: "#f0f0f0",
          padding: "16px",
        }}
      >
        <Input.TextArea
          rows={6}
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text here"
        />
        <Button
          type="primary"
          onClick={handleCheck}
          style={{ marginTop: "8px" }}
        >
          Kiểm tra
        </Button>
      </div>
    </div>
  );
}

export default CheckEssay;
