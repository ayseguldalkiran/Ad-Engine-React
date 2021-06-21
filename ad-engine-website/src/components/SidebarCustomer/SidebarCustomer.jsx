import React from 'react';
import SidebarDataCustomer from '../SidebarDataCustomer/SidebarDataCustomer';
import './SidebarCustomer.css';
import { Layout } from 'antd';

const { Sider } = Layout;

const SidebarCustomer = () => {
  return (
    <Sider
      width={250}
      style={{
        backgroundColor: '#001329',
      }}
    >
      <p className="adEngineText">AD ENGINE</p>
      <ul className="SidebarList">
        {SidebarDataCustomer.map((item, index) => {
          return (
            <li
              key={index}
              className="row"
              onClick={() => (window.location.pathname = item.path)}
            >
              <div id="icon">{item.icon}</div>
              <div id="title">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </Sider>
  );
};

export default SidebarCustomer;
