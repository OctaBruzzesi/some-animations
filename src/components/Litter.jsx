import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Litter = ({ description, litterBackColor, litterDoorColor, ...props }) => {
  const [open, setOpen] = useState(false);

  const { rotation } = useSpring({
    from: { rotation: 0, view: 0 },
    rotation: open ? -105 : 0,
  })

  return (
    <Container>
      <LitterBack
        color={litterBackColor}
        {...props}
        onMouseEnter={() => setOpen(e => !e)}
      >
        <LitterDoor
          style={{
            transform: rotation.interpolate(rotation => `rotateY(${rotation}deg)`),
          }}
          color={litterDoorColor}
        >
          <LitterWood />
          <LitterHandle />
        </LitterDoor>
        <Text>{description}</Text>
      </LitterBack>
    </Container>
  );
};

const Container = styled.div`
  height: 25%;
  width: 25%;
`

const LitterBack = styled.div`
  display: flex;
  background: ${props => props.color.primary};
  border-radius: 9px;
  height: 100%;
  border: 9px solid ${props => props.color.secondary};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const LitterDoor = styled(animated.div)`
  display: flex;
  position: absolute;
  background: ${props => props.color};
  border-radius: 9px;
  height: 100%;
  width: 100%;
  transform-origin: left;
  align-items: center;
  justify-content: space-around;
`

const LitterWood = styled.div`
  margin: 40px;
  flex: 3;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 9px;
  align-self: stretch;
`

const Text = styled.p`
  color: white;
  font-family: Roboto;
  text-align: center;
`

const LitterHandle = styled.div`
  margin-right: 25px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: #454545;
`

export default Litter;