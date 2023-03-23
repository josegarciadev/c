import React from 'react';
import { Home } from '../components/home';
import { LayoutPublic } from '../components/layout/LayoutPublic';

export const Test = () => {
	return (
		<div>
			<LayoutPublic>
				<Home />
			</LayoutPublic>
		</div>
	);
};
