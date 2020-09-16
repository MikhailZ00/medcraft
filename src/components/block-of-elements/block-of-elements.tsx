import * as React from 'react'
import { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import './block-of-elements.scss'


interface BlockOfElementsProps {
    readonly title: string,
    readonly subTitle: string,
    readonly elementsArray: ReactElement[],
    readonly firstIcon: ReactElement,
    readonly secondIcon: ReactElement,
    readonly firstAchievementText: string,
    readonly secondAchievementText: string,
    readonly underAchievementText: string
}

export const BlockOfElements: React.FC<BlockOfElementsProps> = (
{
    title,
    subTitle,
    elementsArray,
    firstIcon,
    secondIcon,
    firstAchievementText,
    secondAchievementText,
    underAchievementText
}: BlockOfElementsProps):ReactElement => {

    return(
        <>
            {isMobile ? 
            (
                <div className={'block-of-elements-mobile'}>
                    <div className={'BOE-title-mobile'}>
                        <div className={'BOE-title-text-mobile'}>{title}</div>
                        <div className={'BOE-sub-title-text-mobile'}>{subTitle}</div>
                    </div>
                    <div>
                        <div className={'BOE-elements-wrapper-mobile'}>
                            {elementsArray.map((elements, index) => 
                                <div 
                                    className={'BOE-elements-array-mobile'}
                                    key={'BOE-inside-elements' + index}>
                                    {elements}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className={'BOE-achievements-mobile'}>
                            <div className={'BOE-achievement-mobile'}>
                                <div className={'BOE-icon'}>{firstIcon}</div>
                                <div>{firstAchievementText}</div>
                            </div>
                            <div className={'BOE-achievement-mobile'}>
                                <div className={'BOE-icon'}>{secondIcon}</div>
                                <div>{secondAchievementText}</div>
                            </div>
                        </div>
                        <div className={'BOE-under-achievement-text-mobile'}>
                            {underAchievementText}
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className={'block-of-elements'}>
                    <div className={'BOE-left'}>
                        <div className={'BOE-title'}>
                            <div className={'BOE-title-text'}>{title}</div>
                            <div className={'BOE-sub-title-text'}>{subTitle}</div>
                        </div>
                        <div className={'BOE-elements-wrapper'}>
                            {elementsArray.map((elements, index) => 
                                <div 
                                    className={'BOE-elements-array'}
                                    key={'BOE-inside-elements' + index}>
                                    {elements}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={'BOE-right-wrapper'}>
                        <div className={'BOE-right'}>
                            <div className={'BOE-achievements'}>
                                <div className={'BOE-achievement'}>
                                    <div className={'BOE-icon'}>{firstIcon}</div>
                                    <div>{firstAchievementText}</div>
                                </div>
                                <div className={'BOE-achievement'}>
                                    <div className={'BOE-icon'}>{secondIcon}</div>
                                    <div>{secondAchievementText}</div>
                                </div>
                            </div>
                            <div className={'BOE-under-achievement-text'}>
                                {underAchievementText}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}
