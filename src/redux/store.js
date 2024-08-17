import { combineReducers, createStore, applyMiddleware } from "redux";
import resturantReducer from "./reducers/resturantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
  restaurants: resturantReducer,
  products: productReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
/*
 * applyMiddleware her hangi biri ara yazılımı redux'a dahil etmeye yarar
 * Biz burda thunk dahil etmek için kullanıldı.
 */

export default createStore(rootReducer, applyMiddleware(thunk));
