import { Col, Row } from "antd";
import PropTypes from 'prop-types';
import "../cart.style.scss";

function TabledList({ items }) {    
    return (
        <table className="tabledList">
            <tbody>
                {
                    items?.map((item) =>( 
                        <tr key={item.key}>
                            <td colSpan={"1"}>
                                <Row justify={"space-between"}>
                                    <Col>
                                        {item?.left}
                                    </Col>
                                    <Col>
                                        {item?.right}
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
export default TabledList;

TabledList.propTypes={
    items: PropTypes.array.isRequired
}