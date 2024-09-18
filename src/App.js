import React from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './_app.scss';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='app__container border border-info'>
        <SideBar/>
      <Container fluid className='app__main border border-warning'>
        <HomeScreen/>
      </Container>
      </div>
    </div>
  );
};

export default App
