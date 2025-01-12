import { Col, Row } from "antd";
import SummaryCard from "./partial/summary-card";
import CartItems from "./partial/cart-items";
import "./cart.style.scss";

function CartUi() {
    return(
        <Row 
            justify={"center"} align={"middle"}
            className="cart"
        >
            <Col span={22}>
                <Row gutter={100}>
                    <Col flex={"1"}>
                        <CartItems/>
                    </Col>
                    <Col span={8}>
                        <SummaryCard/> 
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default CartUi;