import axios from "axios";

export const pendingActive = (msisdn) => {
  try {
    const { data } = axios.get(
      `http://10.3.104.251:8283/pendingActive/${msisdn}`
    );

    const { statuCode, Message } = data;
    if (statuCode === 200) {
      return {
        success: true,
        message: Message,
      };
    }
    if (statuCode === 404) {
      return {
        success: false,
        message: Message,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "UnknownError",
    };
  }
};
