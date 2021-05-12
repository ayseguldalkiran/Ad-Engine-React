import React from 'react';
import FormButton from '../../components/FormButton/FormButton';
import HeaderComponent from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;
const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 28 }}>
              <b>Home</b>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
