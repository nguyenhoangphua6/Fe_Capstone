import { Row, Col,  Card, CardTitle, CardBody } from "reactstrap";
import {Space, Table } from "antd";
import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
const StudentList = () => {
    const columns = [
        {
          title: "Image",
          dataIndex: "image",
          key: "image",
          size: "small",
          render: (image) => (
            <Link to={`/profile/${image}`}>
              <img
                alt={image}
                src={image}
                style={{
                  width: 50,
                  height: 50,
                  border: "1px solid #d9d9d9",
                  borderRadius: "10%",
                }}
              />
            </Link>
          ),
        },
        {
          title: "first name",
          dataIndex: "first_name",
          key: "first_name",
          render: (text, record) => (
            <Link to={`/profile/${record.id}`}>
              <a>{text}</a>
            </Link>
          ),
        },
        {
          title: "Last name",
          dataIndex: "last_name",
          key: "last_name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Ngày sinh",
          dataIndex: "birthday",
          key: "birthday",
        },
        {
          title: "Tên lớp",
          dataIndex: "class",
          key: "class",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Giới tính",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Số điện thoại liên hệ",
          dataIndex: "phoneNumber",
          key: "phoneNumber",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <EditOutlined type="link" 
              // onClick={() => showEdit(record)} 
              />
              <DeleteOutlined style={{ color: "red" }} />
            </Space>
          ),
        },
      ];
  
      const [DataEdit, setDataEdit] = useState();
      const [hs, setHs] = useState([]);
  
  
      async function getAllEm() {
        const result = await axios({
          method: "get",
          url: "http://localhost:8080/api/auth/getall",
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        });
        if (result.data != null && result.data.status === "Fail") {
          console.log(result.data.message);
        }
        if (result.data != null && result.data.status === "Success") {
          setHs(result.data.payload);
        }
      }
  
      useEffect(() => {
        getAllEm();
      }, []);
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Table with Hover
          </CardTitle>
          <CardBody className="">
          <Table columns={columns} dataSource={hs}></Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default StudentList;
