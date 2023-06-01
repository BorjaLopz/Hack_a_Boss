import { Message } from "./Message"

export const MessageList = () => {
  return (
    <>
      <ul>
        <li>
          <Message />
        </li>{" "}
        <li>
          <Message />
        </li>{" "}
        <li>
          <Message />
        </li>
      </ul>
    </>
  );
}