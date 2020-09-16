import * as React from 'react';
import { MainBlock } from 'components/main-block';
import { BottomButton } from 'components/bottom-button';
import { isMobile } from 'react-device-detect';
import {ReactElement} from 'react';
import { CASES_PAGE } from '../../constants/pages/cases-page'

import './cases-page.scss';


interface CasesPageProp {
	onPopupOpen: () => void
}

export const CasesPage: React.FC<CasesPageProp>  = (
{ 
	onPopupOpen
}: CasesPageProp):ReactElement => {

return(
	<div>
		<div className={ isMobile ? 'cases-page-wrapper-mobile' : 'cases-page-wrapper' }>
			<div className={'CP-column'}>
				<section>
					<MainBlock 
						title={CASES_PAGE.MBtitle}
						descriptionFirstParagraph={CASES_PAGE.MBdescriptionFirstParagraph}
						descriptionSecondParagraph={CASES_PAGE.MBdescriptionSecondParagraph}
						buttonText={CASES_PAGE.MBbuttonText}
						descriptionMobile={CASES_PAGE.MBdescriptionMobile}
						linkCoffee={CASES_PAGE.MBlinkCoffee}
						extraTitle={CASES_PAGE.MBextraTitle}
						image={CASES_PAGE.MBimage}
						imageHeight={CASES_PAGE.MBimageHeight}
						imageWidth={CASES_PAGE.MBimageWidth}
						imageHeightMob={CASES_PAGE.MBimageHeightMob}
						imageWidthMob={CASES_PAGE.MBimageWidthMob}
						popupFunction={onPopupOpen}
					/>
				</section>
				{CASES_PAGE.blockForCasesArray.map((block, index) => (
					<section
					className={index === 0 ? 'CP-block-for-cases-wrapper-up' : 'CP-block-for-cases-wrapper-low'}
					key={index}
					id={'CP-section-' + String(index + 1)}
					>{block}</section>
				))}
			</div>
		</div>
		<BottomButton popupFunction={onPopupOpen}/>
	</div>

)
}
