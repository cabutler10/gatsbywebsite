import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

import SplashMobile from "./SplashMobile";

const styles = theme => ({
  root: {
    height: 300,
    position: "relative",
    marginTop: 0,
    zIndex: 1,
    [theme.breakpoints.up("sm")]: {
      height: 300,
      marginTop: -48
    },
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  img: {
    height: 200,
    [theme.breakpoints.up("sm")]: {
      height: 300
    },
    [theme.breakpoints.up("md")]: {
      height: 600
    }
  },
  container: {
    position: "absolute",
    zIndex: 2,
    background: "none",
    padding: 0,
    left: 15,
    bottom: 15,
    [theme.breakpoints.up("md")]: {
      background: "none",
      left: "none",
      right: 200,
      bottom: 60
    }
  },
  bold: {
    fontWeight: 600,
    letterSpacing: 5,
    fontSize: 24,
    paddingBottom: 15,
    paddingTop: 15,
    color: theme.status.greyDk,
    [theme.breakpoints.up("md")]: {
      fontSize: 36
    }
  },
  big: {
    fontSize: 30,
    color: theme.status.greyDk,
    [theme.breakpoints.up("md")]: {
      fontSize: 48
    }
  },
  text: {
    textTransform: "lowercase",
    fontSize: 12,
    letterSpacing: 3,
    color: theme.status.greyDk,
    [theme.breakpoints.up("md")]: {
      fontSize: 20
    }
  },
  mobileText: {
    position: "absolute",
    left: 0,
    zIndex: 1000,
    top: "37%",
    fontSize: 72,
    color: theme.palette.secondary.main,
    fontFamily: "'Homemade Apple'"
  },
  button: {
    marginTop: 15,
    marginRight: 30,
    minWidth: 36,
    padding: 8
  },
  icon: {
    width: 24,
    height: 24,
    fill: theme.status.black
  },
  divider: {
    marginTop: 15
  }
});

class Splash extends Component {
  render() {
    let { img, classes } = this.props;

    return (
      <div className={classes.root}>
        <Img fluid={img.node.fluid} alt="" className={classes.img} />
        <Hidden smUp>
          <SplashMobile />
        </Hidden>
        <Hidden xsDown>
          <div className={classes.container}>
            <Typography variant="subheading" className={classes.text}>
              Hello, I am
            </Typography>
            <Typography variant="display2" className={classes.bold}>
              <span className={classes.big}>A</span>
              LYSSA <span className={classes.big}>B</span>
              UTLER
            </Typography>
            <Typography variant="subheading" className={classes.text}>
              DATA SCIENTIST & FRONTEND DEVELOPER
            </Typography>
            <Divider className={classes.divider} />
            <Button
              aria-label="linkedin"
              className={classes.button}
              href="https://www.linkedin.com/in/alyssa-butler-b77054ab/"
              target="_blank"
              rel="noopener"
              disableFocusRipple
              disableRipple
            >
              <LinkedinIcon className={classes.icon} />
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
              <GithubIcon className={classes.icon} />
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
              <InstagramIcon className={classes.icon} />
            </Button>
          </div>
        </Hidden>
      </div>
    );
  }
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Splash);
