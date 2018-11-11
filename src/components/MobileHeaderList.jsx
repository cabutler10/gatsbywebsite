import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const styles = theme => ({
  list: {
    width: 200
  },
  text: {
    textTransform: "uppercase",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
  },
  link: {
    color: theme.status.greyDk
  },
  icon: {
    color: theme.status.grey,
    marginRight: 15
  },
  button: {
    width: "100%",
    padding: 0
  },
  iconSocial: {
    width: 18,
    height: 18,
    fill: theme.status.black
  }
});

const MobileHeaderList = props => {
  const { links, linkLabels, classes } = props;

  return (
    <div className={classes.list}>
      <List component="nav">
        <Link to="/" className={classes.link}>
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary="home"
            />
            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Link>
        {links.map((link, idx) => (
          <Link
            to={`/${link}/`}
            key={`mobileLink_${link}`}
            className={classes.link}
          >
            <ListItem button divider dense>
              <ListItemText
                disableTypography
                className={classes.text}
                primary={linkLabels[idx]}
              />
              <ArrowIcon className={classes.icon} />
            </ListItem>
          </Link>
        ))}
        <Button
          aria-label="linkedin"
          className={classes.button}
          href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
          target="_blank"
          rel="noopener"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<LinkedinIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
        <Button
          aria-label="github"
          className={classes.button}
          href="https://github.com/cabutler10"
          target="_blank"
          rel="noopener"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<GithubIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
        <Button
          aria-label="instagram"
          className={classes.button}
          href="https://www.instagram.com/cabutler10/"
          target="_blank"
          rel="noopener"
          disableFocusRipple
          disableRipple
        >
          <ListItem button divider dense>
            <ListItemText
              disableTypography
              className={classes.text}
              primary={<InstagramIcon className={classes.iconSocial} />}
            />

            <ArrowIcon className={classes.icon} />
          </ListItem>
        </Button>
      </List>
    </div>
  );
};

MobileHeaderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MobileHeaderList);
