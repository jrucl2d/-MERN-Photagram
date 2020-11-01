/* 리덕스 DUCKS 패턴 사용 */
import { combineReducers } from "redux";
import { posts } from "./posts";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
