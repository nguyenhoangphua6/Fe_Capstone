import { Card, Typography, Button } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function ListExam() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listExam, setListExam] = useState([]);
  useEffect(() => {
    const fetchExamList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `http://be.chamdiemthi.phunguyen.store/api/list-exam-of-course/${localStorage.getItem("courseID")}`,
        });
        setListExam(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExamList();
  }, []);

  const handleExamClick = (examId) => {
    console.log("Clicked on exam with id:", examId);
    localStorage.setItem("examid", examId);
    navigate(`/examshow/${examId}`);
  };

  const handleResultClick = (examId) => {
    console.log("Clicked on result for exam with id:", examId);
    localStorage.setItem("examid", examId);
    navigate(`/listsutdentdoexam/${examId}`);
  };

  const handleAddExam = () => {
    navigate(`/addexam/${id}`);
  };

  const examname = localStorage.getItem("examname");

  return (
    <>
      <Card>
        <Typography.Title>{examname}</Typography.Title>
        {(() => {
          if (localStorage.getItem("Role") === "2") {
            return (
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
                <Button type="primary" onClick={handleAddExam}>
                  Thêm bài thi
                </Button>
              </div>
            );
          }
          return null;
        })()}
        {listExam.map((exam) => (
          <Card key={exam.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link to={`/examshow/${exam.id}`} onClick={() => handleExamClick(exam.id)}>
                {exam.start_time}
              </Link>
              <Button type="primary" style={{ backgroundColor: "#ff7f50" }} onClick={() => handleResultClick(exam.id)}>
                Kết quả kiểm tra
              </Button>
            </div>
          </Card>
        ))}
      </Card>
    </>
  );
}

export default ListExam;
