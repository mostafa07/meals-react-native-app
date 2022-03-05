import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  // dummy favorite meals for now
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%", padding: 16 }}
        renderItem={(itemData) => {
          return (
            <MealItem
              item={itemData.item}
              onClick={() => {
                props.navigation.navigate({
                  routeName: "MealDetail",
                  params: {
                    mealId: itemData.item.id,
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

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
