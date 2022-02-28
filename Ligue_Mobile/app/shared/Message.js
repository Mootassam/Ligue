// import AwesomeAlert from "react-native-awesome-alerts";
import { ToastAndroid } from "react-native";

export default class Message {
  static success(arg) {
    ToastAndroid.show(arg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  }
  static error(arg) {
    ToastAndroid.show(arg, ToastAndroid.LONG, ToastAndroid.CENTER);
  }
}
