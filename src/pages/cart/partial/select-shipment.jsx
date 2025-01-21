import { Col, DatePicker, Radio, Row, Space, Typography } from "antd";
import moment from "moment";
import TabledList from "./tabled-list";
import "../cart.style.scss";
import { DownOutlined } from "@ant-design/icons";

function SelectShipment() {
    const shipmentOptions = [
        {
            key: "shipment1",
            left:<Radio value={"shipment1"}>
                    <Space>
                        <Typography.Text strong>
                            Free
                        </Typography.Text>
                        <Typography.Text>
                            Regular Shipment
                        </Typography.Text>
                    </Space>
                </Radio>
            ,
        right: <Typography.Text strong>
                {moment().add(1, "month").format("DD MMM, YYYY")}
            </Typography.Text>
        },
        {
            key: "shipment2",
            left:<Radio value={"shipment2"}>
                    <Space>
                        <Typography.Text strong>
                            $8,50
                        </Typography.Text>
                        <Typography.Text>
                            Priority Shipping
                        </Typography.Text>
                    </Space>
                </Radio>
            ,
        right: <Typography.Text strong>
                {moment().add(10, "days").format("DD MMM, YYYY")}
            </Typography.Text>
        },
        {
            key: "shipment3",
            left:<Radio value={"shipment3"}>
                    <Space>
                        <Typography.Text strong>
                            Schedule
                        </Typography.Text>
                        <Typography.Text>
                            Choose a date that works for you
                        </Typography.Text>
                    </Space>
                </Radio>
            ,
        right: <DatePicker
            suffixIcon={<DownOutlined/>}
            variant="borderless"
            style={{padding: 0}}
            className="hide-sm"
        />
        }
    ]
    return (
        <Row gutter={[0,16]}>
            <Col span={24}>
                <Typography.Title level={5} style={{margin:0}}
                >
                    Shipment Method
                </Typography.Title>
            </Col>
            <Col span={24}>
            <Radio.Group style={{width: "100%"}}>
                <TabledList items={shipmentOptions}/>
            </Radio.Group>
            </Col>
        </Row>
    );
}
export default SelectShipment;