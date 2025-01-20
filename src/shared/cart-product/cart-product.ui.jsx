import { Button, Col, Image, Row, Space, Typography } from "antd";
import CustomCounter from "../custom-counter/custom-counter.ui";
import PropTypes from 'prop-types';
import "./cart-product.style.scss";

function CartProductUi({ name, image, price, color, onQuantityChange, quantity, onRemove }) {
    function handleMinusClick() {
        if(typeof onQuantityChange === "function"){
            onQuantityChange(quantity - 1);
        }
    }
    function handlePlusClick() {
        if(typeof onQuantityChange === "function"){
            onQuantityChange(quantity + 1);
        }
    }
    return (
        <Row align={'start'} gutter={32} className="cart-product">
            <Col>
                <Image
                    src={image} className="main-image"
                    alt={`${name} image`} preview={false}
                />
            </Col>
            <Col flex={"1"}>
                <Row align={"top"} gutter={[0, 16]}>
                    <Col span={24}>
                        <Row align={"middle"} justify={"space-between"}>
                            <Col>
                                <Typography.Text>{name}</Typography.Text>
                            </Col>
                            <Col>
                                <Typography.Text strong>{price}</Typography.Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Space direction="horizontal" align="middle">
                            <Typography.Text type={"secondary"}>Color</Typography.Text>
                            <Typography.Text>{color}</Typography.Text>
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Row align={"middle"} justify={"start"} gutter={16}>
                            <Col>
                                <CustomCounter 
                                onMinusClick={handleMinusClick} 
                                onPluseClick={handlePlusClick} 
                                value={quantity}
                                />
                            </Col>
                            <Col>
                                <Button
                                    type="text"
                                    style={{ background: "transparent", color: "red" }}
                                    onClick={onRemove}
                                >
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default CartProductUi;

CartProductUi.propTypes={
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    color: PropTypes.string.isRequired,
    onQuantityChange: PropTypes.func,
    quantity: PropTypes.number,
    onRemove: PropTypes.func.isRequired, 
}
CartProductUi.defaultProps = {
    quantity: 1,
    onQuantityChange: null,
};
  