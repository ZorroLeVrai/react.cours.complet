import { useEffect } from "react";

export default function useUpdateCallback(value, notificationFunction) {
  useEffect(() => {
    if (notificationFunction)
      notificationFunction(value);
  }, [notificationFunction, value]);
}