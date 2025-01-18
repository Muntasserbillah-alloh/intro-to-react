import { Button, Col, Divider, Radio, Row, Space, Typography } from "antd";
import { useAppSelector } from "../../../shared/hooks/redux-hooks";
import { PlusOutlined } from "@ant-design/icons";
import "../cart.style.scss";

function SelectAddress() {
    const { selectedAddress } = useAppSelector(({ Cart }) => Cart);
    return (
        <Radio.Group value={selectedAddress} className="cart-select-address">
            <Row gutter={[0, 32]}>
                <Col span={24}>
                    <Row align={"top"}>
                        <Col>
                            <Button type="link">
                                <Radio value={"address1"} />
                            </Button>
                        </Col>
                        <Col flex={"1"}>
                            <Row gutter={[0, 16]}>
                                <Col span={24}>
                                    <Row align={"middle"}>
                                        <Col flex={"1"}>
                                            <Row justify={"space-between"}>
                                                <Col>
                                                    <Space align="center">
                                                        <Typography.Title style={{ margin: 0 }} level={4}>
                                                            Huzefa Bagwala
                                                        </Typography.Title>
                                                        <Button>Home</Button>
                                                    </Space>
                                                </Col>
                                                <Col>
                                                    <Space size={4}>
                                                        <Button type="text">Edit</Button>
                                                        <Divider type={"vertical"} />
                                                        <Button type="text" danger>Delete</Button>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text >
                                        1131 Dusty Townline, Jacksonville, TX 40322
                                    </Typography.Text>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text >
                                        <Typography.Text strong>Contact- </Typography.Text>
                                        (936) 361-0310
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row align={"top"}>
                        <Col>
                            <Button type="link">
                                <Radio value={"address2"} />
                            </Button>
                        </Col>
                        <Col flex={"1"}>
                            <Row gutter={[0, 16]}>
                                <Col span={24}>
                                    <Row align={"middle"}>
                                        <Col flex={"1"}>
                                            <Row justify={"space-between"}>
                                                <Col>
                                                    <Space align="center">
                                                        <Typography.Title style={{ margin: 0 }} level={4}>
                                                            Huzefa Bagwala
                                                        </Typography.Title>
                                                        <Button>Home</Button>
                                                    </Space>
                                                </Col>
                                                <Col>
                                                    <Space size={4}>
                                                        <Button type="text">Edit</Button>
                                                        <Divider type={"vertical"} />
                                                        <Button type="text" danger>Delete</Button>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text >
                                        1131 Dusty Townline, Jacksonville, TX 40322
                                    </Typography.Text>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text >
                                        <Typography.Text strong>Contact- </Typography.Text>
                                        (936) 361-0310
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Divider style={{ margin: 0 }} />
                </Col>
                <Col>
                    <Button
                        type="link"
                        icon={<PlusOutlined />}
                        style={{ paddingLeft: 55 }}
                    >
                        Add New Address
                    </Button>
                </Col>
            </Row>
        </Radio.Group>
    );
}
export default SelectAddress;