import React, { createContext, useState, useEffect } from 'react';

const EssentialContext = createContext();

const initialState = {
    bodyPosition: 0,
  };

export const EssentialProvider = ({ children }) => {

    const [state, setState] = useState(initialState);

    const setBodyPosition = (pos) => {
        setState({
            ...state,
            bodyPosition: pos,
        });
        // setState((state) => {
        //     console.log(state);
        //     return {...state, bodyPosition: pos}
        // })
    }

    const getLatestState = () => {
        return state;
    }

    useEffect(() => {
        // console.log('Printing Current State: ', state);
    }, [state]);


    return (
        <EssentialContext.Provider value={{
            state,
            setState,
            setBodyPosition,
            getLatestState,
        }}>
            {children}
        </EssentialContext.Provider>
    );
};
    
export default EssentialContext;