import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import { Button, Col, Row } from "antd";

function CustomCounter({onMinusClick, onPluseClick, value}) {
    return(
        <Row
        align={"middle"} justify={"space-between"}
        gutter={16}
        style={{
            border: "var(--primary-border)",
            padding: "0.3rem 0",
        }}
    >
        <Col>
            <Button
                type="link"
                icon={<MinusOutlined />}
                onClick={onMinusClick}
            />
        </Col>
        <Col>{value}</Col>
        <Col>
            <Button
                type={"link"}
                icon={<PlusOutlined />}
                onClick={onPluseClick}
            />
        </Col>
    </Row>
    );
}
export default CustomCounter;

CustomCounter.propTypes={
    onMinusClick: PropTypes.func.isRequired, 
    onPluseClick: PropTypes.func.isRequired, 
    value: PropTypes.number.isRequired
}
CustomCounter.defaultProps = {
    value: 1,
};