import HomeScreen from "../screens/HomeScreen";
import ComponentsScreen from "../screens/ComponentsScreen";
import ListScreen from "../screens/ListScreen";
import ImageScreen from "../screens/ImageScreen";
import CounterScreen from "../screens/CounterScreen";
import CounterReducerScreen from "../screens/CounterReducerScreen";
import ColorScreen from "../screens/ColorScreen";
import SquareScreen from "../screens/SquareScreen";
import SquareReducerScreen from "../screens/SquareReducerScreen";

const router = {
  Home: HomeScreen,
  Components: ComponentsScreen,
  List: ListScreen,
  Image: ImageScreen,
  Counter: CounterScreen,
  CounterReducer: CounterReducerScreen,
  Square: SquareScreen,
  SquareReducer: SquareReducerScreen,
};

export default router;
