import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  email: "",
  isLoggedIn: false,
});

export { useGlobalState, setGlobalState };
