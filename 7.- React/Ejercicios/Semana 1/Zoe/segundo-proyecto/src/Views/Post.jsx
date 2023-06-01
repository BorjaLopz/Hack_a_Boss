import { AddComment } from "../components/AddComment";
import { MessageList } from "../components/MessageList";
import { OptionsMenu } from "../components/OptionsMenu";
import { PostHeader } from "../components/PostHeader";
import { PostImage } from "../components/PostImage";

export const Post = () => {
  return (
    <>
      <PostImage />
      <PostHeader />
      <MessageList />
      <OptionsMenu />
      <p>XXX likes</p>
      <p>date</p>
      <AddComment />
    </>
  );
};
