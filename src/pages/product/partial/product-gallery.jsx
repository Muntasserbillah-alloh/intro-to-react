
import { Card, Col, Image, Row, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux-hooks";
import productActions from "../product.slice";
import { productImages } from "../product.utils";

const {Title, Text}= Typography;


function ProductGallery() {
    const {mainImage} = useAppSelector(({Product})=>Product);
    const dispatch = useAppDispatch();
    function handelProductImgClick(image) {
        dispatch(productActions.setMainImage(image));
    }

    return (
        <Row justify={"center"}  >
            <Col>
                <Row
                    gutter={[0, 32]}
                >
                    <Col span={24}>
                        <Row justify={"end"}>
                            <Col>
                                <Title style={{ margin: 0 }}>01 / <Text style={{ fontSize: "1.9rem" }} type="secondary">05</Text></Title>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        className="product-carousel-main-itm"
                        span={24}
                    >
                        <Image
                            src={mainImage} alt="main-product" preview={false}
                            className="product-carousel-main-itm-img"
                        />
                    </Col>
                    <Col span={24}>
                        <Row gutter={16} justify={"space-between"}>
                            {
                                productImages.map((image)=>(
                                    <Col 
                                    key={image.key}
                                    className="product-carousel-itm"
                                    >
                                    <Card 
                                    className={`product-carousel-card ${mainImage === image.image? "active": ""}`}
                                    onClick={()=>handelProductImgClick(image.image)}
                                    >
                                        <Image 
                                        className="product-carousel-img" 
                                        src={image.image} alt="product-preview" 
                                        preview={false} 
                                        />
                                    </Card>
                                </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default ProductGallery;
/*
  <Col className="product-carousel-itm">
                                <Card 
                                className="product-carousel-card active"
                                onClick={()=>handelProductImgClick(FirstImage)}
                                >
                                    <Image 
                                    className="product-carousel-img" 
                                    src={FirstImage} alt="product-preview" 
                                    preview={false} 
                                    />
                                </Card>
                            </Col>
                            <Col className="product-carousel-itm">
                                <Card 
                                className="product-carousel-card"
                                onClick={()=>handelProductImgClick(SecondImage)}
                                >
                                    <Image className="product-carousel-img" src={SecondImage} alt="product-preview" preview={false} />
                                </Card>
                            </Col>
                            <Col className="product-carousel-itm hide-sm">
                                <Card 
                                className="product-carousel-card"
                                onClick={()=>handelProductImgClick(ThirdImage)}
                                >
                                    <Image className="product-carousel-img" src={ThirdImage} alt="product-preview" preview={false} />
                                </Card>
                            </Col>
                            <Col className="product-carousel-itm hide-sm">
                                <Card className="product-carousel-card"
                                    onClick={()=>handelProductImgClick(FourthImage)}
                                >
                                    <Image className="product-carousel-img" src={FourthImage} alt="product-preview" preview={false} />
                                </Card>
                            </Col>
                            <Col className="product-carousel-itm">
                                <Card 
                                className="product-carousel-card"
                                onClick={()=>handelProductImgClick(FifthImage)}
                                >
                                    <Image className="product-carousel-img" src={FifthImage} alt="product-preview" preview={false} />
                                </Card>
                            </Col>
*/