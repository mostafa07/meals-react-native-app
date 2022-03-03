import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen!</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (naviagtionData) => {
  const mealId = naviagtionData.navigation.getParam("mealId");
  const category = MEALS.find((it) => it.id === mealId);

  return {
    headerTitle: category.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
