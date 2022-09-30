
import Management from "./Management/Management";
import SignIn from "./SignIn/SignIn";

import {Routes, Route } from "react-router-dom";

function IndexPages() {
	const listUrl = [
		{
			component: <Management></Management>,
			path: '/management',
			label: 'management'
		},
		{
			component: <SignIn></SignIn>,
			path: '/signinsignup',
		},
	]
    return ( 
		<Routes>
			{
				listUrl.map((item,index) =>{
					return (<Route key={index} path={item.path} element={item.component}></Route>)
				})
			}
		</Routes>
    );
}

export default IndexPages;