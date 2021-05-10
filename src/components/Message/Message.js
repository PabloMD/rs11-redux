import { useDispatch } from "react-redux";
import { removeMessage } from "./redux";

export const TYPE_NOTICE = "notice";
export const TYPE_WARNING = "warning";
export const TYPE_ERROR = "error";

function Message(props) {
  const dispatch = useDispatch();
  const { type, message, id } = props;

  const handleClose = () => {
    dispatch(removeMessage(id));
  };

  return (
    <div className="alert-wrapper">
      <span className={`alert alert-${type}`}>
        {message}
        <button onClick={handleClose}>X</button>
      </span>
    </div>
  );
}

export default Message;
