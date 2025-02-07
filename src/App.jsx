/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NewsSearch from "./components/NewsSearch";
import { Container, Menu, Header, Image } from "semantic-ui-react";
import NewsIndex from "./components/NewsIndex";
import logo from "./nwn.png";
import { useDispatch } from "react-redux";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Menu style={{ borderRadius: 0, background: "" }}>
        <Menu.Item>
          <Image src={logo} size="tiny" centered />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as="h2" data-cy="news-header">
          News Wire Network
        </Header>
        <p>News from around the world</p>
        <NewsIndex />
      </Container>
    </>
  );
};

export default App;
