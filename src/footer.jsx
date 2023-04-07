import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    background:' rgb(240, 195, 231)',
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  listItemText: {
    fontFamily:'cursive',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div id="contact">
    <Paper className={classes.root}>
      <Typography class="heading"variant="h1" className={classes.header}>Contact Us</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone" class="ftext" secondary={<Link href="tel:9894845581">9894845581</Link>} classes={{ primary: classes.listItemText }} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary={<Link href="mailto:neverfitness@gmail.com">neverfitness@gmail.com</Link>} classes={{ primary: classes.listItemText }}/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Address" secondary="SKCET, Coimbatore, INDIA" classes={{ primary: classes.listItemText }}/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </ListItemIcon>
          <ListItemText primary="Instagram" secondary={<Link href="https://www.instagram.com">@never_fitness</Link>} classes={{ primary: classes.listItemText }}/>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </ListItemIcon>
          <ListItemText primary="Twitter" secondary={<Link href="https://twitter.com">@never_fitness</Link>} classes={{ primary: classes.listItemText }}/>
        </ListItem>
      </List>
    </Paper>
    </div>
  );
}
