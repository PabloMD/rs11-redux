import Message from "./Message";

function MessagesList({ messages }){
    if(messages && messages.length){
    return <div>
        { messages.map((message, i) => (
            <Message key={`message-${message.id}`} id={message.id} message={message.message} type={message.type} />

        ))}
    </div>;
    }

    return null;

};

export default MessagesList;