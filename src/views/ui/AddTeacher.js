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
  
  const AddTeacher = () => {
    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Add new teacher
            </CardTitle>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="first_name">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="ex: Nguyễn"
                    type="firstName"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="last_name">Last name</Label>
                  <Input
                    id="lastname"
                    name="lastName"
                    placeholder="ex: Văn A"
                    type="lastName"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="birthdate">Birthday</Label>
                  <Input
                    id="birthday"
                    name="birthday"
                    placeholder="yyyy/mm/dd"
                    type="birthday"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="101 Nguyen Huu Tho, Hai Chau, Da Nang"
                    type="address"
                  />
                </FormGroup>
                <FormGroup tag="fieldset">
                <Label for="gender">Gender</Label>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                     Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                        Female
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddTeacher;
  