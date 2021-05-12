import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderComponent from '../../components/Header/Header';
import NestedTable from '../../components/Table/Table';
import { Layout, Breadcrumb } from 'antd';
import './Edit.css';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Content } = Layout;

const Edit = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [advertiseDataState, setAdvertiseDataState] = useState([]);
  const getCampaigns = async () => {
    const response = await fetch(
      'https://localhost:44359/Advertising/' + '12313'
    );
    const data = await response.json();
    console.log(data);

    return data;
  };

  useEffect(() => {
    getCampaigns().then((data) => {
      setAdvertiseDataState(data);
    });
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <div className="site-layout-content">
            <div className="mainWrapper">
              <div className="mainContainer">
                <div className="leftSide">
                  <FormInput
                    placeholder={
                      'Campaign Name - ' + advertiseDataState.campaignName
                    }
                    style={{
                      width: 'auto',
                      minWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                  />
                  <RangePicker
                    style={{
                      width: 'auto',
                      maxWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                  />

                  <Select
                    defaultValue="Application Name"
                    size="large"
                    style={{
                      width: 'auto',
                      maxWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      color: '#BFBEC3',
                      borderRadius: 5,
                    }}
                    onChange={handleChange}
                  >
                    <Option value="kazanimcepte">Kazanım Cepte</Option>
                    <Option value="sinifimcepte">Sınıfım Cepte</Option>
                  </Select>

                  <Select
                    defaultValue="Type"
                    style={{
                      width: 'auto',
                      maxWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      color: '#BFBEC3',
                      borderRadius: 5,
                    }}
                    onChange={handleChange}
                  >
                    <Option value="banner">Banner</Option>
                  </Select>
                </div>
                <div className="rightSide">
                  <FormInput
                    placeholder={'Company ID - ' + advertiseDataState.companyId}
                    style={{
                      width: 'auto',
                      minWidth: 450,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                  />
                  <FormInput
                    placeholder="Contact"
                    style={{
                      width: 'auto',
                      minWidth: 450,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                  />
                  <FormInput
                    placeholder="Address"
                    style={{
                      width: 'auto',
                      minWidth: 450,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                  />
                  <FormInput
                    placeholder="Payment Status"
                    style={{
                      width: 'auto',
                      minWidth: 450,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                  />
                </div>
              </div>
              <FormButton
                style={{
                  backgroundColor: '#00a6b9',
                  borderColor: '#00a6b9',
                  borderRadius: 5,
                  color: 'white',
                  marginLeft: 350,
                  marginBottom: 30,
                }}
              >
                Save
              </FormButton>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Edit;
