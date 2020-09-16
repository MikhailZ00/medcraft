import * as React from 'react'
import { 
    ReactElement, 
    useCallback, 
    useState, 
    useRef,
    useContext 
} from 'react'
import { isMobile } from 'react-device-detect'
import classNames from 'classnames'
import {enableScroll, disableScroll} from 'core/scroll';
import { Context } from '../../contexts/mendeleev-table-context'

import './chemical-element.scss'
import { onOuterClickHook } from 'hooks/on-outer-click'

interface ChemicalElementProps {
    readonly color: {
        element: string,
        polygon: string,
        popupShadow: string,
        elementShadow: string
    },
    readonly elementNumber: number,
    readonly elementLetters: string,
    readonly title: string,
    readonly popupText: string,
    readonly isTop?: boolean,
    readonly isOpenPopupByCycle?: boolean,
}

export const ChemicalElement: React.FC<ChemicalElementProps> = (
    {
        color,
        elementNumber,
        elementLetters,
        title,
        popupText,
        isTop = true,
        isOpenPopupByCycle = false,
}: ChemicalElementProps): ReactElement => {

    const popupRef = useRef(null);
    const [isMouseOnElement, setIsMouseOnElement] = useState(false);
    const [isMobilePopupVisible, setisMobilePopupVisible] = useState(false);
    const [isPopupVisible, setisPopupVisible] = useState(false);
    const { endPlayPopupAnimCB, startPlayPopupAnimCB, setAtLeastOnePopupIsOpenCB } = useContext(Context);

    const onEnterElement = useCallback(() => {
        setIsMouseOnElement(true);
        endPlayPopupAnimCB();
    }, []);

    const onLeaveElement = useCallback(() => {
        setIsMouseOnElement(false);
        startPlayPopupAnimCB();
    }, []);

    const onClick = useCallback(() => {
        setisPopupVisible(true);
        endPlayPopupAnimCB();
        setAtLeastOnePopupIsOpenCB(true);
    }, [])

    const onClosePopup = useCallback(() => {
        setisPopupVisible(false);
        setAtLeastOnePopupIsOpenCB(false);
        startPlayPopupAnimCB();
    }, [])

    const onOpenMobilePopup = useCallback(() => {
        setisMobilePopupVisible(true);
        disableScroll();
    }, []);

    const onCloseMobilePopup = useCallback(() => {
        setisMobilePopupVisible(false);
        enableScroll();
    }, []);

    const stopPropogation = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
    }, []);

    onOuterClickHook(popupRef, onClosePopup);

    if (isMobile) {
        return (
            <div className={'chemical-element-wrapper-mobile'}>
                <div
                    className={'element-mobile'}
                    style={{ 
                        background: `${color.element}`,
                        boxShadow: `${color.elementShadow}` 
                    }}
                    onClick={onOpenMobilePopup}
                >
                    <div className={'element-number-mobile'}>
                        {elementNumber}
                    </div>

                    <div className={'element-letters-mobile'}>
                        {elementLetters}
                    </div>
                </div>
                {isMobilePopupVisible &&
                    <div
                        className={'popup-mobile-wrapper-v'}
                        ref={popupRef}
                        onClick={onCloseMobilePopup}
                    >
                        <div className={'popup-mobile-wrapper-h'}>
                            <div
                                className={'popup-mobile'}
                                onClick={stopPropogation}
                                style={{boxShadow: `${color.popupShadow}`}}
                            >
                                <div className={'element-title-mobile'}>{title}</div>
                                <div className={'element-text-mobile'}>{popupText}</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

    return (
        <div
            className={'chemical-element-wrapper'}
            onMouseEnter={onEnterElement}
            onMouseLeave={onLeaveElement}
            onClick={onClick}
        >
            <div className={'element-wrapper'}>
                <div
                    className={'element'}
                    style={{ 
                        background: `${color.element}`,
                        boxShadow: `${color.elementShadow}` 
                    }}
                >
                    <div className={'element-number'}>
                        {elementNumber}
                    </div>

                    <div className={'element-letters'}>
                        {elementLetters}
                    </div>

                    <div ref={popupRef}
                        className={
                            classNames(
                                'polygon',
                                { 
                                    [isTop ? 'active-polygon-top' : 'active-polygon-bottom']: 
                                        isMouseOnElement || 
                                        isPopupVisible ||
                                        isOpenPopupByCycle
                                },
                                isTop ? 'transform-active-polygon-top' : 'transform-active-polygon-bottom'
                            )
                        }
                        style={{ background: `${color.polygon}` }}
                    />
                </div>
            </div>
            <div
                className={
                    classNames(
                        'popup',
                        isTop ? 'popup-top' : 'popup-bottom',
                        { 'active-popup': isMouseOnElement || isPopupVisible || isOpenPopupByCycle }
                    )
                }
                style={{boxShadow: `${color.popupShadow}`}}
            >
                <div className={'element-title'}>{title}</div>
                <div className={'element-text'}>{popupText}</div>
            </div>
        </div>
    );
}
