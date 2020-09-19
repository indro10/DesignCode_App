import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  return (
    <Container>
      <Image source={props.image} />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  elevation: 5;
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  margin-left: 7px;
  font-weight: 600;
  margin-left: 8px;
`;
