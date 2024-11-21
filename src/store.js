import { createStore } from "redux";
import { reducer } from "./App";

const store = createStore(reducer);

export { store };
