import React from 'react';
import { Footer } from '../footer';
import { Header } from '../header/header';
import PropTypes from 'prop-types';
export const LayoutPublic = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
LayoutPublic.propTypes = {
	children: PropTypes.any,
};
