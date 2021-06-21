import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Alert } from 'antd';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import FormInput from '../../components/FormInput/FormInput';
const { Option } = Select;
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './PendingCampaignsTable.css';
import { Row, Col } from 'antd';
const PendingCampaignsTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [advertiseDataState, setAdvertiseDataState] = useState([]);
  const [modalData, setModalData] = useState();
  const [gotModalData, setGotModalData] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const getCampaigns = async () => {
    const response = await fetch(
      'https://localhost:5001/GetAllAdvertiseRequests'
    );
    const data = await response.json();

    return data;
  };

  const approve = async () => {
    fetch(
      'https://localhost:5001/approveAdvertise/' + modalData.id + '/approve'
    ).then(() => {
      window.location.pathname = '/pendingCampaigns';
    });
  };

  const decline = async () => {
    fetch(
      'https://localhost:5001/approveAdvertise/' + modalData.id + '/decline'
    ).then(() => {
      window.location.pathname = '/pendingCampaigns';
    });
  };

  useEffect(() => {
    getCampaigns().then((data) => {
      setAdvertiseDataState(data);
    });
  }, []);

  const getCampaign = async (recordId) => {
    const response = await fetch(
      'https://localhost:5001/GetAdvertiseRequest/' + recordId
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
  ];

  const handleCancel = () => {
    setIsVisible(false);
  };

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
          <Button key="back" onClick={decline}>
            Decline
          </Button>,
          <Button
            style={{
              backgroundColor: '#00a6b9',
              borderColor: '#00a6b9',
              borderRadius: 5,
              color: 'white',
            }}
            onClick={approve}
          >
            Accept
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
            />
          </Col>
          <Col xs={2} xl={12}>
            <p>End Time: </p>
            <DatePicker
              placeholder={gotModalData ? modalData.endTime : ''}
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

export default PendingCampaignsTable;
