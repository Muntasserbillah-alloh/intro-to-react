import { Card, Col, Image, Row, Typography,  } from "antd";
import ProductDetails from "./partial/product-details";
import FirstImage from "../../assets/images/1.png";
import SecondImage from "../../assets/images/3.jpg";
import ThirdImage from "../../assets/images/4.jpg";
import FourthImage from "../../assets/images/5.jpg";
import FifthImage from "../../assets/images/6.png";
import MainImage from "../../assets/images/main-product-image.svg";
import "./product.style.scss";

const {Title, Text}= Typography;

function ProductUi (){
    return(
        <Row 
        justify={"center"} align={"top"} 
        style={{minHeight:"100%"}}
        className="product"
        >
            <Col 
            span={22} 
            style={{paddingTop: "2rem", paddingBottom: "2rem",}}
            >
                <Row gutter={[0,{md:0, sm:80, xs:80}]}>
                    <Col md={8} sm={24} xs={24}>
                        <ProductDetails/>
                    </Col>
                    <Col md={4} sm={0} xs={0}/>
                    <Col md={8} sm={24} xs={24}>
                        <Row justify={"center"}  >
                            <Col>
                                <Row
                                gutter={[0,32]}  
                                >
                                    <Col span={24}>
                                        <Row justify={"end"}>
                                            <Col>
                                                <Title style={{margin:0}}>01 / <Text style={{fontSize: "1.9rem"}} type="secondary">05</Text></Title>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col 
                                    className="product-carousel-main-itm"
                                    >
                                        <Image 
                                        src={MainImage} alt="main-product" preview={false}
                                        className="product-carousel-main-itm-img"
                                        />
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={16} justify={"space-between"}>
                                            <Col className="product-carousel-itm">
                                                <Card className="product-carousel-card active">
                                                    <Image className="product-carousel-img" src={FirstImage} alt="product-preview" preview={false}/>
                                                </Card>
                                            </Col>
                                            <Col className="product-carousel-itm">
                                                <Card className="product-carousel-card">
                                                    <Image className="product-carousel-img" src={SecondImage} alt="product-preview" preview={false}/>
                                                </Card>
                                            </Col>
                                            <Col className="product-carousel-itm hide-sm">
                                                <Card className="product-carousel-card">
                                                    <Image className="product-carousel-img" src={ThirdImage} alt="product-preview" preview={false}/>
                                                </Card>
                                            </Col>
                                            <Col className="product-carousel-itm hide-sm">
                                                <Card className="product-carousel-card">
                                                    <Image className="product-carousel-img" src={FourthImage} alt="product-preview" preview={false}/>
                                                </Card>
                                            </Col>
                                            <Col className="product-carousel-itm">
                                                <Card className="product-carousel-card">
                                                    <Image className="product-carousel-img" src={FifthImage} alt="product-preview" preview={false}/>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <div className="green-rectangular"/>
        </Row>
    );
}
export default ProductUi;