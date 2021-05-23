import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderComponent from '../../components/Header/Header';
import NestedTable from '../../components/Table/Table';
import { Layout, Breadcrumb } from 'antd';
import './Campaigns.css';
import FormButton from '../../components/FormButton/FormButton';
import { Modal } from 'antd';
const { Content } = Layout;
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';

const Campaigns = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 28 }}>
              <b>Active Campaigns</b>
            </Breadcrumb.Item>
          </Breadcrumb>
          <FormButton
            style={{
              backgroundColor: '#00a6b9',
              borderColor: '#00a6b9',
              borderRadius: 5,
              color: 'white',
              marginTop: 20,
              marginBottom: 5,
              width: 140,
              alignSelf: 'flex-end',
            }}
            onClick={() => (window.location.pathname = '/createCampaign')}
          >
            Create Campaign
          </FormButton>
          <div className="site-layout-content">
            <NestedTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Campaigns;
