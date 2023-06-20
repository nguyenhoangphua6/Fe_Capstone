import { Row, Col,  Card, CardTitle, CardBody } from "reactstrap";
import {Space, Table } from "antd";
import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import moment from "moment";
import React, { useState, useEffect } from "react";
import axios from "axios";
const TeacherList = () => {
    const columns = [
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (text, record) => (
          // <Link to={`/profile/${record.email}`}>
          //   <a>{text}</a>
          // </Link>
          <a>{text}</a>
        ),
      },
        {
          title: "Full Name",
          dataIndex: "fullname",
          key: "fullname",
          render: (text, record) => (
            // <Link to={`/profile/${record.email}`}>
            //   <a>{text}</a>
            // </Link>
            <a>{text}</a>
          ),
        },
        {
          title: "Ngày sinh",
          dataIndex: "birthday",
          key: "birthday",
          render: (endDate) => moment(endDate).format("YYYY-MM-DD"),
        },
        {
          title: "Giới tính",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Thời gian tạo",
          dataIndex: "created_at",
          key: "created_at",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <EditOutlined type="link" 
              // onClick={() => showEdit(record)} 
              />
              {/* <DeleteOutlined style={{ color: "red" }} onClick={} /> */}
            </Space>
          ),
        },
      ];
      
      // async function delete(){
      //   await axios.delete("http://dsasdasd")
      // }

      const [DataEdit, setDataEdit] = useState();
      const [hs, setHs] = useState([]);
  
  
      async function getAllEm() {
        const result = await axios({
          method: "get",
          url: "http://ai.chamdiemthi.phunguyen.store/api/get_all_teachers",
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        });
      
          setHs(result.data);
    
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

export default TeacherList;

