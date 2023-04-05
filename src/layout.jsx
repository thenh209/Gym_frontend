import { Avatar } from "@material-ui/core";
import {Outlet,Link}from "react-router-dom";
export default function Layout()
{
    return(
        <>
        <Link to="/Account"><Avatar></Avatar></Link>
        <Outlet />
        </>
    );
}