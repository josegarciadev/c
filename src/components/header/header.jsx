import React from 'react';

export const Header = () => {
	return <header className="d-flex flex-wrap justify-content-between py-1 mb-4 ">
			<div className="me-5">
				<span className="title fst-italic fs-2">CoachCaden</span>
	  		</div>
			<ul className="nav nav-pills">
				<li className="nav-item links"><a href="#" className="nav-link fs-5 me-4 link-login" >Log in</a></li>
				<li className="nav-item btn-getstarted "><a href="#" className="nav-link fs-5" style={{color: "#00BBF9"}}>Get Started</a></li>
			</ul>
</header>;
};
