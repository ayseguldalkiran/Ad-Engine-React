import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Alert } from 'antd';
import './Table.css';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import FormInput from '../../components/FormInput/FormInput';
const { Option } = Select;
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
const NestedTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [advertiseDataState, setAdvertiseDataState] = useState([]);
  const [modalData, setModalData] = useState();
  const [gotModalData, setGotModalData] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const getCampaigns = async () => {
    const response = await fetch('https://localhost:5001/Advertising');
    const data = await response.json();

    return data;
  };

  const update = async () => {
    var data = {
      campaignName: modalData.campaignName,
      id: modalData.id,
      startTime: modalData.startTime,
      endTime: modalData.endTime,
      applicationName: modalData.applicationName,
      styleType: modalData.styleType,
      imgUrl: modalData.imgUrl,
      redirectUrl: modalData.redirectUrl,
      duration: modalData.duration,
      companyId: modalData.companyId,
      clickCount: modalData.clickCount,
    };
    fetch('https://localhost:5001/Advertising', {
      //fetching data httppost
      method: 'PUT',
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

  useEffect(() => {
    getCampaigns().then((data) => {
      setAdvertiseDataState(data);
    });
  }, []);

  // useEffect(() => {
  //   console.log('modalData', modalData);
  // }, [modalData]);

  const getCampaign = async (recordId) => {
    const response = await fetch(
      'https://localhost:5001/Advertising/' + recordId
    );
    const data = await response.json();
    console.log('data', data);
    setModalData(data);
    setGotModalData(true);
  };
  console.log(modalData);

  const deleteCampaign = () => {
    setAlertVisible(true);
  };

  const columns = [
    {
      title: 'ID ',
      dataIndex: 'id',
      key: Math.floor(Math.random() * 1000) + 1,
    },
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
      title: 'Application Name',
      dataIndex: 'applicationName',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    {
      title: 'Type',
      dataIndex: 'styleType',
      key: Math.floor(Math.random() * 1000) + 1,
    },
    // {
    //   render: () => <DeleteOutlined onClick={deleteCampaign} />,
    // },
  ];
  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={advertiseDataState}
        style={{ textAlign: 'center' }}
        onRow={(record) => ({
          onClick: () => {
            getCampaign(record.id);
            setIsVisible(true);
          },
        })}
      />
      <Modal
        title="Campaign"
        visible={isVisible}
        onCancel={handleCancel}
        width={920}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            style={{
              backgroundColor: '#00a6b9',
              borderColor: '#00a6b9',
              borderRadius: 5,
              color: 'white',
            }}
            onClick={update}
          >
            Save
          </Button>,
        ]}
      >
        <Row gutter={20}>
          <Col xs={2} xl={12}>
            <p>Campaign ID:</p>
            <FormInput
              disabled={true}
              value={gotModalData ? modalData.id : ''}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
            />
          </Col>

          <Col xs={2} xl={12}>
            <p>Campaign Name: </p>
            <FormInput
              value={gotModalData ? modalData.campaignName : ''}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  campaignName: event.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={2} xl={12}>
            <p>Start Time: </p>
            <DatePicker
              placeholder={gotModalData ? modalData.startTime : ''}
              //value={gotModalData ? moment(modalData.startTime).format('LL') : ''}

              style={{
                height: 50,
                width: 'auto',
                minWidth: 420,
                marginBottom: 20,
                alignItems: 'center',
                borderRadius: 5,
                boxShadow: '1px 1px 2px 2px rgba(154,154,154,0.1)',
                color: 'black',
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  startTime: event,
                }));
              }}
              // style={Styles.datePickerStyle}
            />
          </Col>
          <Col xs={2} xl={12}>
            <p>End Time: </p>
            <DatePicker
              placeholder={gotModalData ? modalData.endTime : ''}
              //value={gotModalData ? moment(modalData.startTime).format('LL') : ''}
              style={{
                height: 50,
                width: 'auto',
                minWidth: 420,
                marginBottom: 20,
                alignItems: 'center',
                borderRadius: 5,
                color: 'black',
                boxShadow: '1px 1px 2px 2px rgba(154,154,154,0.1)',
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  endTime: event,
                }));
              }}
              // style={Styles.datePickerStyle}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={2} xl={12}>
            <p>Type: </p>
            <Select
              placeholder={'Type'}
              value={gotModalData ? modalData.styleType : ''}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                color: 'black',
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  styleType: event,
                }));
              }}
            >
              <Option value="banner">Banner</Option>
              <Option value="interstitial">Interstitial</Option>
            </Select>
          </Col>

          <Col xs={2} xl={12}>
            <p>Duration: </p>
            <FormInput
              placeholder="Duration"
              value={gotModalData ? modalData.duration : ''}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  duration: event.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={2} xl={12}>
            <p>Image Url:</p>
            <FormInput
              value={gotModalData ? modalData.imgUrl : ''}
              placeholder={'Campaign Url'}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  imgUrl: event.target.value,
                }));
              }}
            />
          </Col>
          <Col xs={2} xl={12}>
            <p>Redirect Url: </p>
            <FormInput
              value={gotModalData ? modalData.redirectUrl : ''}
              placeholder="Redirect Url"
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  redirectUrl: event.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={2} xl={12}>
            <p>Application Name:</p>
            <Select
              placeholder={'ApplicationName'}
              value={gotModalData ? modalData.applicationName : ''}
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                color: 'black',
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  applicationName: event,
                }));
              }}
            >
              <Option value="kazanimCepte">Kazanım Cepte</Option>
              <Option value="sinifimCepte">Sınıfım Cepte</Option>
              <Option value="cepteTest">Cepte Test</Option>
            </Select>
          </Col>
          <Col xs={2} xl={12}>
            <p>Company ID: </p>
            <FormInput
              value={gotModalData ? modalData.companyId : ''}
              placeholder="Company ID"
              style={{
                width: 'auto',
                minWidth: 420,
                height: 50,
                margin: 1,
                marginBottom: 20,
                borderRadius: 5,
              }}
              onChange={(event) => {
                setModalData((prev) => ({
                  ...prev,
                  companyId: event.target.value,
                }));
              }}
            />
          </Col>
        </Row>
        {alertVisible && (
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
            action={
              <Space direction="vertical">
                <Button size="small" type="primary">
                  Accept
                </Button>
                <Button size="small" danger type="ghost">
                  Decline
                </Button>
              </Space>
            }
            closable
          />
        )}
      </Modal>
    </>
  );
};

export default NestedTable;
