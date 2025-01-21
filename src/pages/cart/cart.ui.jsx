import { Breadcrumb, Col, Row } from "antd";
import SummaryCard from "./partial/summary-card";
import CartItems from "./partial/cart-items";
import { useAppSelector } from "../../shared/hooks/redux-hooks";
import SelectAddress from "./partial/select-address";
import SelectShipment from "./partial/select-shipment";
import SelectPayment from "./partial/select-payment";
import { RightOutlined } from "@ant-design/icons";
import "./cart.style.scss";

function CartUi() {
    const {step} = useAppSelector(({Cart})=>Cart);
    return(
        <Row 
            justify={"center"} align={"middle"}
            className="cart"
        >
            <Col span={22}>
                <Row gutter={[{md:100, sm:0,xs:0}, {md:0, sm:80, xs:80}]}>
                    <Col md={16} sm={24} xs={24}>
                    {
                        step === "itemsList"
                            ?
                        <CartItems/>
                        :<Row>
                            <Col span={24}>
                            <Breadcrumb 
                            separator={<RightOutlined color="#A2A3B1" />}
                            className="step-navigator"
                            >
                                <Breadcrumb.Item>
                                    <span 
                                    style={
                                        step === "selectAddress"
                                        ?{ fontWeight: "bold", color: "#000" }
                                        :{ color: "#bbb" }
                                        }
                                    >Address</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <span 
                                     style={
                                        step === "selectShipment"
                                        ?{ fontWeight: "bold", color: "#000" }
                                        :{ color: "#bbb" }
                                        }
                                    >Shipping</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <span
                                     style={
                                        step === "selectPayment"
                                        ?{ fontWeight: "bold", color: "#000" }
                                        :{ color: "#bbb" }
                                        }
                                    >Payment</span>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            </Col>
                            <Col span={24}>
                                {
                                    step === "selectAddress"?
                                    <SelectAddress/>
                                    :step === "selectShipment"?
                                    <SelectShipment/>
                                    :<SelectPayment/>
                                }
                            </Col>
                        </Row>
                    }
                    </Col>
                    <Col md={8} sm={24} xs={24}>
                        <SummaryCard/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default CartUi;