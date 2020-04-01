import React from 'react';
import QRcode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButtom,
  SignOutButtomText,
} from './styles';

const Menu = ({translateY}) => (
  <Container
    style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
    <Code>
      <QRcode
        value="https://rocketseat.com.br"
        size={80}
        backgroundColor="#fff"
        color="#8b10ae"
      />
    </Code>

    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#fff" />
        <NavText>Me Ajuda</NavText>
      </NavItem>

      <NavItem>
        <Icon name="person-outline" size={20} color="#fff" />
        <NavText>Perfil</NavText>
      </NavItem>

      <NavItem>
        <Icon name="credit-card" size={20} color="#fff" />
        <NavText>Configurar Cartão</NavText>
      </NavItem>

      <NavItem>
        <Icon name="smartphone" size={20} color="#fff" />
        <NavText>Configurar dispositivo</NavText>
      </NavItem>
    </Nav>

    <SignOutButtom onPress={() => {}}>
      <SignOutButtomText>SAIR DO APP</SignOutButtomText>
    </SignOutButtom>
  </Container>
);

export default Menu;
