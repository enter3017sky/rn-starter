import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import router from "./src/router";

console.log(router);

const navigator = createStackNavigator(router, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "App",
  },
});

export default createAppContainer(navigator);
