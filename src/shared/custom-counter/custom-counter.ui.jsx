import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";

// eslint-disable-next-line react/prop-types
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
export default CustomCounter