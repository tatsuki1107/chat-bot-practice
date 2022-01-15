import React from "react";
// component
import { Chat } from './index'
// material-ui
import { makeStyles, createStyles } from "@material-ui/core";
import { List } from "@material-ui/core";

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      height: 400,
      padding: '0',
      overflow: 'auto'
    }
  })
));

const Chats = (props) => {
  const classes = useStyles()

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index} />
      })}
      <Chat chat={props.chats} />
    </List>
  )
}

export default Chats;
