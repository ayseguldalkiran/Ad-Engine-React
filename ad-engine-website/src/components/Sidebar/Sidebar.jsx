import React from 'react';
import SidebarData from '../SidebarData/SidebarData';
import './Sidebar.css';
import { Layout } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      width={250}
      style={{
        backgroundColor: '#001329',
        //marginTop: 20,
        //borderRadius: 20,
        //marginLeft: 20,
        //marginBottom: 20,
      }}
    >
      <p className="adEngineText">AD ENGINE</p>
      <ul className="SidebarList">
        {SidebarData.map((item, index) => {
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

export default Sidebar;
