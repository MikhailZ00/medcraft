import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react'

import './medcraft-smartmoney.scss';
import './medcraft-smartmoney-aninmations.scss';


export const SmartMoneyBlock = (): ReactElement => {
    if (!isMobile)
    {
        return (
            <div className='mainBoxSmartmoney'>
                <div className='imageBoxSmartmoney'>
                    <img className='imageCircleSmartmoney' src='/images/smartMoneyCircle.png' alt="image"/>    
                </div>
                <div className='imageBoxStartUpSmartMoney'>
                    <img className='imageStartUpSmartmoney' src='/images/smartMoneyStartUp.png' alt="image"/>
                </div>
                <div className='textBoxSmartmoney'>
                    <div className={'titleSmartmoney'}>
                        MedCraft SmartMoney
                    </div>
                    <div className={'descriptionSmartmoney'}>
                        Методология SmartMoney - внешнее финансирование проекта, при
                        <br /> котором стартап получает не только 
                        определённую <span className='orangeTextSmartmoney'>сумму денег</span>, но
                        <br /> и важнейшую для стартапа 
                        <span className='greenTextSmartmoney'> экспертизу</span>, 
                        <span className='greenTextSmartmoney'> контакты</span> и 
                        <span className='greenTextSmartmoney'> нетворкинг</span> с крупнейшими
                        мировыми фарм брендами, с пациентами, 
                        врачами и фармацевтами, медицинскими вузами, а также помощь в 
                        <span className='greenTextSmartmoney'> операционном</span>, 
                        <span className='greenTextSmartmoney'> юридическом</span> и 
                        <span className='greenTextSmartmoney'> финансовом управлении </span> 
                        и <span className='greenTextSmartmoney'>командообразовании</span>, <br />проведении 
                        <span className='purpleTextSmartmoney'> исследований рынка</span> и сегментации 
                        <span className='purpleTextSmartmoney'> целевой аудитории</span>, 
                        <span className='purpleTextSmartmoney'>     разработке</span> и 
                        <span className='yellowTextSmartmoney'> упаковке</span> продукта, 
                        <span className='yellowTextSmartmoney'> продажах</span>
                        , <span className='yellowTextSmartmoney'>маркетинге</span> и 
                        <span className='yellowTextSmartmoney'> PR</span>.
                    </div>
                </div>
            </div>
            
        );
    }
    {
        return(
            <div className='mainBoxMobileSmartmoney'>
                <div className={'titleMobileSmartmoney'}>
                    MedCraft SmartMoney
                </div>
                <div className={'descriptionMobileSmartmoney'}>
                    Методология SmartMoney - внешнее финансирование проекта, при котором стартап получает не только 
                    определённую <span className='orangeTextSmartmoney'>сумму денег</span>, но и важнейшую для стартапа
                    <span className='greenTextSmartmoney'> экспертизу</span>, 
                    <span className='greenTextSmartmoney'> контакты</span> и 
                    <span className='greenTextSmartmoney'> нетворкинг </span>
                     с крупнейшими мировыми фарм брендами, с пациентами, 
                    врачами и фармацевтами, медицинскими вузами, а также помощь в 
                    <span className='greenTextSmartmoney'> операционном</span>, 
                    <span className='greenTextSmartmoney'> юридическом</span> и 
                    <span className='greenTextSmartmoney'> финансовом управлении </span> 
                    и <span className='greenTextSmartmoney'>командообразовании</span>, проведении 
                    <span className='purpleTextSmartmoney'> исследований 
                    рынка</span> и сегментации <span className='purpleTextSmartmoney'>целевой аудитории</span>, 
                    <span className='purpleTextSmartmoney'> разработке</span> и 
                    <span className='yellowTextSmartmoney'> упаковке</span> продукта, 
                    <span className='yellowTextSmartmoney'> продажах</span>,
                     <span className='yellowTextSmartmoney'> маркетинге</span> и 
                    <span className='yellowTextSmartmoney'> PR</span>.
                </div>
                <img className='imageCircleMobileSmartmoney' src='/images/smartMoneyCircle.png' alt="image"/>
                <div className='imageBoxStartUpSmartMoneyMobile'>
                    <img className='imageStartUpSmartmoneyMobile' src='/images/smartMoneyStartUp.png' alt="image"/>
                </div>
            </div>
        );
    }
}
