import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CustomText from "../components/CustomText";
import MealItem from "../components/MealItem";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favoriteMeals || favoriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <CustomText>No favorite meals found. Start adding some!</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteMeals}
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
