import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import AppHeader from './components/AppHeader';
import FlightContainer from './containers/FlightContainer';

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <FlightContainer />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Fernweh Created with{' '}
          <span role="img" aria-label="unicorn">
            🦄
          </span>{' '}
          2019
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
