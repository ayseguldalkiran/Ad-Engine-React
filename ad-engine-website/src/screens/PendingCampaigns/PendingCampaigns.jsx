import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderComponent from '../../components/Header/Header';
import { Layout, Breadcrumb } from 'antd';
import './PendingCampaigns.css';
import PendingCampaignsTable from '../../components/PendingCampaignsTable/PendingCampaignsTable';
const { Content } = Layout;

const PendingCampaigns = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 28 }}>
              <b>Pending Campaigns</b>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <PendingCampaignsTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PendingCampaigns;
