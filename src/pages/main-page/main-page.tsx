import * as React from "react";
import { MainBlock } from 'components/main-block';
import { Benifit } from 'components/benifit';
import { isMobile } from 'react-device-detect';
import { REALIZED_PROJECTS } from '../../constants/block-realized-projects'
import { BlockRealizedProjects } from 'components/block-realized-projects'
import { RoadMap } from 'components/roadmap'
import { StartUpBlock } from '../../components/startup'
import { BottomButton } from 'components/bottom-button'
import classes from 'classnames'
import { ReactElement } from 'react';
import { MendeleevTable } from '../../components/mendeleev-table'
import { SmartMoneyBlock } from '../../components/medcraft-smartmoney'
import { MAIN_PAGE_CONTENT } from '../../constants/pages/main-page'

import './main-page.scss';


interface MainPageProp {
    onPopupOpen: () => void
}

export const MainPage: React.FC<MainPageProp> = (
    {
        onPopupOpen
    }: MainPageProp): ReactElement => {

    return (
        <>
            <div className={classes(isMobile ? 'main-page-wrapper-mobile' : 'main-page-wrapper')}>
                <div className={classes(isMobile ? 'mobile-pages-main' : 'pages-main')}>
                    <div className={classes(isMobile ? 'mobile-pages-main-content' : 'pages-main-content')}>
                        <MainBlock
                            title={"Умные инвестиции для вашего стартапа"}
                            descriptionFirstParagraph={"Помогаем создавать и продвигать стартапы "}
                            purpleDescriptionFirstParagraph={"в сфере Digital Pharma & Healthcare Marketing"}
                            descriptionSecondParagraph={"Основой для быстрой, успешной реализации проектов являются ресурсы "
                                + "методологии Medcraft SmartMoney, с помощью которых уже реализовано "}
                            purpleDescriptionSecondParagraph={"более 10 проектов."}
                            buttonText={"Оставить заявку"}
                            image={"/images/first.png"}
                            imageWidthMob={'326px'}
                            imageHeightMob={'266px'}
                            descriptionMobile={"Помогаем создавать и продвигать стартапы "}
                            purpleDescriptionMob={'в сфере Digital Pharma & Healthcare Marketing'}
                            linkCoffee={"Обсудить проект с инвестором"}
                            popupFunction={onPopupOpen}
                        />
                        {!isMobile &&
                            <div className={classes(isMobile ? 'mobile-pages-main-benifit' : 'pages-main-benifit')}>
                                <Benifit />
                            </div>
                        }
                    </div>
                </div>
            </div>

            {isMobile &&
                <div className={classes(isMobile ? 'mobile-pages-main-benifit' : 'pages-main-benifit')}>
                    <Benifit />
                </div>
            }

            <div className={classes(isMobile ? 'main-page-wrapper-mobile' : 'main-page-wrapper MP-low-block')}>
                <div className={classes(isMobile ? 'mobile-pages-main' : 'pages-main')}>

                    <section id={'MP-section-1'}>
                        <div className={isMobile ? '' : 'MP-first-line'} />
                        <MendeleevTable />
                    </section>

                    <section id={'MP-section-2'}>
                        <div className={isMobile ? '' : 'MP-second-line'} />
                        <div className={classes(isMobile ? "mobile-main-page-roadmap" : "main-page-roadmap")}>
                            <div className={classes(isMobile ? "mobile-main-page-roadmap-title" : "main-page-roadmap-title")}>
                                От идеи до масштабирования бизнеса
                            </div>
                            {MAIN_PAGE_CONTENT.roadmapArray.map((block, index) => (
                                <div className={block.className} key={index}>
                                    <RoadMap
                                        title={block.title}
                                        titleMob={block.titleMob}
                                        question={block.question}
                                        description={block.description}
                                        image={block.image}
                                        imageMob={block.imageMob}
                                        imageWidth={block.imageWidth}
                                        imageHeight={block.imageHeight}
                                        imageRight={block.imageRight}
                                        panelTextFirst={block.panelTextFirst}
                                        panelTextSecond={block.panelTextSecond}
                                        panelPurpleText={block.panelPurpleText}
                                        roadmapFirstSecond={block.roadmapFirstSecond}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id={'MP-section-3'}>
                        <div className={isMobile ? '' : 'MP-third-line'} />
                        <BlockRealizedProjects
                            blockOfElementsArray={REALIZED_PROJECTS}
                        />
                    </section>

                    <section id={'MP-section-4'}>
                        <div className={isMobile ? '' : 'MP-fourth-line'} />
                        <div className={classes(isMobile ? 'smart-money-block-wrapper-mobile' : 'smart-money-block-wrapper')}>
                            <SmartMoneyBlock />
                        </div>
                        <div className={classes(isMobile ? 'mobile-main-page-component-startup' : 'main-page-component-startup')}>
                            <StartUpBlock />
                        </div>
                    </section>
                </div>
            </div>
            <BottomButton popupFunction={onPopupOpen} />
        </>
    )
}
