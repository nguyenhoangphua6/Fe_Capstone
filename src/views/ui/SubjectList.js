import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import { Space, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SubjectList = () => {
  const navigate = useNavigate();

  const handleLinkClick = (examname,courseID) => {
    localStorage.setItem("examname", examname);
    localStorage.setItem("courseID", courseID);
  };

  const columns = [
    {
      title: "Tên môn học",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link
          to={`/listexam/${record.id}`}
          onClick={() => handleLinkClick(text,record.id)}
        >
          <a>{text}</a>
        </Link>
      ),
    },
  ];

  const [DataEdit, setDataEdit] = useState();
  const [subject, setSubject] = useState([]);
  const author = "Bearer " + localStorage.getItem("Token");

  async function getAllEm() {
    console.log(author);
  
    if (localStorage.getItem("Role") === "1") {
      try {
        const result = await axios({
          method: "get",
          url: "http://be.chamdiemthi.phunguyen.store/api/get_all_courses",
          headers: {
            Authorization: author,
          },
        });
        if (result.data != null && result.data.status === "Fail") {
          console.log(result.data.message);
        }
        if (result.status === 200) {
          setSubject(result.data);
        }
      } catch (error) {
        console.error("API error:", error);
      }
    } else {
      try {
        const result = await axios({
          method: "get",
          url: "http://be.chamdiemthi.phunguyen.store/api/get_courses",
          headers: {
            Authorization: author,
          },
        });
        if (result.data != null && result.data.status === "Fail") {
          console.log(result.data.message);
        }
        if (result.status === 200) {
          setSubject(result.data);
        }
      } catch (error) {
        console.error("API error:", error);
      }
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
            Danh sách môn học hiện có của bạn
          </CardTitle>
          <CardBody className="">
            <Table columns={columns} dataSource={subject} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SubjectList;
