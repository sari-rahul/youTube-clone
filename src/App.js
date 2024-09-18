import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './_app.scss';

const App = () => {

  const[sidebar,toggleSideBar]= useState(false);


  const handleToggleSideBar=()=>toggleSideBar(value=>!value)

  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar}/>
      <div className='app__container '>
        <SideBar 
          sidebar={sidebar} 
          handleToggleSideBar={handleToggleSideBar}
        />
      <Container fluid className='app__main'>
        <HomeScreen/>
      </Container>
      </div>
    </>
  );
};

export default App
