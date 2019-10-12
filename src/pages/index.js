/* eslint-disable no-case-declarations */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { AlgopitDesktopImage } from '../components/image';
import { validateEmail, validatePassword, validateUsername } from '../utils/FormValidation';
// TODO: change px to rems or percentages.
const StyledLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'content';
  
  padding: 8px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    display: none;
    color: #E2E7F7;
  }

  @media screen and (min-width: 768px) { 
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'content form';
    grid-gap: 24px;
    align-items: center;
    margin: 0 auto;
    padding: 64px;

    .content {
      position: relative;
      grid-area: content;
      max-width: 500px;
    }

    h1 {
      font-size: 36px;
    }

    p {
      display: block;
      font-size: 24px;
    }

    .card {
      grid-area: form;
    }
  }
`;

const Card = styled.div`
  margin: 0 auto;
  min-width: 300px;
  max-width: 420px;
  min-height: 410px;
  background: white;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 32px 16px 32px;
  h1 {
    font-size: 32px;
    color: #343434;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Entry = styled.input`
  display: block;
  width:100%;
  min-height: 40px;
  max-height: 80px;
  border: 1px solid #E3E4E8;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  color: #71737A;
  font-size: 12px;
  font-weight: 600;
  padding: 8px;
  &::placeholder {
    color: #71737A;
    font-size: 12px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: ${(props) => props.border || 'none'};
  border-radius: 4px;
  margin-bottom: 16px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColor || '#27CA89'};
  color: ${(props) => props.color || 'white'} ;
`;

const ErrorLabel = styled.span`
  font-family: 'Poppins', Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #EE314A;
`;

const IndexPage = () => {
  // Form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    switch (field) {
      case 'username':
        setUsername(value);
        setErrors({ ...errors, username: validateUsername(value) });
        break;
      case 'email':
        setEmail(value);
        setErrors({ ...errors, email: validateEmail(value) });
        break;
      case 'password':
      default:
        setPassword(value);
        setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do registration with graphQL
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    window.location.href = 'http://www.app.algopit.dev';
  };

  return (
    <Layout>
      <StyledLayout>
        <SEO title="Algopit" />
        <div className="content">
          <AlgopitDesktopImage />
          <h1>
            {'Solve problems and\nchallenge your friends.'}
          </h1>
          <p>
      With Algopit, it’s easier than never to create lists for training,
      and browse problems that will challenge your abilities.
          </p>
        </div>
        <div className="form">
          <Card>
            <h1>Train Better</h1>
            <form>
              <Entry placeholder="Username" name="username" value={username} onChange={(e) => handleChange(e)} />
              {errors.username && <ErrorLabel>{errors.username}</ErrorLabel>}
              <Entry placeholder="Email" name="email" value={email} onChange={(e) => handleChange(e)} />
              {!errors.email && errors.email !== undefined
                && <ErrorLabel>Enter a valid email</ErrorLabel>}
              <Entry placeholder="Password" name="password" type="password" value={password} onChange={(e) => handleChange(e)} />
              {!errors.password && errors.password !== undefined
              && <ErrorLabel>Enter a valid password (uppercase, lowercase and numbers)</ErrorLabel>}
              <Button type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</Button>
              <Button backgroundColor="white" border="1px solid #CDCED3" color="#A4A6AB" onClick={(e) => handleRedirect(e)}>Sign In</Button>
            </form>
          </Card>
        </div>
      </StyledLayout>
    </Layout>
  );
};

export default IndexPage;
