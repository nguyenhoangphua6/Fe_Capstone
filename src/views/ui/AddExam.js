import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
  
  const AddExam = () => {
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Form Example
            </CardTitle>
            <CardBody>
              <Form>
                <Label for="exam_name">Exam name</Label>
                  <Input
                    id="exam_name"
                    name="exam_name"
                    placeholder="ex: Bài kiểm tra cuối kì môn toán 7"
                    type="exam_name"
                  />
                <FormGroup>
                  <Label for="exampleSelect">Courses</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Toán 7a1</option>
                    <option>Toán 7a2</option>
                    <option>Toán 8a1</option>
                    <option>Toán 9a1</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="examfile">File</Label>
                  <Input id="examfile" name="file" type="file" />
                  <FormText>
                    Please add the exam here.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="baremfile">File</Label>
                  <Input id="baremfile" name="file" type="file" />
                  <FormText>
                    Please add the grading scale here.
                  </FormText>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddExam;
  