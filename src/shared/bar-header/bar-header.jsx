import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import ROUTES from "../../routes/routes"
import Cozy from "../../assets/images/cozy.svg";
import { Link } from "react-router-dom";
import "./bar-header.style.scss";

function BarHeader() {
    return(
        <Row 
            justify={"space-between"} align={"middle"}
            className="bar-header"
        >
            <Col className="logo-col">
                <Link to={ROUTES.BASE}>
                <Image src={Cozy} preview={false}/>
                </Link>
            </Col>
            <Col className="hide-until-sm">
                <Row 
                justify={"center"} align={"middle"}
                gutter={16} className="center-nav"
                >
                    <Col>SHOP</Col>
                    <Col>COLLECTIVE</Col>
                    <Col>DESIGNER</Col>
                    <Col>ABOUT US</Col>
                    <Col>CONTACT</Col>
                </Row>
            </Col>
            <Col className="hide-until-sm">
                <Row 
                    justify={"center"} align={"middle"}
                    gutter={32} style={{height: "100%"}}
                >
                    <Col>
                        <Row 
                        gutter={16}
                        justify={"center"} align={"middle"}
                        >
                            <Col>
                                <MenuOutlined/>
                            </Col>
                            <Col>
                                <SearchOutlined/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="last-icon-section">
                        <Row 
                        style={{height: "100%"}} align={"middle"} 
                        >
                            <Col>
                                <Link to={ROUTES.CART}>
                                    <Button 
                                        icon={<ShoppingCartOutlined className="cart-icon" />}
                                        type="link" className="cart-btn"
                                    />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default BarHeader;