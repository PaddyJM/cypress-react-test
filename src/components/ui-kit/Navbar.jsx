import React from "react";
import clsx from "clsx";

export default function Navbar(props) {
    const {children, className, ...rest} = props;
    const classes = clsx("ui-navbar", className)
    return <select className={classes} onChange={() => console.log(`Selection from "${className}" has changed`)} {...rest}>{children}</select>
}