import { Avatar } from "./Avatar"
import { UserName } from "./UserName"

export const PostHeader = () => {
  return (
    <header>
      <Avatar />
      <UserName />

      <a href="/">Follow</a>
      <a href="/">Options</a>
    </header>
  );
}