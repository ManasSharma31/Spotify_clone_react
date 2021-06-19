import React,{createContext,useReducer,useContext} from 'react';



 export  const StateContext =createContext();

const StateProvider =({initialState,reducer,children})=>
(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)
export const useStateProviderValue=()=>useContext(StateContext);
export default StateProvider

