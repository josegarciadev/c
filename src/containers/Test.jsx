import React from 'react';
//import { LayoutCreateAccount } from '../components/layout/LayoutCreateAccount';


import { LayoutCheckArea } from '../components/layout/LayoutCheckArea';
//import {  HomeLayout } from '../components/home';

//import { LayoutPublic } from '../components/layout/LayoutPublic';

export const App = () => {
	return (
		<div className='container mt-4'>
			{/*<LayoutPublic>*/}
				{/*<HomeLayout/> */}
				<LayoutCheckArea/>
			{/*</LayoutPublic>*/}
		</div>
	);
};
