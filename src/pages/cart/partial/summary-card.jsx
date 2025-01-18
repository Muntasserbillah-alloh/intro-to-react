import { Button, Card, Col, Divider, Input, Row, Typography } from "antd";
import { dummySummaryCardData } from "../cart.utils";
import { GlobalOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux-hooks";
import cartSliceAction from "../cart.slice";
import "../cart.style.scss";

function SummaryCard() {
    const {step} = useAppSelector(({Cart})=>Cart);
    const dispatch = useAppDispatch();
    function handelToNextStepClick() {
        let nextStep = "itemsList";
        switch (step) {
            case "itemsList":
                nextStep ="selectAddress"
                break;
            case "selectAddress":
                nextStep ="selectShipment"
                break;
            case "selectShipment":
                nextStep ="selectPayment"
                break;
        }
        dispatch(cartSliceAction.setStep(nextStep));
    }
    
    function getSummaryItems({label, value, color ="#000"}) {
        return(
            <Row 
            justify={"space-between"} align={"middle"}
            >
                <Col>
                    <Typography.Text strong  >
                        {label}
                    </Typography.Text>
                </Col>
                <Col>
                    <Typography.Text strong
                        style={{color}}
                    >
                        {value}
                    </Typography.Text>
                </Col>
            </Row>
        );
    }
    return(
        <Card
            className="summary-card"
        >
            <Row gutter={[0,16]}>
                <Col span={24}>
                    <Typography.Title  
                    level={4} className="title"
                    >
                        Order Summary
                    </Typography.Title>
                </Col>
                {
                    dummySummaryCardData.items.map(({value, label, color})=>(
                        <Col span={24}
                        key={label+value}
                        >
                            {getSummaryItems({label, value, color})}
                        </Col>
                    ))
                }
                <Col span={24}>
                    <Divider style={{margin: 0, height:1, background: "var(--border-color)"}} />
                </Col>
                {
                    dummySummaryCardData.total.map(({value, label})=>(
                        <Col span={24}
                        key={label+value}
                        >
                            {getSummaryItems({label, value})}
                        </Col>
                    ))
                }
                <Col span={24}>
                    <Row align={"middle"} gutter={[0,12]}>
                        <Col span={24}>
                           <Input 
                           size="large" suffix={<GlobalOutlined />}
                           className="coupon-input"
                           />
                        </Col>
                        <Col span={24}>
                            <Button 
                                block size="large"
                                type={"primary"}
                                className="main-btn"
                                onClick={handelToNextStepClick}
                            >
                                Proceed to Checkout
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card> 
    );
}
export default SummaryCard;