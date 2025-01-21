import { Button, Col, Divider, Radio, Row, Space, Typography } from "antd";
import TabledList from "./tabled-list";
import { CreditCardOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

function SelectPayment(){
    const shipmentOptions = [
        {
            key: "payment1",
            left:<Radio value={"payment1"}>
                    <Space size={16}>
                        <Typography.Text
                        style={{color: "var(--primary-color)"}}
                        >
                           <CreditCardOutlined style={{margin:"0 8px"}}/> ...6754
                        </Typography.Text>
                        <Typography.Text type={"secondary"}>
                            Expires {moment().add(1, "year").format("DD MMM, YYYY")}
                        </Typography.Text>
                    </Space>
                </Radio>
            ,
            right: <Button type="text" danger className="hide-sm">Remove</Button>
        },{
            key: "payment2",
            left:<Radio value={"payment2"}>
                    <Space size={16}>
                        <Typography.Text
                        style={{color: "var(--primary-color)"}}
                        >
                           <CreditCardOutlined style={{margin:"0 8px"}}/> ...5643
                        </Typography.Text>
                        <Typography.Text type={"secondary"}>
                            Expires {moment().add(8, "months").format("DD MMM, YYYY")}
                        </Typography.Text>
                    </Space>
                </Radio>
            ,
            right: <Button type="text" danger className="hide-sm">Remove</Button>
        },
    ]
    return(
        <Row gutter={[0,16]}>
            <Col span={24}>
                <Typography.Title level={5} style={{margin:0}}
                >
                    Payment Method
                </Typography.Title>
            </Col>
            <Col span={24}>
            <Radio.Group style={{width: "100%"}}>
                <TabledList items={shipmentOptions}/>
            </Radio.Group>
            </Col>
            <Col span={24}>
                <Divider style={{margin:0}}/>
            </Col>
            <Col span={24}>
                <Button type="link" icon={<PlusOutlined/>} style={{padding:0}}>
                    Add Payment method
                </Button>
            </Col>
        </Row>
    );
}
export default SelectPayment;