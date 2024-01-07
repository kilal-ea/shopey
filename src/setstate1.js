
let seaState = {
    fil: "",
  };
  
  export const setSeaState = (newState) => {
    seaState = { ...seaState, ...newState };
  };
  
  export const getSeaState = () => {
    return { ...seaState };
  };
  