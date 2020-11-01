import * as api from "../api";

// Action Creators, Redux Thunk를 사용해서 비동기 작업 수행
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // 여기서의 data는 posts를 의미
    dispatch({ type: "FETCH_ALL", payload: data }); // action.payload에 데이터가 담겨 감
  } catch (err) {
    console.error(err.message);
  }
};
// Initial States
const initialState = [];

// useEffect로 console에 찍어보면 두 번 나옴. 처음에 initialState 나오고 다음에 ajax 요청 결과
export const posts = (posts = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // 실제 posts가 들어가 있음
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
