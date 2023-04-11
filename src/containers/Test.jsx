import React from 'react';
//import { LayoutCreateAccount } from '../components/layout/LayoutCreateAccount';

import { LayoutTextArea } from '../components/layout/LayoutTextArea';
//import {  HomeLayout } from '../components/home';

//import { LayoutPublic } from '../components/layout/LayoutPublic';

export const App = () => {
	return (
		<div className='container mt-4'>
			{/*<LayoutPublic>*/}
				{/*<HomeLayout/> */}
				<LayoutTextArea/>
			{/*</LayoutPublic>*/}
		</div>
	);
};
