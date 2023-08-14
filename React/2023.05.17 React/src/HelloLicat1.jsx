import { createContext } from "react"
import HelloLicat2 from "./HelloLicat2";
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

function HelloLicat1() {
  return (
    <UserInfo.Provider>
      <HelloLicat2 value={{ name: "gary", id: "garyIsFree" }}/>
    </UserInfo.Provider>
  );
}

export {UserInfo, HelloLicat1}