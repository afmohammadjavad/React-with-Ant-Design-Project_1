import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./Layout.css";
import { useContext, useState } from "react";
import { userContext } from "../contexts/userContext";

const { Header, Sider, Content } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { users } = useContext(userContext);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {users.map((user) => (
            <Menu.Item key={user.id} icon={<UserOutlined />}>
              {user.name}
            </Menu.Item>
          ))}
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            nav 5
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "1.5rem" }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
