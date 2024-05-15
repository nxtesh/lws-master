import Heading from "../common/heading/Heading";
import "./chat.css";
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  console.log(props.user)
  return (
    <div className="chat-background">
    <PrettyChatWindow
      projectId={"450eb4b4-3d1f-4b7e-926e-b9d1976269ee"}
      username={props.user}
      secret={props.user}
      // style={{innerHeight:"100vh"}}
    />
  </div>
    );
};
export default ChatsPage;
