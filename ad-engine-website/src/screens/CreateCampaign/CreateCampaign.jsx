import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderComponent from '../../components/Header/Header';
import { Layout, Breadcrumb } from 'antd';
import './CreateCampaign.css';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import { DatePicker, Space, Input } from 'antd';
import { Select } from 'antd';
import { useState, useEffect } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Content } = Layout;

const CreateCampaign = () => {
  const [value, setvalue] = useState('');

  const onChange = ({ target: { value } }) => {
    setvalue(value);
    console.log(value);
  };

  const [campaignNameState, setCampaignNameState] = useState('');
  const createCampaign = () => {
    var data = {
      //construct animal data to post
      campaignName: value,
      id: 1232,
      startTime: new Date(2018, 11, 24, 10, 33, 30, 0),
      endTime: new Date(2018, 11, 24, 10, 33, 30, 0),
      applicationName: 'kaz',
      styleType: 'banner',
      imgUrl: value,
      redirectUrl: value,
      duration: 3000,
      companyId: value,
    };
    fetch('https://localhost:44359/Advertising', {
      //fetching data httppost
      method: 'POST',
      cache: 'no-cache',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json(data))
      .then((data) => {
        alert('Success', data);
      })
      .catch((error) => {
        alert('Error', error);
      });
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    console.log(campaignNameState);
  }, [campaignNameState]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <div className="separator"></div>
        <Content style={{ padding: '20px 50px' }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 28 }}>
              <b>Create Campaign</b>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div className="mainWrapper">
              <div className="mainContainer">
                <div className="leftSide">
                  <FormInput
                    // onChange={(e) => setCampaignNameState(e)}
                    onChange={(e) => onChange(e)}
                    placeholder="Campaign Name"
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
                    size="large"
                  >
                    <Option value="banner">Banner</Option>
                  </Select>
                </div>
                <div className="rightSide">
                  <FormInput
                    placeholder="Advertising Company Name"
                    style={{
                      width: 'auto',
                      minWidth: 450,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      borderRadius: 5,
                    }}
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                onChange={onChange}
                onClick={() => createCampaign()}
              >
                Create
              </FormButton>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CreateCampaign;
