import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Catgeories Screen!</Text>
      <Button
        title="Go to Category Meals Screen"
        onPress={() =>
          props.navigation.navigate({ routeName: "CategoryMeals" })
        }
      />
    </View>
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
