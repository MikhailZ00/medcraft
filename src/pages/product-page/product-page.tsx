import * as React from 'react';
import { MainBlock } from 'components/main-block';
import { AboutBlock } from 'components/block-about';
import { BottomButton } from 'components/bottom-button';
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react';
import {
	PRODUCT_LIST_ARRAY_1,
	PRODUCT_LIST_ARRAY_2,
	PRODUCT_LIST_ARRAY_3
} from '../../constants/pages/product-page'

import './product-page.scss';


interface ProductPageProp {
	onPopupOpen: () => void
}

export const ProductPage: React.FC<ProductPageProp>  = (
{ 
	onPopupOpen
}: ProductPageProp):ReactElement => {

	return (
		<div>
			<div className={isMobile ? 'page-wrapper-product-mobile' : 'page-wrapper-product'}>
				<section>
					<MainBlock
						title={"Продукт"}
						descriptionFirstParagraph={""}
						purpleDescriptionFirstParagraph={"SmartMoney инвестиции"}
						descriptionSecondParagraph={"Медкрафт Фонд помогает стартапам проводить "
							+ "полноценное исследование рынка, спроса, целевой аудитории, бизнес "
							+ "модели, конкурентов и ценности продукта для конечного потребителя. "
							+ "А также обеспечивает процесс построения и пивота гипотез, "
							+ "product-менеджмента и разработки конечного продукта для рынка."}
						purpleDescriptionSecondParagraph={""}
						buttonText={"Оставить заявку"}
						image={isMobile ? "/images/Productmob.png" : "/images/Product.png"}
						imageWidth={'519px'}
						imageHeight={'530px'}
						imageWidthMob={'262px'}
						imageHeightMob={'268px'}
						descriptionMobile={"Медкрафт Фонд помогает стартапам проводить полноценное "
							+ "исследование рынка, спроса, целевой аудитории, бизнес модели, "
							+ "конкурентов и ценности продукта для конечного потребителя."}
						linkCoffee={"Обсудить проект с инвестором"}
						popupFunction={onPopupOpen}
					/>
				</section>

				<section id={'PrP-section-1'}>
					<div className={'PrP-blok-about-margin'}>
						<AboutBlock 
							title={'Исследования'}
							image={isMobile ? "/images/Researchmob.png" : "/images/Research.png"}
							imageWidth={'521px'}
							imageHeight={'541px'}
							imageWidthMob={'267px'}
							imageHeightMob={'277px'}
							ListArr={PRODUCT_LIST_ARRAY_1}
							orientation={'right'}
						/>
					</div>
				</section>

				<section id={'PrP-section-2'}>
					<div className={'PrP-blok-about-margin'}>
						<AboutBlock 
							title={'Продакт менеджмент'}
							image={isMobile ? "/images/Menegmentmob.png" : "/images/Menegment.png"}
							imageWidth={'568px'}
							imageHeight={'577px'}
							imageWidthMob={'273px'}
							imageHeightMob={'279px'}
							ListArr={PRODUCT_LIST_ARRAY_2}
							orientation={'left'}
						/>
					</div>
				</section>

				<section id={'PrP-section-3'}>
					<div className={'PrP-blok-about-margin'}>
						<AboutBlock 
							title={'Разработка'}
							image={isMobile ? "/images/Developingmob.png" : "/images/Developing.png"}
							imageWidth={'485px'}
							imageHeight={'530px'}
							imageWidthMob={'277px'}
							imageHeightMob={'302px'}
							ListArr={PRODUCT_LIST_ARRAY_3}
							orientation={'right'}
						/>
					</div>
				</section>

			</div>
			<BottomButton popupFunction={onPopupOpen}/>
		</div>
	)
}
