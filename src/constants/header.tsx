import * as React from 'react';
import HomeIcon  from '../components/header/icons/home-icon.svg'
import ProductIcon from '../components/header/icons/product-icon.svg'
import PromputeIcon from '../components/header/icons/promoute-icon.svg'
import EnvironmentIcon from '../components/header/icons/environment-icon.svg'
import CasesIcon from '../components/header/icons/cases-icon.svg'


export const LINKS = [
    {
        text: 'Главная страница',
        href: '/',
        icon: <HomeIcon/>
    },
    {
        href: '/product',
        text: 'Продукт',
        icon: <ProductIcon />
    },
    {
        href: '/promoute',
        text: 'Продвижение',
        icon: <PromputeIcon />
    },
    {
        href: '/environment',
        text: 'Среда',
        icon: <EnvironmentIcon />
    },
    {
        href: '/case',
        text: 'Кейсы',
        icon: <CasesIcon />
    },
];
