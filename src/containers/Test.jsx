import React from 'react';
import { LayoutOptions } from '../components/layout/LayoutOptions';
//import { LayoutOptions } from '../components/layout/Layout-options';
//import {  HomeLayout } from '../components/home';

//import { LayoutPublic } from '../components/layout/LayoutPublic';

export const App = () => {
	return (
		<div className='container mt-4'>
			{/*<LayoutPublic>*/}
				{/*<HomeLayout/> */}
				<LayoutOptions/>
			{/*</LayoutPublic>*/}
		</div>
	);
};
