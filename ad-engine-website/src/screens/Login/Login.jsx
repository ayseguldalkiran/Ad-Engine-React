import React, { useState } from 'react';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import './Login.css';
import Image from './18907.jpg';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
  const [userState, setUserState] = useState({ email: '', password: '' });
  const loginUser = () => {
    var data = {
      email: userState.email,
      password: userState.password,
      companyId: 0,
    };
    fetch('https://localhost:5001/User', {
      method: 'POST',
      cache: 'no-cache',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json(data))
      .then((data) => {
        alert('Success', data);
        if (data == 'admin') {
          window.location.pathname = '/home';
        } else if (data == 'customer') {
          window.location.pathname = '/customer';
        }
      })
      .catch((error) => {
        alert('Error', error);
      });
  };
  return (
    <div className="LoginContainer">
      <div className="leftContainer">
        <img src={Image} alt="img" className="img" />
      </div>
      <div className="rightContainer">
        <div className="inputsContainer">
          <p className="WelcomeText">
            Welcome to <br /> Ad Engine
          </p>
          <FormInput
            onChange={(e) => {
              setUserState((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            placeholder="Email"
            style={{
              width: 'auto',
              minWidth: 400,
              height: 40,
            }}
          />
          <br />
          <Input.Password
            onChange={(e) => {
              setUserState((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
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
            onClick={() => loginUser()}
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
          <div className="signUpDiv">
            <p>Don't have an account?</p>
            <a
              style={{
                marginLeft: 10,
                color: '#00a6b9',
              }}
              href="/signUp"
            >
              <b>Sign Up</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
