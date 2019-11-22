import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'; // Remember to import the other navigators later
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from 'react-native';

const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
};

const SettingsStack = createStackNavigator(
    { SettingsScreen });

const HomeStack = createStackNavigator(
    { DetailScreen, HomeScreen, OptionsScreen },
    {
        transitionConfig: dynamicModalTransition,
        initialRouteName: "HomeScreen"
    });

const MainNavigator = Platform.select({
    ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
    android: createDrawerNavigator({ HomeStack, SettingsStack })
});

const RootSwitch = createSwitchNavigator(
    { LoadingScreen, MainNavigator },
    { initialRouteName: "MainNavigator" }
);

export default createAppContainer(RootSwitch);

