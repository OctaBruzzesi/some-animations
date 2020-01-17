import React from 'react';
import styled from 'styled-components';

import Roboto from  './assets/Roboto/fontRoboto';
import Litter from './components/Litter';

function App() {
  return (
    <AppWrapper>
      <Roboto />
      <Litter
        description="Project 1"
        litterBackColor={{ primary: '#24753A', secondary: '#195E2C'}}
        litterDoorColor="#38A656"
      />
      <Litter
        description="Project 2"
        litterBackColor={{ primary: '#244063', secondary: '#13335C'}}
        litterDoorColor="#4785D6"
      />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: #49B386;
  width: 100%;
  height: 100vh;
  padding: 25px;
  display: flex;
`

export default App;
