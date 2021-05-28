import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderComponent from '../../components/Header/Header';
import { Layout, Breadcrumb } from 'antd';
import './CreateCampaign.css';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import { useState, useEffect } from 'react';
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Content } = Layout;
import moment from 'moment';

const CreateCampaign = () => {
  const [campaignNameState, setCampaignNameState] = useState('');
  const [campaignIdState, setCampaignIdState] = useState();
  const [startTimeState, setStartTimeState] = useState(new Date());
  const [endTimeState, setEndTimeState] = useState(new Date());
  const [typeState, setTypeState] = useState();
  const [applicationNameState, setApplicationNameState] = useState('');
  const [durationState, setDurationState] = useState();
  const [imageUrlState, setImageUrlState] = useState('');
  const [redirectUrlState, setRedirectUrlState] = useState('');
  const [companyIdState, setCompanyIdState] = useState();
  const createCampaign = () => {
    var data = {
      campaignName: campaignNameState,
      id: 10,
      startTime: moment(startTimeState, dateFormat).add(15, 'minutes'),
      endTime: moment(endTimeState, dateFormat).add(15, 'minutes'),
      applicationName: applicationNameState,
      styleType: typeState,
      imgUrl: imageUrlState,
      redirectUrl: redirectUrlState,
      duration: durationState,
      companyId: companyIdState,
    };

    fetch('https://localhost:5001/Advertising', {
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
                    onChange={(e) => setCampaignNameState(e.target.value)}
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
                  <DatePicker
                    onChange={(e) => setStartTimeState(e)}
                    format={dateFormat}
                    style={{
                      height: 50,
                      width: '100%',
                      marginBottom: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                      boxShadow: '1px 1px 2px 2px rgba(154,154,154,0.1)',
                    }}
                    // style={Styles.datePickerStyle}
                  />
                  <DatePicker
                    onChange={(e) => setEndTimeState(e)}
                    format={dateFormat}
                    style={{
                      height: 50,
                      width: '100%',
                      marginBottom: 20,
                      alignItems: 'center',
                      borderRadius: 5,
                      boxShadow: '1px 1px 2px 2px rgba(154,154,154,0.1)',
                    }}
                    // style={Styles.datePickerStyle}
                  />

                  <Select
                    defaultValue="Application Name"
                    onChange={(e) => setApplicationNameState(e)}
                    style={{
                      width: 'auto',
                      maxWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      color: '#BFBEC3',
                      borderRadius: 5,
                    }}
                    size="large"
                  >
                    <Option value="kazanimCepte">Kazanım Cepte</Option>
                    <Option value="sinifimCepte">Sınıfım Cepte</Option>
                    <Option value="cepteTest">Cepte Test</Option>
                  </Select>

                  <Select
                    defaultValue="Type"
                    onChange={(e) => setTypeState(e)}
                    style={{
                      width: 'auto',
                      maxWidth: 420,
                      height: 50,
                      margin: 1,
                      marginBottom: 20,
                      color: '#BFBEC3',
                      borderRadius: 5,
                    }}
                    size="large"
                  >
                    <Option value="banner">Banner</Option>
                    <Option value="interstitial">Interstitial</Option>
                  </Select>
                </div>
                <div className="rightSide">
                  <FormInput
                    onChange={(e) => setCompanyIdState(e.target.value)}
                    placeholder="Advertising Company ID"
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
                    onChange={(e) => setDurationState(e.target.value)}
                    placeholder="Duration"
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
                    onChange={(e) => setImageUrlState(e.target.value)}
                    placeholder="Image Url"
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
                    onChange={(e) => setRedirectUrlState(e.target.value)}
                    placeholder="Redirect Url"
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
