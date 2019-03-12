import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
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
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 45
  },
  imgContainer: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      paddingBottom: 0
    }
  },
  textContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%"
    }
  },
  img: {
    height: "100%",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%"
    }
  },
  textFirst: {
    paddingBottom: 30,
    lineHeight: 1.7,
    fontWeight: 600
  },
  text: {
    paddingBottom: 30,
    lineHeight: 1.7
  },
  textLast: {
    lineHeight: 1.7
  },
  subtitle1: {
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 3,
    width: "100%"
  }
}));

function Interests({ img }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
        color="primary"
        align="center"
        className={classes.subtitle1}
      >
        Statistics, Web Development, Teaching
      </Typography>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Hidden mdDown>
            <Img fluid={img[0].node.fluid} alt="" className={classes.img} />
          </Hidden>
          <Img fluid={img[1].node.fluid} alt="" className={classes.img} />
        </div>
        <div className={classes.textContainer}>
          <Typography color="primary" className={classes.textFirst}>
            I am a Data Scientist with a strong interest in Web Development. I
            am fascinated with the idea of being able to make data driven
            decision making something everyone can use and understand by
            building online and mobile tools, charts, and tutorials.
          </Typography>
          <Typography color="primary" className={classes.text}>
            I am a strong believer that data analysis shouldn't be hard to do or
            to understand. My blog aims to share what I have learned about data
            analysis, web development, and online charting. With the technology
            available today, it has never been easier to turn data into
            something useful and accessible for everyone.
          </Typography>
          <Typography color="primary" className={classes.textLast}>
            My background is in applied mathematics for biological research. I
            fell into front end web development a few years ago and I quickly
            realized how important embracing this technology could be. What good
            is data analysis if it sits buried in lengthy articles that don't
            get read? What I love about web development is that is provides an
            opportunity for data analysis to be something everyone can use.
          </Typography>
        </div>
      </div>
    </div>
  );
}

Interests.propTypes = {
  classes: PropTypes.object,
  img: PropTypes.array
};

export default Interests;
