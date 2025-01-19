import { Col, Row,  } from "antd";
import ProductDetails from "./partial/product-details";

function ProductUi (){
    return(
        <Row 
        justify={"center"} align={"top"} 
        gutter={[0,16]} style={{height:"100%"}}
        >
            <Col 
            span={22} 
            style={{paddingTop: "3rem", paddingBottom: "2rem", height:"100%"}}
            >
                <Row style={{height:"100%"}}>
                    <Col span={8} style={{height:"100%"}}>
                        <ProductDetails/>
                    </Col>
                    <Col span={4}/>
                    <Col span={12}>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default ProductUi;