import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  return (
    <View style={styles}>
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
    </View>
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal Categories",
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

export default CategoriesScreen;
