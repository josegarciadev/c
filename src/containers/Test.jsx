import React from 'react';
//import { LayoutCreateAccount } from '../components/layout/LayoutCreateAccount';

import { LayoutLogin } from '../components/layout/LayoutLogin';
//import {  HomeLayout } from '../components/home';

//import { LayoutPublic } from '../components/layout/LayoutPublic';

export const App = () => {
	return (
		<div className='container mt-4'>
			{/*<LayoutPublic>*/}
				{/*<HomeLayout/> */}
				<LayoutLogin/>
			{/*</LayoutPublic>*/}
		</div>
	);
};
