import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavigatorOptions,
  }
);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    initialRouteName: "Favorites",
    defaultNavigationOptions: defaultStackNavigatorOptions,
  }
);

const bottomTabNavigatorRoutes = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarColor: Colors.primaryColor,
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarColor: Colors.accentColor,
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={24} color="white" />;
      },
    },
  },
};

const MealsFavoritesBottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabNavigatorRoutes, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(bottomTabNavigatorRoutes, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: { screen: FiltersScreen },
  },
  {
    initialRouteName: "Filters",
    defaultNavigationOptions: defaultStackNavigatorOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavoritesBottomTabNavigator: {
      screen: MealsFavoritesBottomTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
