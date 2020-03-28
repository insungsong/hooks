import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!options.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(new Date());
  };

  useEffect(() => {
    axiosInstance(options)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data: data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
