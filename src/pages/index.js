import { lazy } from "react";
import Home from "./home";

const Detail = lazy(() => import("./detail"));

export {
    Detail,
    Home
}