import { cerateStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens";

const navigator = cerateStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
