import { createContext, useReducer } from "react";

const AuthContext = createContext();

// react에서 chlidren 컴포넌트 태그의 사이에 위치한 내용을 가르킨다.
const AuthContextProvider = ({children}) => {

  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
      return {...state, user: action.payload}

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(authReducer, {user: null});
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContex, AuthContextProvider}