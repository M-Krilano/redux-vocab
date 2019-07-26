import React from "react";
import { SafeAreaView, Text } from "react-native";

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </SafeAreaView>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    //height: 60,
    paddingTop: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
