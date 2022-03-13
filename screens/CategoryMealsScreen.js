import { React } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const categoryMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%", padding: 16 }}
        renderItem={(itemData) => {
          const isMealFavorited = favoriteMeals.some(
            (it) => it.id === itemData.item.id
          );

          return (
            <MealItem
              item={itemData.item}
              onClick={() => {
                props.navigation.navigate({
                  routeName: "MealDetail",
                  params: {
                    meal: itemData.item,
                    isFavorited: isMealFavorited,
                  },
                });
              }}
            />
          );
        }}
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
