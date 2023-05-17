import { createBrowserRouter } from "react-router-dom";

//Routes
import ErrorPage from './ErrorPage';
import IndexPage from './pages/IndexPage'
import ListAllOpenCriminalCase from "./pages/ListAllOpenCriminalCase";
import RegisterOpenCriminalCase from "./pages/RegisterOpenCriminalCasePage";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <IndexPage />,
		errorElement: <ErrorPage />
	},
	{
		path: "/crimes",
		children: [{
			index: true,
			element: <ListAllOpenCriminalCase />
		},
		{
			path: "register",
			element: <RegisterOpenCriminalCase />
		},
		]
	}
])

export default Router;