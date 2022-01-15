import React from "react";
// material-ui
import { ListItem } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
// img
import Noprofile from '../assets/img/no-profile.png'
import Reactlogo from '../assets/img/react-logo.png';
// styles
import '../assets/styles/style.css';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}>
      {!!props.text &&
        <>
          <ListItemAvatar>
            {isQuestion ? (
              <Avatar alt="icon" src={Reactlogo} />
            ) : (
              <Avatar alt="icon" src={Noprofile} />
            )}
          </ListItemAvatar>
          <div className="p-chat__bubble">{props.text}</div>
        </>
      }
    </ListItem>
  )
}

export default Chat;
