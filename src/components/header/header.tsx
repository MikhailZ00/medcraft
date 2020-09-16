import * as React from 'react';
import { useState, useCallback, ReactElement } from 'react'
import { isMobile } from 'react-device-detect'
import { Link, useLocation } from 'react-router-dom'
import CommentsSvg from './icons/comment.svg'
import Logo from './icons/logo.svg'
import LogoMobile from './icons/logo-mobile.svg'
import { LINKS } from '../../constants/header'
import classNames from 'classnames'
import {enableScroll, disableScroll} from 'core/scroll';

import './header.scss';


interface HeaderProp {
    onPopupOpen: () => void
}

export const Header: React.FC<HeaderProp> = (
    {
        onPopupOpen
    }: HeaderProp): ReactElement => {

    const location = useLocation();
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const onChange = useCallback(() => {
        setIsOpenMobileMenu(!isOpenMobileMenu);
        isOpenMobileMenu ? enableScroll() : disableScroll();
    }, [isOpenMobileMenu]);

    const classesMobileBurger = [
        classNames(
            'burgerMobile',
            { 'mobileMenuActive': isOpenMobileMenu }
        ),
        classNames(
            'upBurgerLine',
            'mainBurgerLines',
            { 'mobileMenuActive': isOpenMobileMenu }
        ),
        classNames(
            'midleBurgerLine',
            'mainBurgerLines',
            { 'mobileMenuActive': isOpenMobileMenu }
        ),
        classNames(
            'bottonBurgerLine',
            'mainBurgerLines',
            { 'mobileMenuActive': isOpenMobileMenu }
        )
    ];

    const classesLine = ['linePart', 'linePart', 'linePart'];

    switch (location.pathname) {
        case '/':
            classesLine[0] += ' homeFirst';
            classesLine[1] += ' homeSecond';
            classesLine[2] += ' homeThird';
            break;
        case '/product':
        case '/product/':
            classesLine[0] += ' productFirst';
            classesLine[1] += ' productSecond';
            classesLine[2] += ' productThird';
            break;
        case '/promoute':
        case '/promoute/':
            classesLine[0] += ' promouteFirst';
            classesLine[1] += ' promouteSecond';
            classesLine[2] += ' promouteThird';
            break;
        case '/environment':
        case '/environment/':
            classesLine[0] += ' environmentFirst';
            classesLine[1] += ' environmentSecond';
            classesLine[2] += ' environmentThird';
            break;
        case '/case':
        case '/case/':
            classesLine[0] += ' casesFirst';
            classesLine[1] += ' casesSecond';
            classesLine[2] += ' casesThird';
            break;
        default:
            break;
    }

    return (
        <>
            {isMobile ?
                (
                    <>
                        <div className={
                            classNames(
                                'headerMobile',
                                { 'menuMobileActiveHeader': isOpenMobileMenu }
                            )
                        }>
                            <div
                                className={'logoMobile'}
                                onClick={
                                    () => {
                                        if (isOpenMobileMenu)
                                            onChange();
                                    }
                                }
                            >
                                <Link to={'/'}>
                                    <LogoMobile />
                                </Link>
                            </div>

                            <div className={classesMobileBurger[0]} onClick={onChange}>
                                <div className={classesMobileBurger[1]}></div>
                                <div className={classesMobileBurger[2]}></div>
                                <div className={classesMobileBurger[3]}></div>
                            </div>
                        </div>
                        <div className={
                            classNames(
                                'menuMobile',
                                { 'menuMobileActive': isOpenMobileMenu }
                            )
                        }>
                            <div className={'mobileMenuLinks'}>
                                {LINKS.map((headerLink) => (
                                    <Link
                                        to={headerLink.href}
                                        key={headerLink.href}
                                    >
                                        <div className={'mobileMenuLink'}
                                            onClick={onChange}
                                        >
                                            <div className={'mobileLinkWrapper'}>
                                                <div className={'iconWrapper'}>{headerLink.icon}</div>
                                                <div>{headerLink.text}</div>
                                            </div>
                                        </div>
                                        <div className={'menuLine'}></div>
                                    </Link>
                                ))}
                            </div>
                            <div onClick={onPopupOpen} className={'investorLink'}>
                                <div className={'investorLinkText'}>Обсудить проект с инвестором</div>
                            </div>

                        </div>
                        <div className={classNames(isOpenMobileMenu ? 'fixed-page' : '')}></div>
                    </>
                )
                :
                (
                    <>
                        <div className={'header'}>
                            <div className={'logo'}>
                                <Link to={'/'} className={'link'}>
                                    <Logo />
                                </Link>
                            </div>
                            <div className={'menu'}>
                                <div className={"links"}>
                                    {LINKS.map((headerLink, index) => {
                                        return (
                                            <Link
                                                to={headerLink.href}
                                                className={'link'}
                                                key={headerLink.href}
                                            >
                                                <div className={headerLink.href === location.pathname ? 'currentLink' : ''}>
                                                    {index === 0 ? headerLink.text.split(' ')[0] : headerLink.text}
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div className={'line'}>
                                    <div className={classesLine[0]}></div>
                                    <div className={classesLine[1]}></div>
                                    <div className={classesLine[2]}></div>
                                </div>
                            </div>
                            <div onClick={onPopupOpen} className={"linkToInvestor"}>
                                <div className={"comment"}>
                                    <CommentsSvg />
                                </div>
                                <div>
                                    Обсудить проект с инвестором
                                    </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}
