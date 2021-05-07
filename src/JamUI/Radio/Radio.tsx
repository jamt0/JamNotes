import React, { FunctionComponent } from "react";
import Text from "JamUI/Text/Text";
import Item from "JamUI/Item/Item";
import { IonRadio } from "@ionic/react";

type Props = {
  color?: string;
  value: string;
};

const Radio: FunctionComponent<Props> = ({ color = "primary", ...props }) => (
  <Item lines="none" className="mb-4 rounded-md" color="light">
    <Text className="text-lg">{props.children}</Text>
    <IonRadio slot="start" color={color} value={props.value} />
  </Item>
);
export default Radio;
