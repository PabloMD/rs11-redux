import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TYPE_ERROR, TYPE_NOTICE } from "../Message/Message";
import { addMessage } from "../Message/redux";

export default function ContactForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(data),
    };

    fetch(process.env.REACT_APP_CONTACT_FORM_URL, options)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addMessage(TYPE_NOTICE, "Messaage sent"));
        reset();
      })
      .catch((error) => {
        dispatch(addMessage(TYPE_ERROR, "HMM some error"));
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <div>This field is required</div>}
      </div>
      <div>
        <textarea
          placeholder="message"
          {...register("message", { required: true })}
        />
        {errors.message && <div>This field is required</div>}
      </div>
      <input type="submit" />
    </form>
  );
}
