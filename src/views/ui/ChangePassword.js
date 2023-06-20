import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://ai.chamdiemthi.phunguyen.store/api/change-password",
        values
      );
      console.log(response.data); // Handle the response data as needed
      message.success("Password changed successfully");
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Failed to change password");
      setLoading(false);
    }
  };

  return (
    <Form
      name="change-password-form"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        current_password: "",
        new_assword: "",
        confirmPassword: "",
      }}
    >
      <Form.Item
        name="current_password"
        label="Current Password"
        rules={[
          {
            required: true,
            message: "Please enter your current password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="new_assword"
        label="New Password"
        rules={[
          {
            required: true,
            message: "Please enter your new password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["new_assword"]}
        rules={[
          {
            required: true,
            message: "Please confirm your new password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("new_assword") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords do not match");
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
  );
};

export default ChangePassword;