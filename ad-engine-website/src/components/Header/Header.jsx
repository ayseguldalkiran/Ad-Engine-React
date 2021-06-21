import React from 'react';
import './Header.css';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ backgroundColor: '#F0F2F5', padding: 0 }}>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{
            float: 'right',
            top: 10,
            right: 30,
            color: 'white',
            backgroundColor: '#121731',
          }}
        ></Avatar>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
