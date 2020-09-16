import * as React from 'react';
import { MainBlock } from 'components/main-block';
import { AboutBlock } from 'components/block-about';
import { BottomButton } from 'components/bottom-button';
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react';
import { ENVIRONMENT_PAGE_CONTENT } from '../../constants/pages/environment-page'

import './environment-page.scss';


interface EnvironmentPageProp {
	onPopupOpen: () => void
}

export const EnvironmentPage: React.FC<EnvironmentPageProp> = (
	{
		onPopupOpen
	}: EnvironmentPageProp): ReactElement => {
	return (
		<div>
			<div className={isMobile ? 'page-wrapper-enviroment-mobile' : 'page-wrapper-enviroment'}>
				<section>
					<MainBlock
						title={"Среда"}
						descriptionFirstParagraph={""}
						purpleDescriptionFirstParagraph={"SmartMoney инвестиции"}
						descriptionSecondParagraph={"Медкрафт Фонд помогает стартапам избавиться от всех вопросов, "
							+ "замедляющих развитие бизнеса: бухгалтерия, юридическое сопровождение, HR и IT "
							+ "инфраструктура. А также даёт доступ к профессиональному доброжелательному коллективу, "
							+ "уникальному нетворкингу и связям, отраслевой экспертизе и консалтингу, к глобальным "
							+ "партнёрам и консультантам и менторам."}
						purpleDescriptionSecondParagraph={""}
						buttonText={"Оставить заявку"}
						image={isMobile ? "/images/environmentmob.png" : "/images/environment.png"}
						imageWidth={'541px'}
						imageHeight={'490px'}
						imageWidthMob={'311px'}
						imageHeightMob={'284px'}
						descriptionMobile={"Медкрафт Фонд помогает стартапам избавиться от всех вопросов, замедляющих "
							+ "развитие бизнеса: бухгалтерия, юридическое сопровождение, HR и IT инфраструктура."}
						linkCoffee={"Обсудить проект с инвестором"}
						popupFunction={onPopupOpen}
					/>
				</section>

				{ENVIRONMENT_PAGE_CONTENT.listArray.map((list, index) => (
					<section id={'EP-section-' + String(index + 1)} key={index}>
						<div className={'EP-blok-about-margin'}>
							<AboutBlock
								title={list.title}
								image={isMobile ? list.imageMobile : list.image}
								imageWidth={list.imageWidth}
								imageHeight={list.imageHeight}
								imageWidthMob={list.imageWidthMob}
								imageHeightMob={list.imageWidthMob}
								ListArr={list.listContent}
								orientation={list.orientation}
							/>
						</div>
					</section>
				))}
			</div>
			<BottomButton popupFunction={onPopupOpen} />
		</div>
	)
}
