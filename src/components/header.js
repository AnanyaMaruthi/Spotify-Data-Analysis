import React, { useContext, useEffect, useRef, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import ScrollContext from "../context/ScrollContext";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#00000000",
    position: "fixed",
    width: "100%",
    zIndex: 20,
  },
  show: {
    transition: "transform .5s",
  },
  hide: {
    transform: "translateY(-100%)",
    transition: "transform .5s",
  },
  transparent: {
    background: "transparent",
  },
  link: {
    color: "#AAF5D6",
    fontSize: theme.spacing(2),
    fontWeight: 400,
    margin: theme.spacing(0, 1.5),
    padding: theme.spacing(0, 0.5),
    "&:hover": {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
      paddingBottom: theme.spacing(0.25),
      textDecoration: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  let lastScroll = useRef(0);
  let timeout = useRef(null);
  let previousDirection = useRef("up");
  const [show, setShow] = useState(true);
  const [transparent, setTransparent] = useState(true);

  //   const { scrollY } = useContext(ScrollContext);

  //   useEffect(() => {
  // const direction = scrollY < lastScroll.current ? "up" : "down";

  // if (scrollY === lastScroll.current) {
  //   return;
  // }

  // lastScroll.current = scrollY;
  // previousDirection.current = direction;

  // window.clearTimeout(timeout.current);
  // timeout.current = null;
  //     if (direction === "down") {
  //       setShow(false);
  //     } else {
  //       if (scrollY === 0) {
  //         setTransparent(true);
  //       } else {
  //         timeout.current = window.setTimeout(() => {
  //           setShow(false);
  //         }, 2500);
  //         setTransparent(false);
  //       }
  //       setShow(true);
  //     }
  //   }, [scrollY, show, transparent]);

  //   const search = typeof window !== "undefined" ? window.location.search : "";

  return (
    <header
      className={clsx(
        classes.header
        // show ? classes.show : classes.hide,
        // transparent ? classes.transparent : ""
      )}
    >
      <Toolbar className={classes.navigation}>
        <span style={{ marginLeft: 0, marginRight: "auto", padding: "8px 0" }}>
          {/* <LogoImage /> */}
          {"Logo"}
        </span>

        <div className={classes.link}>EDA</div>
        <div className={classes.link}>CRUD</div>
        {/* <Link className={classes.link} to={`${search}#services`}>
          Services
        </Link>
        <Link className={classes.link} to={`${search}#contact`}>
          Contact
        </Link> */}
      </Toolbar>
    </header>
  );
};

export default Header;
