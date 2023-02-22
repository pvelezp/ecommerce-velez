import { lazy } from "react";

const Home = lazy(() => import("./home"));
const Detail = lazy(() => import("./detail"));

export {
    Home,
    Detail,
}