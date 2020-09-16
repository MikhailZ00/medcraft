import * as React from 'react'
import {
    ReactElement
} from 'react'

import './block-of-elements-cases.scss'
import { isMobile } from 'react-device-detect'


interface BlockOfElementsCasesProps {
    title: string,
    elementsArray?: React.ReactElement[],
}

export const BlockOfElementsCases: React.FC<BlockOfElementsCasesProps> = ({
    title,
    elementsArray = [<></>],
}: BlockOfElementsCasesProps):ReactElement => {
    
    return (
        <div className={isMobile ? 'block-of-elements-cases-mob' : 'block-of-elements-cases'}>
            <div className={'block-of-elements-cases__title'}>{title}</div>
            <div className={'block-of-elements-cases__elements'}>
                {elementsArray.map( (elements, index) => (
                    elements
                ))}
            </div>
        </div>
    );

}