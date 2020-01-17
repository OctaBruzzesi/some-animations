import React from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import Roboto from  './assets/Roboto/fontRoboto';
import Litter from './components/Litter';

const projects = [
  {
    description: 'Project 1',
    litterBackColor: { primary: '#24753A', secondary: '#195E2C' },
    litterDoorColor: "#38A656",
  },
  // {
  //   description: 'Project 2',
  //   litterBackColor: { primary: '#244063', secondary: '#13335C' },
  //   litterDoorColor: '#4785D6',
  // },
]

function App() {
  const litterIn = useTransition(projects, item => item, {
    from: { transform: 'translateY(1px)' },
    enter: { transform: 'translateY(500px)' },
    leave: { transform: 'translateY(1px)' },
  });
  
  return (
    <AppWrapper>
      <Roboto />
        {litterIn.map(({ item, props }) => (
          <LitterContainer
            style={props}
            description={item.description}
            litterBackColor={item.litterBackColor}
            litterDoorColor={item.litterDoorColor}
          />
        ))}
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

const LitterContainer = animated(Litter)

export default App;
