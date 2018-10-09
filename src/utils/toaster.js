import { Toast } from "native-base";

const toastError = (message, duration=3000) => {
  Toast.show({
    text: message,
    type: "danger",
    duration: duration
  });
}

export { toastError }; 