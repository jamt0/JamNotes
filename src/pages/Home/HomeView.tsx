import React, { FunctionComponent } from "react";
import Scaffold from "JamUI/Scaffold/Scaffold";

type Props = {
  texts: any;
};

const HomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.home}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content></Scaffold.Content>
    <Scaffold.Footer></Scaffold.Footer>
  </Scaffold>
);

export default HomeView;
