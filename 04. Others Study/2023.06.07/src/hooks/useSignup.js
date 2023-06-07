import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/Auth";

// 회원가입을 진행하는 hook
export const useSignup = () => {
  // 에러 정보를 저장한다.
  const [error, setError] = useState(null);
  // 현재 서버와의 통신 상태를 저장한다.
  const [ispending, setPending] = useState(false);

  // const { dispatch }

  const signup = (email, password, displayName) => {
    setError(null);
    setPending(true);

    // 회원가입이 처리되는 함수
    createUserWithEmailAndPassword(appAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      if(!user) {
        throw new Error("회원가입에 실패하였습니다!")
      }

      // 회원의 별명정보를 업데이트 한다.
      updateProfile(appAuth.currentUser, {displayName})
      .then(() => {
        setError(null);
        setPending(false);
        dispatch({type: "login", payload: user})
      }).catch((err) => {
        setError(err.message);
        setPending(false);
        console.log(error);
      });
    })
    .catch((err) => {
      setError(err.message);
      setPending(false);
      console.log(error);
    });

  }
  return {error, ispending, signup}
}