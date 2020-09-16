import * as React from 'react'
import { 
    ReactElement, 
    useEffect, 
    useState,
    useCallback
} from 'react'
import { isMobile } from 'react-device-detect'
import { 
    MENDELEEV_TABLE_CONTENT,
    numberOfObjectFields,
    PERIODIC_TABLE_SCHEME
} from '../../constants/mendeleev-table'
import { Link } from "react-scroll";
import { Context } from '../../contexts/mendeleev-table-context'

import './mendeleev-table.scss'


export const MendeleevTable = (): ReactElement => {

    const [periodicTableScheme, setPeriodicTableScheme] = useState(PERIODIC_TABLE_SCHEME);
    const [popupNumber, setPopupNumber] = useState<number>(0);
    const [triggerLight, setTriggerLight] = useState<string>('');
    const [isPlayAnim, setIsPlayAnim] = useState<boolean>(false);
    const [isAtLeastOnePopupIsOpen, setIsAtLeastOnePopupIsOpen] = useState<boolean>(false);

    const startPlayPopupAnimCB = useCallback(() => {
        
        if(!isAtLeastOnePopupIsOpen) {
            setIsPlayAnim(true);
        }

    }, [isPlayAnim]);
    const endPlayPopupAnimCB = useCallback(() => {
        
        setIsPlayAnim(false);

        let bufferTable = {...periodicTableScheme};

        if(popupNumber - 1 >= 0) {
            bufferTable[popupNumber - 1] = false;
        }

        setPopupNumber(0);
        setPeriodicTableScheme(bufferTable);

    }, [isPlayAnim]);
    
    const setAtLeastOnePopupIsOpenCB = useCallback((value: boolean) => {
        setIsAtLeastOnePopupIsOpen(value);
    }, [isAtLeastOnePopupIsOpen]);

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {

            let bufferTable = {...periodicTableScheme};

            if(isPlayAnim && !isAtLeastOnePopupIsOpen) {

                bufferTable[popupNumber] = !bufferTable[popupNumber];

                if(popupNumber === 0) {
                    bufferTable[numberOfObjectFields] = !bufferTable[numberOfObjectFields];
                }
                else {
                    bufferTable[popupNumber - 1] = !bufferTable[popupNumber - 1];
                }

                setPopupNumber((popupNumber + 1) % (numberOfObjectFields + 1));

            }
            else {
                bufferTable[popupNumber - 1] = false;
                setPopupNumber(0);
            }

            setPeriodicTableScheme(bufferTable);

        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [periodicTableScheme, isPlayAnim]);

    useEffect(() => {
        setTimeout(() => {
            triggerLight ? setTriggerLight('') : setTriggerLight(' triggerLight');
        }, 3750)
    }, [triggerLight]);

    return (
        <Context.Provider value={{
            endPlayPopupAnimCB,
            startPlayPopupAnimCB,
            setAtLeastOnePopupIsOpenCB
        }}>
            {isMobile ?
                (
                    <div className={'mendeleev-table-mobile'}>
                        <div className={'MT-title-mobile'}>Создание стартапов <br /> в SmartMoney</div>
                        {MENDELEEV_TABLE_CONTENT.buttons[0]}
                        <div className={'MT-table-line-mobile'}>
                            {MENDELEEV_TABLE_CONTENT.leftPartOfTable.map(element =>
                                element(periodicTableScheme)
                            )}
                        </div>
                        {MENDELEEV_TABLE_CONTENT.buttons[1]}
                        <div className={'MT-table-line-mobile'}>
                            {MENDELEEV_TABLE_CONTENT.centerPartOfTable.map(element =>
                                element(periodicTableScheme)
                            )}
                        </div>
                        {MENDELEEV_TABLE_CONTENT.buttons[2]}
                        <div className={'MT-table-line-mobile'}>
                            {MENDELEEV_TABLE_CONTENT.rightPartOfTable.map(element =>
                                element(periodicTableScheme)
                            )}
                        </div>
                    </div>
                )
                :
                (
                    <div className={'mendeleev-table'}>
                        <div className={'MT-title'}>Создание стартапов <br /> в SmartMoney</div>
                        <div className={'MT-table-and-buttons' + triggerLight}>
                            <div className={'MT-buttons'}>
                                {MENDELEEV_TABLE_CONTENT.buttons.map((buttons, index) => (
                                    <div key={index} className={'MT-button'}>{buttons}</div>
                                ))}
                            </div>
                            <div 
                                className={'MT-table'}
                                onMouseLeave={startPlayPopupAnimCB} >
                                <div>
                                    {MENDELEEV_TABLE_CONTENT.leftPartOfTable.map((str, index) => (
                                        <div key={index} className={'MT-table-line'}>{str(periodicTableScheme)}</div>
                                    ))}
                                </div>
                                <div>
                                    {MENDELEEV_TABLE_CONTENT.centerPartOfTable.map((str, index) => (
                                        <div key={index} className={'MT-table-line'}>{str(periodicTableScheme)}</div>
                                    ))}
                                </div>
                                <div>
                                    {MENDELEEV_TABLE_CONTENT.rightPartOfTable.map((str, index) => (
                                        <div key={index} className={'MT-table-line'}>{str(periodicTableScheme)}</div>
                                    ))}
                                </div>
                            </div>
                            <Link 
                                activeClass={'NB-active'}
                                to={'MP-section-1'}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                isDynamic={true}
                                onSetActive={startPlayPopupAnimCB}
                                onSetInactive={endPlayPopupAnimCB} />
                        </div>
                    </div>
                )}
        </Context.Provider>
    );

}
