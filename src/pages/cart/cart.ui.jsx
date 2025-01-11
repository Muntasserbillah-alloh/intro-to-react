import { Col, Row } from "antd";
import SummaryCard from "./partial/summary-card";
import "./cart.style.scss";

function CartUi() {
    return(
        <Row 
            justify={"center"} align={"middle"}
            className="cart"
        >
            <Col span={22}>
                <Row gutter={32}>
                    <Col flex={"1"}></Col>
                    <Col span={8}>
                        <SummaryCard/> 
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default CartUi;