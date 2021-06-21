import React, { useState, useEffect } from 'react';
import HeaderComponent from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import { Layout, Breadcrumb } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const { Content } = Layout;

const Home = () => {
  const [weeklyDataArrayState, setWeeklyDataArrayState] = useState([]);

  const getWeeklyStatistics = async () => {
    const response = await fetch('https://localhost:5001/Statistics');
    const data = await response.json().then((dataJson) => {
      return dataJson;
    });
    return data;
  };

  useEffect(() => {
    getWeeklyStatistics().then((data) => {
      const weeklyData = [];
      data.forEach((element) => {
        weeklyData.push({
          name: element.dayName,
          uv: element.clickCount,
        });
      });
      setWeeklyDataArrayState(weeklyData);
    });
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 28 }}>
              <b className="statisctics">Home</b>
            </Breadcrumb.Item>
          </Breadcrumb>
          <LineChart
            width={600}
            height={300}
            data={weeklyDataArrayState}
            style={{ marginTop: 30 }}
          >
            <Line type="monotone" dataKey="uv" stroke="red" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
