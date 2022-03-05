import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Colors } from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={24}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    ></HeaderButton>
  );
};

export default CustomHeaderButton;
