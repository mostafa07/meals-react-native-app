import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../components/CustomText";

const MealItem = (props) => {
  let TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={props.onClick}>
        <View>
          <View style={styles.mealHeader}>
            <ImageBackground
              source={{ uri: props.item.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.mealDetails}>
            <CustomText>{props.item.duration}m</CustomText>
            <CustomText>{props.item.complexity.toUpperCase()}</CustomText>
            <CustomText>{props.item.affordability.toUpperCase()}</CustomText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 196,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 8,
  },
  mealHeader: {
    flexDirection: "row",
    height: "85%",
  },
  mealDetails: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "white",
  },
});

export default MealItem;
