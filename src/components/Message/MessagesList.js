import Message from "./Message";

function MessagesList({ messages }){
    if(messages && messages.length){
    return <div>
        { messages.map((message, i) => (
            <Message message={message.message} type={message.type} />

        ))}
    </div>;
    }

    return null;

};

export default MessagesList;