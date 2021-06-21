import React from 'react';
import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  HistoryOutlined,
} from '@ant-design/icons';
const SidebarData = [
  {
    title: 'Home',
    icon: <HomeOutlined />,
    path: '/home',
  },
  {
    title: 'Campaigns',
    icon: <FundProjectionScreenOutlined />,
    path: '/campaigns',
  },
  {
    title: 'Pending Campaigns',
    icon: <HistoryOutlined />,
    path: '/pendingCampaigns',
  },
];
export default SidebarData;
