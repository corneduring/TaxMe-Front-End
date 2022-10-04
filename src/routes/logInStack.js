import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LogIn from "../screens/loginScreen";
import SignUp from "../screens/signupScreen";

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
