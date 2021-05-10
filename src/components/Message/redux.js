const UI_MESSAGE_ADD = "UI/MESSAGE/ADD";

export const addMessage = (type, messageText) => ({
    type: UI_MESSAGE_ADD,
    payload: {
        type,
        message: messageText
    }
});

const INITIAL_STATE = {
  messages: []
};

export const uiMessagesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UI_MESSAGE_ADD:
            return {
                messages: [...state.messages, { type: action.payload.type, message: action.payload.message }]
            };
        default:
            return state;
    }
};
