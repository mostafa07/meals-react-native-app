import { React } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen!</Text>
      <Button
        title="Go to Meal Detail Screen"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (naviagtionData) => {
  const categoryId = naviagtionData.navigation.getParam("categoryId");
  const category = CATEGORIES.find((it) => it.id === categoryId);

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

export default CategoryMealsScreen;
