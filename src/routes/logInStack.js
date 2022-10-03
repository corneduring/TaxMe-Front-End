import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LogIn from "../screens/LoginScreen";
import SignUp from "../screens/SignupScreen";

const screens = {
  LogIn: {
    screen: LogIn,
  },
  SignUp: {
    screen: SignUp,
  },
};

const LogInStack = createStackNavigator(screens);

export default createAppContainer(LogInStack);
