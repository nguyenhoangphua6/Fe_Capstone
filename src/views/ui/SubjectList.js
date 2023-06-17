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
const SubjectList = () => {
    const columns = [
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
      const [subject, setSubject] = useState([]);
  
  
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
          setSubject(result.data.payload);
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
          <Table columns={columns} dataSource={subject}></Table>;
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SubjectList;
