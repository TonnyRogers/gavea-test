import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Message,
  Name,
  BusinessOptions,
  Title,
  OffersList,
  Offer,
  OfferButton,
  Welcoming,
  LogoutButton,
} from './styles';

const Dashboard = ({ route }) => {
  const { data: user } = route.params;
  console.log(user);

  return (
    <Container>
      <Header>
        <Welcoming>
          <Message>Bem-vindo</Message>
          <Name>{user.name}</Name>
        </Welcoming>
        <LogoutButton>
          <Icon name="exit-to-app" size={24} color="#FFF" />
        </LogoutButton>
      </Header>
      <BusinessOptions>
        <Title>Vamos aos Negócios</Title>
        <OffersList>
          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>
        </OffersList>
      </BusinessOptions>
    </Container>
  );
};

export default Dashboard;
