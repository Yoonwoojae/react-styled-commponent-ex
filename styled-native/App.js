import React from "react";
import styled from "styled-components";

const Contatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <Contatiner>
      <Title>Open up App.js to start working on your app!</Title>
    </Contatiner>
  );
}
