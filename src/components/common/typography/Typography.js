import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  scoutibleSubtitle1Root: {
    color: theme.color.Black,
    fontSize: 14,
    lineHeight: "19.6px",
  },
  scoutibleSubtitle2Root: {
    color: theme.color.Black,
    fontSize: 13,
    lineHeight: "18.2px",
  },
  scoutibleBody1Root: {
    color: theme.color.Black,
    fontSize: 12,
    lineHeight: "16.8px",
  },
  scoutibleBody2Root: {
    color: theme.color.Black,
    fontSize: 10,
    lineHeight: "14px",
  },
  scoutibleBody3Root: {
    color: theme.color.Black,
    fontSize: 9,
    lineHeight: "12.6px",
  },
  scoutibleMedium: {
    fontWeight: 400,
  },
  scoutibleBold: {
    fontWeight: 600,
  },
}));

export function Body1({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      className={classNames(
        classes.scoutibleBody1Root,
        medium && classes.scoutibleMedium,
        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function Body2({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      className={classNames(
        classes.scoutibleBody2Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function Body3({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="body3"
      className={classNames(
        classes.scoutibleBody3Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function Subtitle1({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="subtitle1"
      className={classNames(
        classes.scoutibleSubtitle1Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}

export function Subtitle2({
  children,
  medium = false,
  bold = false,
  semibold = false,
  className,
  ...other
}) {
  const classes = useStyles();
  return (
    <Typography
      variant="subtitle2"
      className={classNames(
        classes.scoutibleSubtitle2Root,
        medium && classes.scoutibleMedium,

        bold && classes.scoutibleBold,
        className
      )}
      {...other}
    >
      {children}
    </Typography>
  );
}
