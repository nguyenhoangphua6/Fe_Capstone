import { Form, Input, Button, Select, DatePicker } from 'antd';
import axios from 'axios';

const { Option } = Select;

const handleSubmit = async (values) => {
  try {
    const response = await axios.post('http://ai.chamdiemthi.phunguyen.store/api/add_student', values);
    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    console.error(error);
  }
};

const AddStudent = () => {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please enter your full name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender' }]}
      >
        <Select placeholder="Select gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Birthdate"
        name="birthdate"
        rules={[{ required: true, message: 'Please select your birthdate' }]}
      >
        {/* <DatePicker format="YYYY-MM-DD"/> */}
        <Input/>
      </Form.Item>
      

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please enter your address' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;
