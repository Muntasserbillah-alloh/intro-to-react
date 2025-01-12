import { Col, Divider, Row, Space, Typography } from "antd";
import CartProductUi from "../../../shared/cart-product/cart-product.ui";
import DummyImage from "../../../assets/images/Vehicle-Hyudai-Elantra.png";

function CartItems() {
    return(
        <Row 
        align={"top"} className="cart-items"
        gutter={[0, 56]}
        >
            <Col span={24}>
                <Space direction="horizontal" align={"end"} size={16}>
                    <Typography.Title level={3} className="title">Cart</Typography.Title>
                    <Typography.Text className="subtitle"> 2 ITEMS</Typography.Text>
                </Space>
            </Col>
            <Col span={24}>
                <Row gutter={[0,32]}>
                    <Col span={24}> 
                        <CartProductUi 
                        name={"Osmand Armchair"} price={"$149.99"} 
                        color={"Gunnared biege"} image={DummyImage}
                        quantity={1}
                        />
                    </Col>
                    <Divider style={{margin: 0}}/>
                    <Col span={24}> 
                        <CartProductUi
                         name={"Osmand Armchair"} price={"$149.99"} 
                         color={"Gunnared biege"} image={DummyImage}
                         quantity={1}
                         />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default CartItems;