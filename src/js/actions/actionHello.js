export const SAY_HELLO = "say_hello";

export function sayHello(text) {

  return {
    type: SAY_HELLO,
    payload: text
  };
}