import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import { Space, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, PlusCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListSutdentDoExam = () => {
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Điểm số",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Hành động", 
      key: "action",
      render: (record) => (
        <>
          {localStorage.getItem("Role") === "3" ? (
            <Button type="primary" onClick={() => handleCheckResult(record)}>
            Xem kết quả
          </Button>
          ) : (
            <Button type="primary" onClick={() => handleCheckResult(record)}>
          Chấm bài
        </Button>
          )}
        </>
      ),
    },
  ];

  const [hs, setHs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://be.chamdiemthi.phunguyen.store/api/exam/${localStorage.getItem("examid")}`);
        const studentExams = response.data.studentExams.map((studentExam) => {
          return {
            fullname: studentExam.student.fullname,
            gender: studentExam.student.gender,
            status: studentExam.status,
            score: studentExam.score,
            id: studentExam.id,
            studentId: studentExam.student.id,
          };
        });
        setHs(studentExams);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCheckResult = (record) => {
    console.log("Clicked on Check Result for exam with id:", record.id);
    // Lưu giá trị studentExam.student.id vào localStorage
    localStorage.setItem("studentid", record.studentId);
    localStorage.setItem("resuiltid", record.id);
    // Chuyển hướng đến trang "/ResultExam/1"
    navigate(`/result/${record.id}`);
  };

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Danh sách học sinh đã làm bài kiểm tra
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
