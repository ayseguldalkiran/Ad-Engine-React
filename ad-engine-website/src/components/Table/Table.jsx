import React, { useEffect, useState } from 'react';
import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Table.css';

import 'antd/dist/antd.css';

const NestedTable = () => {
  const [advertiseDataState, setAdvertiseDataState] = useState([]);
  const getCampaigns = async () => {
    const response = await fetch('https://localhost:44359/Advertising');
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getCampaigns().then((data) => {
      setAdvertiseDataState(data);
    });
  }, []);

  const columns = [
    {
      title: 'Campaign Name',
      dataIndex: 'campaignName',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: 'Application',
      dataIndex: 'applicationName',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: 'Type',
      dataIndex: 'styleType',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    { title: '', key: 'operation', render: () => <a href="/edit">Edit</a> },
  ];

  // const data = [];

  //   data.push(
  //     {
  //     name: '#FinalDershanesi',
  //     startTime: '02.03.2021',
  //     endTime: '02.05.2021',
  //     application: 'Kazanım Cepte',
  //     type: 'Banner',
  //   },
  //   {
  //     name: '#IslerKitabevi',
  //     startTime: '03.04.2021',
  //     endTime: '03.05.2021',
  //     application: 'Sınıfım Cepte',
  //     type: 'Poster',
  //   },
  //   {
  //     name: '#PalmeYayinevi',
  //     startTime: '24.04.2021',
  //     endTime: '24.05.2021',
  //     application: 'Sınıfım Cepte',
  //     type: 'Interstitial',
  //   },
  //   {
  //     name: '#UgurOkullari',
  //     startTime: '16.04.2021',
  //     endTime: '26.05.2021',
  //     application: 'Cepte Test',
  //     type: 'Banner',
  //   },
  //   );

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      dataSource={advertiseDataState}
      style={{ textAlign: 'center' }}
    />
  );
};

export default NestedTable;
