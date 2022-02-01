import { useState, useEffect, useReducer } from "react";
import globalState from "../reducers/global";

const initialState = {
  isLoading: true,
};

export default function useFetch(url) {
  const [data, setData] = useState(undefined);
  const [state, dispatch] = useReducer(globalState, initialState);

  // REMOTE DATA FETCHING
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        dispatch({ type: "FINISHED" });
      });
  }, [url]);

  return {
    data,
    isLoading: state.isLoading,
  }

}