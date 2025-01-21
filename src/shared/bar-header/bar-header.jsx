import { useState } from "react";
import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import ROUTES from "../../routes/routes"
import Cozy from "../../assets/images/cozy.svg";
import { Link } from "react-router-dom";
import "./bar-header.style.scss";
import NavDrawer from "./partials/nav-drawer";

function BarHeader() {
    const [isNavDrawerOpen,setIsNavDrawerOpen] = useState(false);
    function handleCloseNavDrawer() {
        setIsNavDrawerOpen(false);
    }
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
            <Col className="hide-sm">
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
            <Col className="hide-sm">
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
            <Col
            className="show-sm-menu"
            >
                <Button 
                type={"link"} icon={<MenuOutlined/>}
                onClick={()=>setIsNavDrawerOpen(true)}
                />
            </Col>
            <NavDrawer isOpen={isNavDrawerOpen} onClose={handleCloseNavDrawer}/>
        </Row>
    );
}

export default BarHeader;