import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { BarHeader } from "../../../shared";
import "./main.layout.scss";

function MainLayout (){
    return(
        <Layout className="main-layout">
            <Layout.Header className="header"><BarHeader/></Layout.Header>
            <Layout.Content className="content"><Outlet/></Layout.Content>
        </Layout>
    );
}
export default MainLayout;