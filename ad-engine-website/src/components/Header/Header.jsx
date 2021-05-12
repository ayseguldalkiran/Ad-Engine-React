import React from 'react';
import './Header.css';
import { Layout, Avatar } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const { Header } = Layout;
const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a>English</a>
      </Menu.Item>
      <Menu.Item>
        <a>Türkçe</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header style={{ backgroundColor: '#F0F2F5', padding: 0 }}>
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
      />
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{
            float: 'right',
            marginRight: 60,
            color: 'black',
            fontSize: 18,
          }}
        >
          Language <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
