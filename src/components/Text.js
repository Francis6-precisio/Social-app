import React from "react";
import styled from "styled-components/native";

export default TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
    color: $(props => props.color ?? "#414959");
    margin
`;
