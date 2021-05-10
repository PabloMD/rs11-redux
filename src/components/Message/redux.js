import { v4 as uuidv4 } from "uuid";

const UI_MESSAGE_ADD = "UI/MESSAGE/ADD";
const UI_MESSAGE_REMOVE = "UI/MESSAGE/REMOVE";

export const addMessage = (type, messageText) => {
  return (dispatch) => {
    // ok, pierwsze co zrobiłem to zaimplementowałem by Message.js dispatchował removeMessageType
    // ale to chyba powinno być "odgórnie" ogarnięte, więc stwierdziłem, że tu by było najlepiej? :)
    const newId = uuidv4();
    dispatch(addMessageAction(type, messageText, newId));
    setTimeout(() => {
      dispatch(removeMessageType(newId));
    }, 5000);
  };
};

const addMessageAction = (type, message, newId) => ({
  type: UI_MESSAGE_ADD,
  payload: {
    type,
    message,
    id: newId,
  },
});

export const removeMessage = (id) => (dispatch) =>
  dispatch(removeMessageType(id));

const removeMessageType = (id) => ({
  type: UI_MESSAGE_REMOVE,
  payload: id,
});

const INITIAL_STATE = {
  messages: [],
};

export const uiMessagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UI_MESSAGE_ADD:
      return {
        messages: [
          ...state.messages,
          {
            type: action.payload.type,
            message: action.payload.message,
            id: action.payload.id,
          },
        ],
      };
    case UI_MESSAGE_REMOVE:
      return {
        messages: [
          ...state.messages.filter((message) => message.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
