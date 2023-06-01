import { Avatar } from "./Avatar";
import { UserName } from "./UserName";

export const Message = () => {
  return (
    <>
      <Avatar />
      <UserName />
      <p>Message</p>

      <p className="date">Fecha</p>

      <button>Reply</button>
    </>
  );
};
