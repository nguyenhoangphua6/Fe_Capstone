import { Form, Input, Button, Select, DatePicker } from 'antd';
import axios from 'axios';

const { Option } = Select;

const handleSubmit = async (values) => {
  try {
    const response = await axios.post('http://be.chamdiemthi.phunguyen.store/api/add_teacher', values);
    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    console.error(error);
  }
};

const AddTeacher = () => {
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
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: 'Hãy điền mật khẩu' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Họ và tên"
        name="fullname"
        rules={[{ required: true, message: 'Hãy điền họ và tên' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giới tính"
        name="gender"
        rules={[{ required: true, message: 'Hãy chọn giới tính' }]}
      >
        <Select placeholder="Select gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Ngày sinh"
        name="birthdate"
        rules={[{ required: true, message: 'Hãy điền ngày sinh' }]}
      >
        {/* <DatePicker format="YYYY-MM-DD"/> */}
        <Input/>
      </Form.Item>
      

      <Form.Item
        label="Địa chỉ"
        name="address"
        rules={[{ required: true, message: 'Hãy nhập địa chỉ' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm giáo viên
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTeacher;
