import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Notification from "../UIcomponents/Snackbar";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "../images/icons/icons";

const styles = theme => ({
  root: {
    backgroundColor: theme.status.grey,
    width: "100%"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      padding: 45
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 45,
      paddingBottom: 45,
      paddingLeft: 170,
      paddingRight: 170
    }
  },
  copyright: {
    fontSize: 12,
    textTransform: "capitalize",
    paddingTop: 15,
    paddingBottom: 15
  },
  flexItem: {
    flexBasis: "100%",
    paddingTop: 15,
    [theme.breakpoints.up("md")]: {
      flexBasis: "35%",
      paddingTop: 0
    }
  },
  flexItemRight: {
    flexBasis: "45%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "20%"
    }
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up("sm")]: {
      lineHeight: 2
    }
  },
  divider: {
    borderTop: `1px solid ${theme.status.greyDk}`
  },
  textHeading: {
    letterSpacing: 3,
    fontSize: 12,
    textTransform: "uppercase",
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingTop: 0
    }
  },
  textField: {
    margin: 0,
    width: "48%"
  },
  input: {
    fontSize: 12,
    border: "1px solid",
    paddingLeft: 20
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
    paddingLeft: 20
  },
  button: {
    borderColor: theme.status.black,
    borderRadius: 0,
    minWidth: 0,
    padding: 8,
    marginRight: 0,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },
  icon: {
    width: 18,
    height: 18,
    fill: theme.status.black
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 15,
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "83%"
  },
  buttonSend: {
    borderRadius: 0,
    boxShadow: "none",
    marginTop: 15,
    color: theme.status.black,
    opacity: 0.8
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  img: {
    height: 250
  }
});

class Footer extends Component {
  state = {
    emailAddress: "",
    name: "",
    message: "",
    isEmailValid: true,
    isNameValid: true,
    isMessageValid: true,
    isTouched: false,
    isSnackbarOpen: false,
    notification: "success"
  };

  handleChange = name => event => {
    if (this.state.isTouched === false) {
      this.setState({
        isTouched: true
      });
    }
    if (name === "emailAddress") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!pattern.test(event.target.value)) {
        this.setState({
          isEmailValid: false,
          emailAddress: event.target.value
        });
      } else {
        this.setState({
          isEmailValid: true,
          emailAddress: event.target.value
        });
      }
    }
    if (name === "name") {
      if (event.target.value.length > 500) {
        this.setState({
          isNameValid: false
        });
      } else {
        this.setState({
          isNameValid: true,
          name: event.target.value
        });
      }
    }
    if (name === "message") {
      if (event.target.value.length > 5) {
        this.setState({
          isMessageValid: false
        });
      } else {
        this.setState({
          isMessageValid: true,
          message: event.target.value
        });
      }
    }
  };

  handleClick = () => {
    this.setState({ isSnackbarOpen: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ isSnackbarOpen: false });
  };

  handleSubmit = () => {
    if (
      this.state.isEmailValid &&
      this.state.isMessageValid &&
      this.state.isNameValid &&
      this.state.isTouched
    ) {
      fetch("https://cabutler10.dev.with-datafire.io/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: this.state.message,
          emailAddress: this.state.emailAddress,
          name: this.state.name
        })
      })
        .then(response => {
          if (response.status === 200) {
            this.setState({
              isSnackbarOpen: true,
              notification: "success"
            });
          } else {
            this.setState({
              isSnackbarOpen: true,
              notification: "error"
            });
          }
        })
        .catch(err => {
          this.setState({
            isSnackbarOpen: true,
            notification: "error"
          });
        });
    } else {
      this.setState({
        isSnackbarOpen: true,
        notification: "warning"
      });
    }
  };

  render() {
    const { img, classes } = this.props;
    const {
      emailAddress,
      name,
      message,
      isNameValid,
      isEmailValid,
      isMessageValid,
      isSnackbarOpen,
      notification
    } = this.state;
    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Notification
            onClose={this.handleClose}
            variant={notification}
            message={
              notification === "success"
                ? "Your email has been sent successfully"
                : notification === "warning"
                ? "Please check the form has been filled out correctly"
                : "An error has occured."
            }
          />
        </Snackbar>
        <div className={classes.container}>
          <div className={classes.flexItem}>
            <form noValidate autoComplete="off">
              <Typography className={classes.textHeading}>
                send me a message
              </Typography>
              <div className={classes.inputContainer}>
                <TextField
                  id="name"
                  name="name"
                  className={classes.textField}
                  InputProps={{
                    className: isNameValid ? classes.input : classes.inputError,
                    disableUnderline: true
                  }}
                  value={name}
                  placeholder="name"
                  onChange={this.handleChange("name")}
                  margin="normal"
                  required
                />
                <TextField
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  className={classes.textField}
                  InputProps={{
                    className: isEmailValid
                      ? classes.input
                      : classes.inputError,
                    disableUnderline: true
                  }}
                  value={emailAddress}
                  placeholder="email"
                  onChange={this.handleChange("emailAddress")}
                  margin="normal"
                  required
                />
              </div>
              <TextField
                id="message"
                name="message"
                className={classes.textMessage}
                InputProps={{
                  className: isMessageValid
                    ? classes.input
                    : classes.inputError,
                  disableUnderline: true
                }}
                value={message}
                placeholder="your message"
                onChange={this.handleChange("message")}
                margin="normal"
                fullWidth
                multiline
                rows="4"
                required
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonSend}
                fullWidth
                onClick={this.handleSubmit}
              >
                Send
              </Button>
            </form>
          </div>
          <Hidden smDown>
            <div className={classes.flexItem}>
              <Typography className={classes.textHeading}>about me</Typography>
              <Typography className={classes.text}>
                I am a Seattle native that is currently living in Munich,
                Germany. My personal interests include traveling, hiking,
                floating down rivers and pretending to be a photographer.
              </Typography>
              <div className={classes.iconContainer}>
                <Button
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
            </div>
            <div className={classes.flexItemRight}>
              <Img fluid={img.node.fluid} alt="" className={classes.img} />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flexItem}>
              <Typography className={classes.textHeading}>about me</Typography>
              <div className={classes.flex}>
                <div className={classes.flexItemRight}>
                  <Img fluid={img.node.fluid} alt="" className={classes.img} />
                  <Hidden smUp>
                    <div className={classes.iconContainer}>
                      <Button
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
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
                <div className={classes.flexItemRight}>
                  <Typography className={classes.text}>
                    I am a Seattle native that is currently living in Munich,
                    Germany. My personal interests include traveling, hiking,
                    floating down rivers and pretending to be a photographer.
                  </Typography>
                  <Hidden xsDown>
                    <div className={classes.iconContainer}>
                      <Button
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
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
              </div>
            </div>
          </Hidden>
        </div>
        <div className={classes.divider} />
        <Typography
          variant="body1"
          align="center"
          className={classes.copyright}
        >
          &copy; Alyssa Butler | 2018 | imprint
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
