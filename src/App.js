import React, { useReducer } from "react";
import GlobalContext from "./contexts/";
import { templateReducer } from "./modules/index";

import "./reset.css";
import "./App.css";

function App() {
  // We declare all reducers that we want to use in global
  const [templateState, templateDispatch] = useReducer(
    templateReducer.reducer,
    templateReducer.initialState
  );

  // We store each states
  let states = {
    template: templateState
  };

  // We store each dispatchs
  let dispatchs = {
    template: templateDispatch
  };

  return (
    // We provide all states and dispatchs to each children
    <GlobalContext.Provider value={{ states, dispatchs }}>
      <div className="App"></div>
    </GlobalContext.Provider>
  );
}

export default App;
