import * as React from 'react';
import Logo from './icons/logo.svg'
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react'
import { ButtonDetails } from 'components/button-details'

import './main-block.scss';


interface MainBlockProp {
    title: string,
    extraTitle?: string,
    descriptionFirstParagraph: string,
    purpleDescriptionFirstParagraph?: string,
    descriptionSecondParagraph: string,
    purpleDescriptionSecondParagraph?: string,
    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageWidthMob?: string,
    imageHeightMob?: string,
    buttonText: string,
    descriptionMobile: string,
    purpleDescriptionMob?: string,
    linkCoffee: string
    popupFunction: () => void
}

export const MainBlock: React.FC<MainBlockProp> = ({
    title,
    extraTitle,
    descriptionFirstParagraph,
    purpleDescriptionFirstParagraph,
    descriptionSecondParagraph,
    purpleDescriptionSecondParagraph,
    image,
    imageWidth,
    imageHeight,
    imageWidthMob,
    imageHeightMob,
    buttonText,
    descriptionMobile,
    purpleDescriptionMob,
    linkCoffee,
    popupFunction
}: MainBlockProp): ReactElement => {
    if (!isMobile) {
        return (
            <div className='mainBox'>
                <div className='textBox'>
                    <div className={'MB-title'} >
                        {title}
                    </div>
                    <div className={'extraTitle'}>
                        {extraTitle}
                    </div>
                    <div className={'descriptionFirstParagraph'}>
                        {descriptionFirstParagraph}
                        <a className="purpleDescription">{purpleDescriptionFirstParagraph}</a>
                    </div>
                    <div className={'descriptionSecondParagraph'}>
                        {descriptionSecondParagraph}
                        <a className="purpleDescription">{purpleDescriptionSecondParagraph}</a>
                    </div>
                    <ButtonDetails />
                    <button onClick={popupFunction} className={'buttonText'}>{buttonText}</button>
                </div>
                <div className={'image'}>
                    <img src={image} alt="image" width={imageWidth} height={imageHeight}/>
                </div> 
                   
            </div>
        );
    }
    {
        return (
        <div>
            <div className='MB-main-mobile-box'>
                <div className={'titleMob'}>
                    {title}
                </div>
                <div className={'descriptionMob'}>
                    {descriptionMobile}
                    <a className={'purpleDescriptionMob'}>
                        {purpleDescriptionMob}
                    </a>
                </div>
                <div className='MB-buttons'>
                    <button onClick={popupFunction} className={'buttonTextMobile'}>{buttonText}</button>
                    <div onClick={popupFunction} className='coffeeBox'>
                        <div className='coffeeLogo'>
                            <Logo />
                        </div>
                        <div className={'linkCoffee'}>
                            {linkCoffee}
                        </div>
                    </div>
                </div>
                <div className={'imageMobile'}>
                    <img src={image} width={imageWidthMob} height={imageHeightMob} alt="image"/>
                </div> 
            </div>
            </div>
        );
    }
}
