let seaState = {
    title: "",
    min: "",
    max: "",
  };
  
  export const setSeaState = (newState) => {
    seaState = { ...seaState, ...newState };
  };
  
  export const getSeaState = () => {
    return { ...seaState };
  };
  