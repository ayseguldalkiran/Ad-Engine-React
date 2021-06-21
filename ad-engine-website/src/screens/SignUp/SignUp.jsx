import React, { useState } from 'react';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import './SignUp.css';
import Image from './18907.jpg';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const SignUp = () => {
  const [userState, setUserState] = useState({ email: '', password: '' });
  const signUp = () => {
    var data = {
      email: userState.email,
      password: userState.password,
      companyId: 0,
    };
    fetch('https://localhost:5001/createUser', {
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
      })
      .catch((error) => {
        alert('Error', error);
      })
      .then(() => {
        window.location.pathname = '/';
      });
  };
  return (
    <div className="LoginContainer">
      <div className="leftContainer">
        <img src={Image} alt="img" className="img" />
      </div>
      <div className="rightContainer">
        <div className="inputsContainer">
          <p className="WelcomeText">Create Account</p>
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
            onClick={() => signUp()}
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
            Sign Up
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
