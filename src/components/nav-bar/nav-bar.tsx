import * as React from 'react'
import { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'
import { useLocation } from 'react-router-dom'
import { NAV_BAR } from '../../constants/nav-bar'
import { Link } from "react-scroll";

import  './nav-bar.scss' 


export const NavBar = ():ReactElement => {

    const location = useLocation();
    let constantsId = [];

    switch (location.pathname) {
        case '/':
            constantsId = NAV_BAR.main;
            break;
        case '/product':
            constantsId = NAV_BAR.product;
            break;
        case '/promoute':
            constantsId = NAV_BAR.promoute;
            break;
        case '/environment':
            constantsId = NAV_BAR.environment;
            break;
        default:
            break;
    }

    return(
        <>
            {!isMobile && 
                (
                    <>
                        <nav className="nav-bar">
                            <ul className={'NB-ul'}>
                                {constantsId.map((linkinPath, index) => (
                                    <li className={'NB-li'} key={index}>
                                        <Link 
                                            activeClass={'NB-active'}
                                            to={linkinPath.pageName + '-section-' + String(index + 1)}
                                            spy={true}
                                            smooth={true}
                                            offset={linkinPath.offset}
                                            duration={500}
                                            isDynamic={true}
                                        >
                                            <div className={'NB-section-number NB-link'}>
                                                <div className={'NB-section-line'} />
                                                <div className={'NB-nubmer'}>{index + 1}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </>
                )
            }
        </>
    );
    
}
