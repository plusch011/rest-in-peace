import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from "./styles";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {listItems} from "./constants";

export default function SideMenu({open, onClose}) {
  const classes = useStyles();
  const history = useHistory();


  const list = () => (
    <div
      className={clsx(classes.list, classes.fullList)}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {listItems.map(({text, icon, redirect}) => (
          <ListItem button key={text} onClick={() => history.push(redirect)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      {list()}
    </Drawer>
  );
}

SideMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}
