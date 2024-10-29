import { createContext } from "react";

const AppContext = createContext({
    items: [],
    dispatch: null,
});

export default AppContext;
