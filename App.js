import { cerateStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens";
import ResultsShowScreen from "./src/screens/ResultsShowsScreen";

const navigator = cerateStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
