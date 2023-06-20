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
const ListSutdentDoExam = () => {
    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Tên lớp",
          dataIndex: "class",
          key: "class",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Tình trạng",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "Điểm số",
          dataIndex: "mark",
          key: "mark",
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
            List Sutdent Do Exam
          </CardTitle>
          <CardBody className="">
          <Table columns={columns} dataSource={hs}></Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListSutdentDoExam;
