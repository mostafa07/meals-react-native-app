import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onClick}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.item.color },
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.item.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 128,
    borderRadius: 8,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 4,
  },
  container: {
    flex: 1,
    borderRadius: 8,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.26,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});

export default CategoryGridTile;
