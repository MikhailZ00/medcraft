import * as React from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames'
import {COMPONENTS_START_UP_ARRAY_LEFT} from '../../constants/components-startup'
import {COMPONENTS_START_UP_ARRAY_RIGHT} from '../../constants/components-startup'
import {COMPONENTS_START_UP_ARRAY_MOBILE} from '../../constants/components-startup'
import StartUpMobile from './icons/StartUpMobile.svg'
import { ReactElement } from 'react'

import './startup.scss';

export const StartUpBlock = ():ReactElement => {
    if (!isMobile)
    {
        return (
            <div className='main-box-start-up'>
                {
                    COMPONENTS_START_UP_ARRAY_LEFT.map((comp, index) => (
                        <div key={index} className={comp.mainClassName}>
                            <div className={comp.textBoxClassName}>{comp.text}</div>
                            <div className={comp.imageBoxClassName}>
                                <div className={comp.imageClassName}>
                                    {comp.icon}
                                </div>
                            </div>
                            <div className={comp.lineClassName}>
                                {comp.line}
                            </div>
                            <div className={comp.pointClassName}>
                                <div className={comp.pointPurpleClassName}></div>
                            </div>
                        </div>
                        )
                    )
                }
                <img className='main-image-start-up' src='/images/StartUpLogo.png' alt="image"/>
                {
                    COMPONENTS_START_UP_ARRAY_RIGHT.map((comp, index) => (
                        <div key={index} className={comp.mainClassName}>
                            <div className={comp.pointClassName}>
                                <div className={comp.pointPurpleClassName}></div>
                            </div>
                            <div className={comp.lineClassName}>
                                {comp.line}
                            </div>
                            <div className={comp.imageBoxClassName}>
                                <div className={comp.imageClassName}>
                                    {comp.icon}
                                </div>
                            </div>                                
                            <div className={comp.textBoxClassName}>{comp.text}</div>
                        </div>
                        )
                    )
                }
            </div>   
        );
    }
    {
        return(
            <div className='main-box-mobile-start-up'>
                <div className={classNames('title-box-mobile-start-up', 'component-start-up-mobile')}>
                    <div className='image-title-mobile'>
                        <StartUpMobile/>
                    </div>
                    <div className='title-mobile-start-up'>Наши партнёрства для стартапа</div>
                </div>
                {
                    COMPONENTS_START_UP_ARRAY_MOBILE.map((comp, index) => (
                        <div key={index} className='component-start-up-mobile'>
                            <div className='image-box-mobile-start-up'>
                                <div className='image-start-up'>
                                    {comp.icon}
                                </div>
                            </div>
                            <div className='text-box-mobile-start-up'>{comp.text}</div>
                        </div>
                        )
                    )
                }
            </div>
        );
    }
}
