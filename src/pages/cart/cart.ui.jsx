import { Col, Row } from "antd";
import SummaryCard from "./partial/summary-card";
import CartItems from "./partial/cart-items";
import { useAppSelector } from "../../shared/hooks/redux-hooks";
import SelectAddress from "./partial/select-address";
import "./cart.style.scss";
import SelectShipment from "./partial/select-shipment";
import SelectPayment from "./partial/select-payment";

function CartUi() {
    const {step} = useAppSelector(({Cart})=>Cart);
    return(
        <Row 
            justify={"center"} align={"middle"}
            className="cart"
        >
            <Col span={22}>
                <Row gutter={100}>
                    <Col flex={"1"}>
                    {
                        step === "itemsList"
                            ?
                        <CartItems/>
                        :step === "selectAddress"?
                        <SelectAddress/>
                        :step === "selectShipment"?
                        <SelectShipment/>
                        :<SelectPayment/>
                    }
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