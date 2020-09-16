import * as React from 'react';
import {ReactElement} from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames'
import Line from './icons/line.svg'

import './block-about.scss';

interface AboutBlockProp {
    title: string,
    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageWidthMob?: string,
    imageHeightMob?: string,
    ListArr: React.ReactElement[],
    orientation: string,
}

export const AboutBlock: React.FC<AboutBlockProp> = (
{
    title,
    image,
    imageWidth,
    imageHeight,
    imageWidthMob,
    imageHeightMob,
    ListArr,
    orientation
}: AboutBlockProp):ReactElement => {
    if (!isMobile){
        return (
            <div className={ classNames(
                {'BA-revers-direction': orientation != 'left'},
                'BA-main-box'
            ) }>
                 
                <div className='image'>
                    <img src={image} alt="image" width={imageWidth} height={imageHeight}/>
                </div>
                <div className='textBox'>
                    <div className='icon-text'>
                        <Line />
                        <div className={'BA-title'} >
                            {title}
                        </div>
                    </div>
                    <div>
                        {ListArr.map((list) => list)}
                    </div>
                </div>
            </div>
            
        );
    }
    {
        return(
            <div className='mainMobileBox'>
                <div className='icon-text'>
                        <Line />
                        <div className='titleMob' >
                            {title}
                        </div>
                </div>
                
                <div className='imageMobile'>
                    <img src={image} width={imageWidthMob} height={imageHeightMob} alt="image"/>
                </div> 
                <div>
                        {ListArr.map((list) => list)}
                </div>
            </div>
        );
    }
}       

