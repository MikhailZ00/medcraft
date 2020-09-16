import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react'
import Arrow from './icon/arrow.svg'
import classes from 'classnames'

import './block-for-cases.scss';


interface BlockForCasesProps {
    readonly title: string,
    readonly subTitle: string,
    readonly firstIcon?: ReactElement,
    readonly secondIcon?: ReactElement,
    readonly firstAchievementText?: string,
    readonly secondAchievementText?: string,
    readonly underAchievementText?: string,
    readonly aboveListTitle?: string,
    readonly listsArray: ReactElement[],
    readonly isRevers?: boolean,
    readonly firstIconMobile?: ReactElement,
    readonly secondIconMobile?: ReactElement,
    readonly imageSizeWH: [number, number],
    readonly imageSizeMobileWH: [number, number],
    readonly imagePath: string,
    readonly linkPath: string,
    readonly isNeedButton?: boolean
}

export const BlockForCases: React.FC<BlockForCasesProps> = (
{
    title,
    subTitle,
    firstIcon = <></>,
    secondIcon = <></>,
    firstIconMobile = <></>,
    secondIconMobile = <></>,
    firstAchievementText = '',
    secondAchievementText = '',
    underAchievementText = '',
    aboveListTitle,
    listsArray,
    isRevers = false,
    imageSizeWH,
    imageSizeMobileWH,
    imagePath,
    linkPath,
    isNeedButton = true
}: BlockForCasesProps):ReactElement => {
    
    return (
        <div className={ 
                classes(
                    isMobile ? 'block-for-cases-mobile' : 'block-for-cases',
                    isRevers ? 'BFC-revers' : 'BFC-row'
                        )}>
            <div className={ isMobile ? 'BFC-column-mobile' : 'BFC-left' }>
                <div className={'BFC-title'}>{title}</div>
                <div className={'BFC-sub-title'}>
                    {isNeedButton ? (
                        <a 
                            href={linkPath} 
                            className={'text'}
                            target='_blank'
                            >
                            {subTitle}
                        </a>
                    )
                    :
                    (
                        <div className={'text'}>
                            {subTitle}
                        </div>
                    )}
                </div>
                <div className={'BFC-advancements-block'}>
                    <div className={'BFC-achievements'}>
                        <div className={'BFC-achievement'}>
                            <div className={'BFC-icon-and-text'}>
                                {isMobile ? firstIconMobile : firstIcon}
                            </div>
                            <div className={'BFC-icon-and-text'}>{firstAchievementText}</div>
                        </div>
                        <div className={'BFC-achievement'}>
                            <div className={'BFC-icon-and-text'}>
                                {isMobile ? secondIconMobile : secondIcon}
                            </div>
                            <div className={'BFC-icon-and-text'}>{secondAchievementText}</div>
                        </div>
                    </div>
                    <div className={'BFC-under-achievement-text'}>
                        {underAchievementText}
                    </div>
                </div>
                {isMobile && 
                    <div className={'BFC-image'}>
                        <img src={imagePath} width={imageSizeMobileWH[0]} height={imageSizeMobileWH[1]} alt=""/>
                    </div>
                }
                <div className={'BFC-above-list-title-group'}>
                    <div className={'BFC-line'} />
                    <div className={'BFC-above-list-title'}>
                        {aboveListTitle}
                    </div>
                </div>
                {listsArray.map((list, index) => <div key={index}>{list}</div>)}
                {isNeedButton && 
                    <a 
                        href={linkPath} 
                        className={'text'}
                        target='_blank'
                        >
                        <button className={'BFC-button'}>
                            <div className={'BFC-button-wrapper'}>
                                <div className={'textMore'}>Подробнее</div>
                                <div className={'BFC-arrow'}>
                                    <Arrow />
                                </div>
                            </div>
                        </button>
                    </a>
                }
            </div>
            {!isMobile && 
                <div className={'BFC-right'}>
                    <img src={imagePath} width={imageSizeWH[0]} height={imageSizeWH[1]}/>
                </div>
            }
        </div>
    );
}
