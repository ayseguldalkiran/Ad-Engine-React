import React from 'react';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import './Login.css';
import Image from './rodion-kutsaev-0VGG7cqTwCo-unsplash.jpg';
//import Image from './118Z_2012.w011.n001.443A.p30.443.jpg';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="leftContainer">
        <img src={Image} alt="img" className="img" />
        {/* <img src={Image} alt="img" className="img" /> */}
      </div>
      <div className="rightContainer">
        <div className="inputsContainer">
          <p className="WelcomeText">
            Welcome to <br /> Ad Engine
          </p>
          <FormInput
            placeholder="Email"
            style={{
              width: 'auto',
              minWidth: 400,
              height: 40,
            }}
          />
          <br />
          <Input.Password
            placeholder="Password"
            style={{
              marginBottom: 20,
              width: 'auto',
              minWidth: 400,
              height: 40,
            }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <br />
          <FormButton
            onClick={() => (window.location.pathname = '/home')}
            style={{
              backgroundColor: '#00a6b9',
              borderColor: '#00a6b9',
              borderRadius: 15,
              color: 'white',
              marginTop: 20,
              width: 150,
              height: 35,
            }}
          >
            Login
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
