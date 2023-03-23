import React from 'react';
import {  HomeLayout } from '../components/home';
import { LayoutPublic } from '../components/layout/LayoutPublic';

export const Layout = () => {
	return (
		<div className='container mt-4'>
			<LayoutPublic>
				<HomeLayout />
			</LayoutPublic>
		</div>
	);
};
