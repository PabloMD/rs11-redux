
export const TYPE_NOTICE = "notice";
export const TYPE_WARNING = "warning";
export const TYPE_ERROR = "error";

function Message(props) {
    const { type, message } = props;

    return (
      <div>
        <span className={`alert alert-${type}`}>{message}</span>
      </div>
    );
};

export default Message;