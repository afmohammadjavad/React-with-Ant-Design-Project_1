import withDraggable from "../hoc/withDraggable";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ItemDND = ({ item }) => {
  return (
    <Menu.Item style={{paddingLeft: 15}} key={item.id} icon={<UserOutlined />}>
      {item.name}
    </Menu.Item>
  );
};

export default withDraggable(ItemDND);
