import * as React from 'react';
import { ReactElement } from 'react'; 
import { MainBlock } from 'components/main-block';
import { AboutBlock } from 'components/block-about';
import { BottomButton } from 'components/bottom-button';
import { isMobile } from 'react-device-detect';
import {
	PROMOTION_LIST_ARRAY_1,
	PROMOTION_LIST_ARRAY_2,
	PROMOTION_LIST_ARRAY_3
} from '../../constants/pages/promotion-page'

import './promotion-page.scss';


interface PromotionPageProp {
	onPopupOpen: () => void
}

export const PromotionPage: React.FC<PromotionPageProp>  = (
{ 
	onPopupOpen
}: PromotionPageProp):ReactElement => {
	return(
		<div>
			<div className={isMobile ? 'page-wrapper-promotion-mobile' : 'page-wrapper-promotion'}>
				<section>
					<MainBlock
						title={"Продвижение"}
						descriptionFirstParagraph={""}
						purpleDescriptionFirstParagraph={"SmartMoney инвестиции"}
						descriptionSecondParagraph={"Медкрафт Фонд помогает стартапам профессионально упаковывать "
							+ "продукт, проводит мульти- и омни-канальные коммуникации с целевой "
							+ "аудиторией, посредствам комплексного интернет-маркетинга и PR, прямых и экспертных "
							+ "продаж. А также создаёт уникальный запоминающийся стиль продукта, его позиционирование, "
							+ "дифференцирование от конкурентов и Уникальное Торговое Предложение для потребителей."}
						purpleDescriptionSecondParagraph={""}
						buttonText={"Оставить заявку"}
						image={isMobile ? "/images/Promoutemob.png" : "/images/Promoute.png"}
						imageWidth={'502px'}
						imageHeight={'536px'}
						imageWidthMob={'272px'}
						imageHeightMob={'290px'}
						descriptionMobile={"Медкрафт Фонд помогает стартапам профессионально упаковывать продукт под "
							+ "продажу, проводит мульти- и омни-канальные коммуникации с целевой аудиторией, "
							+ "посредствам комплексного интернет-маркетинга и PR, прямых и экспертных продаж."}
						linkCoffee={"Обсудить проект с инвестором"}
						popupFunction={onPopupOpen}
					/>
				</section>

				<section id={'PromP-section-1'}>
					<div className={'PromP-blok-about-margin'}>
					<AboutBlock 
						title={'Упаковка'}
						image={isMobile ? "/images/packagingmob.png" : "/images/packaging.png"}
						imageWidth={'538px'}
						imageHeight={'423px'}
						imageWidthMob={'330px'}
						imageHeightMob={'261px'}
						ListArr={PROMOTION_LIST_ARRAY_1}
						orientation={'right'}
					/>
					</div>
				</section>

				<section id={'PromP-section-2'}>
					<div className={'PromP-blok-about-margin'}>
					<AboutBlock 
						title={'Интернет-маркетинг'}
						image={isMobile ? "/images/internetmarketmob.png" : "/images/internetmarket.png"}
						imageWidth={'582px'}
						imageHeight={'699px'}
						imageWidthMob={'310px'}
						imageHeightMob={'288px'}
						ListArr={PROMOTION_LIST_ARRAY_2}
						orientation={'left'}
					/>
					</div>
				</section>

				<section id={'PromP-section-3'}>
					<div className={'PromP-blok-about-margin'}>
					<AboutBlock 
						title={'Продажи'}
						image={isMobile ? "/images/salesmob.png" : "/images/sales.png"}
						imageWidth={'608px'}
						imageHeight={'605px'}
						imageWidthMob={'269px'}
						imageHeightMob={'321px'}
						ListArr={PROMOTION_LIST_ARRAY_3}
						orientation={'right'}
					/>
					</div>
				</section>

			</div>
			<BottomButton popupFunction={onPopupOpen}/>
		</div>
	)
}
