import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import axios from "axios";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const author = "Bearer " + localStorage.getItem("Token");
      const response = await axios.post(
        "http://be.chamdiemthi.phunguyen.store/api/change-password",
        JSON.stringify(values), // Gửi dữ liệu dưới dạng JSON
        {
          headers: {
            "Content-Type": "application/json", // Xác định loại dữ liệu là JSON
            Authorization: author, // Thêm Authorization header với giá trị token
          },
        }
      );

      console.log(response.data); // Xử lý dữ liệu từ phản hồi theo yêu cầu

      message.success("Password changed successfully");
      setLoading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      message.error("Failed to change password");
      setLoading(false);
    }
  };

  return (
    <div>
      {showAlert && (
        <Alert
          message="Password changed successfully"
          type="success"
          showIcon
        />
      )}
      <Form
        name="change-password-form"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          current_password: "",
          new_password: "",
          confirmPassword: "",
        }}
      >
        <Form.Item
          name="current_password"
          label="Mật khẩu hiện tại"
          rules={[
            {
              required: true,
              message: "Hãy điền mật khẩu hiện tại",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="new_password"
          label="Mật khẩu mới"
          rules={[
            {
              required: true,
              message: "Hãy điền mật khẩu mới",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Nhập lại mật khẩu mới"
          dependencies={["new_password"]}
          rules={[
            {
              required: true,
              message: "Hãy nhập lại mật khẩu mới",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new_password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu xác nhận không đúng. Hãy nhập lại");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
