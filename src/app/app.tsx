import * as React from "react";
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import { useCallback, useState, useRef } from 'react';
import { Popup } from 'components/popup';
import { isMobile } from 'react-device-detect';

import { Header } from 'components/header';
import { NavBar } from 'components/nav-bar';
import { ScrollToTop } from 'components/scroll-to-top'
import { ProductPage } from 'pages/product-page';
import { MainPage } from 'pages/main-page';
import { PromotionPage } from 'pages/promotion-page';
import { EnvironmentPage } from 'pages/environment-page';
import { CasesPage } from 'pages/cases-page';
import {enableScroll, disableScroll} from 'core/scroll';

import './app.scss';

export const App = (): React.ReactElement => {
	const [isPopupOpen, setPopupOpen] = useState(false);
	const popupRef = useRef(null);
	const handleOnPopupClose = useCallback(() => {
		setPopupOpen(false);
		enableScroll();
	}, [setPopupOpen]);
	const handleOnPopupOpen = useCallback(() => {
		setPopupOpen(true);
		disableScroll(popupRef)
	}, [setPopupOpen]);

	return (
		<div className={'app'}>
			<div onClick={isPopupOpen ? () => { handleOnPopupClose() } : undefined}>
				<Router>
					<NavBar />
					<ScrollToTop />
					<Header onPopupOpen={handleOnPopupOpen} />
					<Route path="/product" render={() => <ProductPage onPopupOpen={handleOnPopupOpen} />} />
					<Route path="/promoute" render={() => <PromotionPage onPopupOpen={handleOnPopupOpen} />} />
					<Route path="/environment" render={() => <EnvironmentPage onPopupOpen={handleOnPopupOpen} />} />
					<Route path="/case" render={() => <CasesPage onPopupOpen={handleOnPopupOpen} />} />
					<Route path="/" exact render={() => <MainPage onPopupOpen={handleOnPopupOpen} />} />
				</Router>
			</div>
			{isPopupOpen &&
				<div className={isMobile ? '' : 'popup-style'}>
					<Popup closePopup={handleOnPopupClose} ref={popupRef} />
				</div>
			}
		</div>
	)
}
