import { Col, Row,  } from "antd";
import ProductDetails from "./partial/product-details";
import ProductGallery from "./partial/product-gallery";
import "./product.style.scss";

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
                    <Col md={12} sm={24} xs={24}>
                        <ProductGallery/>
                    </Col>
                </Row>
            </Col>
            <div className="green-rectangular"/>
        </Row>
    );
}
export default ProductUi;