import * as React from 'react';
import { ReactElement } from 'react';
import './link-button.scss';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom'

interface LinkButtonProp {
    title: string,
    colorStyle: {
        background: string,
        shadow: string,
        fontColor: string
    }
    linkTo: string,
    logo?: ReactElement
}

export const LinkButton: React.FC<LinkButtonProp>  = (
{ 
    title,
    colorStyle,
    linkTo,
    logo
}: LinkButtonProp):ReactElement => {

return (
    <div className={isMobile ? 'mobile-link-button' : 'link-button'}>
        <div className={'color-style'} style={{background: colorStyle.background, boxShadow: colorStyle.shadow}}>
            <Link className={isMobile ? 'mobile-link-button' : 'link-button'}  to={linkTo}>
                <div style={{color: colorStyle.fontColor, display: 'flex'}}>
                    {logo}
                    <div className='margin-title-icon'>{title}</div>
                </div>
            </Link>
        </div>
    </div>
);
}
