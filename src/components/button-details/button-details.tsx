import * as React from 'react'
import { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'
import { useLocation } from 'react-router-dom'
import { Link } from "react-scroll";
import { BUTTONDETAILS } from '../../constants/button-details';
import Arrow from './icons/Arrow.svg';
import './button-details.scss'

export const ButtonDetails = (): ReactElement => {

    const location = useLocation();
    let constantsId = [];
    switch (location.pathname) {
        case '/':
            constantsId = BUTTONDETAILS.main;
            break;
        case '/product/':
        case '/product':
            constantsId = BUTTONDETAILS.product;
            break;
        case '/promoute':
        case '/promoute/':
            constantsId = BUTTONDETAILS.promoute;
            break;
        case '/environment/':
        case '/environment':
            constantsId = BUTTONDETAILS.environment;
            break;
        case '/case':
        case '/case/':
            constantsId = BUTTONDETAILS.cases;
            break;
        default:
            break;
    }

    return (
        <>
            {!isMobile &&
                (
                    <>
                        <nav className="but-det">
                            <Link
                                activeClass={'BD-active'}
                                to={constantsId[0].pageName + '-section-' + '1'}
                                spy={true}
                                smooth={true}
                                offset={constantsId[0].offset}
                                duration={500}
                                isDynamic={true}
                            >
                                <div className='component-button-details'>
                                    <div className='component-button-details-arrow'>
                                        <Arrow />
                                    </div>
                                    <div className='component-button-details-text'>Подробнее</div>
                                </div>
                            </Link>
                        </nav>
                    </>
                )
            }
        </>
    );

}
