import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        loader: ()=> fetch('https://my-portfolio-server-jade.vercel.app/projects')
    }
])

export default router;