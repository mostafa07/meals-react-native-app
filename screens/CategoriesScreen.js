import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGridTile
          item={itemData.item}
          onClick={() =>
            props.navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryId: itemData.item.id,
              },
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
