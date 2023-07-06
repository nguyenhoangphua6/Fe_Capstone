import { Typography, Card, Image,InputNumber, Button } from "antd";

const { Meta } = Card;
const {Text} = Typography
function Mark(){

    const onChange = (value) => {
      console.log("changed", value);
    };


    return (
      <>
        <div style={{ display: "flex", height: "100%" }}>
          <Card style={{ width: "40%" }}>
            <Typography.Title level={3}>Nguyen Hoang Phu</Typography.Title>
            <Typography> Class: K19TCLC_Nhat2</Typography>
            <Image
              width={500}
              src="https://s120-ava-talk.zadn.vn/5/0/2/9/1/120/ebb0928f6a38d4bddcaa2ab254b06412.jpg"
              alt="Bai lam"
            />
          </Card>

          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Card style={{ width: "100%", height: "100%" }}>
              <div>
                <Typography.Title level={3}>Điểm: 10000</Typography.Title>
                <Text italic underline>
                  Nhận xét của ChatGPT:
                </Text>{" "}
                <Text>Phu 10/10000d</Text>
                <Typography.Title
                  style={{ justifyContent: "center" }}
                  level={3}
                >
                  <Text strong style={{ marginTop: "5px" }}>
                    Điểm GV:
                  </Text>{" "}
                  <InputNumber
                    min={0}
                    max={10}
                    defaultValue={9}
                    onChange={onChange}
                    style={{ marginBottom: "5px" }}
                  />
                </Typography.Title>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  padding: "16px",
                }}
              >
                <Button type="primary">Submit</Button>
              </div>
            </Card>
          </div>
        </div>
      </>
    );


}

export default Mark;