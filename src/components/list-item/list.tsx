import * as React from 'react';
import {useState, useCallback, ReactElement} from 'react';
import { isMobile } from 'react-device-detect';
import Аrrowdown from './icons/arrow-down.svg'
import Аrrowright from './icons/arrow-right.svg'

import './list.scss';


interface ListProp {
    title: string,
    description?: string,
    isChemicalElement?: boolean,
    FirstElementsArray?: React.ReactElement[],
}

export const ListItem: React.FC<ListProp> = (
{ 
    title, 
    description = '',
    isChemicalElement = false,
    FirstElementsArray = [],
}: ListProp):ReactElement => {
    const [expanded, setExpanded] = useState(false);

    const changeExpanded = useCallback(
        () => setExpanded(!expanded), [expanded]
    );

    return (
        !expanded ?
        <div>
            <button className={isMobile? 'mobile-closed' : 'closed'} onClick={changeExpanded}>
                <div className="icon-closed">
                    <Аrrowright />
                </div>
                {title}</button>
        </div>
        :
        <div className={isMobile? 'mobile-opened' : 'opened'}>
            <button onClick={changeExpanded} className={isMobile ? 'opened-title-mob' : 'opened-title'} >
                <div className="icon-closed">
                    <Аrrowdown />
                </div>
                {title}</button>
            {isChemicalElement ?
            <div className={isMobile ? 'allListChemicalElementsMob' : 'allListChemicalElements'}>
                <div className={isMobile ? 'listChemicalElementMob' : 'listChemicalElement'}>
                    {FirstElementsArray.map((elem, index) => 
                        <div key={index} style={{display:'flex', flexWrap: 'wrap'}}>{elem}</div>    
                    )}
                </div>
            </div>
            :
            <p className="text-opened">{description}</p>}
        </div>
    );
}
