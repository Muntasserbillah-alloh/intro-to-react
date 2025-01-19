import { ArrowLeftOutlined, FacebookFilled, HeartOutlined, InstagramOutlined, PinterestFilled, TwitterOutlined, } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Rate, Row, Space, Typography } from "antd";
import ColorSelector from "./color-picker";
import CustomCounter from "../../../shared/custom-counter/custom-counter.ui";
import { Link } from "react-router-dom";
import ROUTES from '../../../routes/routes'

const {Title, Text, Paragraph} = Typography;

function ProductDetails() {
    return(
        <Row gutter={[0,40]} style={{height:"100%"}}>
            <Col span={24}>
                <Row gutter={[0,24]}>
                    <Col>
                        <Button 
                        type="link" icon={<ArrowLeftOutlined style={{fontSize: "2rem", color:"#000"}}/>}
                        />
                    </Col>
                    <Col span={24}>
                        <Breadcrumb
                            items={[
                            {
                                title: 'Chair',
                            },
                            {
                                title: 'Meryl Lounge Chair',
                            },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <Title level={1} style={{marginTop: 0}}>Meryl Lounge Chair</Title>
                    </Col>
                    <Col span={24} style={{marginBottom: "2rem"}}>
                        <Row justify={"space-between"}>
                            <Col>
                                <Text strong>
                                    $149.99
                                </Text>
                            </Col>
                            <Col>
                                <Space>
                                    <Rate disabled allowHalf value={4.5}/>
                                    <Text>
                                        4.6 / 5.0 <Text type="secondary">(556)</Text>
                                    </Text>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{marginBottom: "1rem"}} >
                        <Paragraph style={{textAlign: "justify", fontWeight:300}}>
                            The gently curved lines accentuated by sewn details are king to your body and pleasant to look at. Also, there&apos;s a tilt and height-adjusted mechanism that&apos;s built to outlast years of ups and downs.
                        </Paragraph>
                    </Col>
                    <Col span={24} style={{marginBottom: "2rem"}}>
                        <ColorSelector/>
                    </Col>
                    <Col span={24}>
                        <Row gutter={32} align={"middle"} style={{marginBottom: "2rem"}}>
                            <Col span={8}><CustomCounter value={1}/></Col>
                            <Col span={8}>
                                <Link to={ROUTES.CART}>
                                <Button size="large" type="primary" block>Add to Cart</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{fontWeight:300}}>
                        <Space>
                            <Text>
                                Free 3-5 day shipping 
                            </Text>
                            <Text strong>.</Text>
                            <Text>
                                Total-free Assembly 
                            </Text>
                            <Text strong>.</Text>
                            <Text>
                                330-day trial
                            </Text>
                        </Space>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row  style={{height: "100%"}} align={"middle"}>
                    <Col span={24}>
                        <Row justify={"space-between"} align={"middle"}>
                            <Col>
                                <Button style={{padding:0}} type="link" icon={<HeartOutlined/>}>Add to Wishlist</Button>
                            </Col>
                            <Col>
                                <Space size={4}>
                                    <Button type="link" icon={<FacebookFilled style={{borderRadius:"50%"}}/>}/>
                                    <Button type="link" icon={<TwitterOutlined style={{borderRadius:"50%"}}/>}/>
                                    <Button type="link" icon={<PinterestFilled style={{borderRadius:"50%"}}/>}/>
                                    <Button type="link" icon={<InstagramOutlined style={{borderRadius:"50%"}}/>}/>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default ProductDetails;