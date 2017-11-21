import { SAY_HELLO } from "../actions/actionHello";

export default function(state = false, action) {
  switch (action.type) {
    case SAY_HELLO:
      return action.payload;
    default:
      return state;
  }
}