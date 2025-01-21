import { Drawer, Menu } from "antd";
import { InfoCircleOutlined, PaperClipOutlined, PhoneOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routes";


function NavDrawer ({isOpen, onClose}){
    const navigate = useNavigate();
    const items = [
        {
            key: 'sub1',
            label: 'SHOP',
            icon: <ShopOutlined />,
        },
        {
            key: 'sub2',
            label: 'COLLECTIVE',
            icon: <PaperClipOutlined />,
        },
        {
            key: 'sub3',
            label: 'DESIGNER',
            icon: <UserOutlined />,
        },
        {
            key: 'sub4',
            label: 'ABOUT US',
            icon: <InfoCircleOutlined />,
        },
        {
            key: 'sub5',
            label: 'CONTACT',
            icon: <PhoneOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'sub6',
            label: 'Cart',
            icon: <ShoppingCartOutlined />,
            onClick:()=> {
                onClose();
                navigate(ROUTES.BASE);
            }
        },
       
      ];
    return(
        <Drawer
        open={isOpen}
        onClose={onClose}
        title={false}
        // width={"90vw"}
        styles={{body:{padding:0}}}
        >
            <Menu
            items={items}
            mode="vertical"
            />
        </Drawer>
    );
}
export default NavDrawer;

NavDrawer.propTypes={
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func
}
NavDrawer.defaultProps={
    isOpen: false,
}