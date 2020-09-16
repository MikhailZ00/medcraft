import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { ReactElement } from 'react'
import classNames from 'classnames'

import './roadmap.scss'


interface RoadMapProp {
    title: string,
    titleMob?: string,
    question: string,
    roadmapFirstSecond?: boolean,
    description: string,
    image?: string,
    imageMob?: string,
    imageWidth?: string,
    imageHeight?: string,
    imageRight?: boolean,
    panelTextFirst: string,
    panelTextSecond: string,
    panelPurpleText: string,
}

export const RoadMap: React.FC<RoadMapProp> = ({
    title,
    titleMob,
    question,
    description,
    image,
    imageMob,
    imageWidth,
    imageHeight,
    imageRight = true,
    panelTextFirst,
    panelTextSecond,
    panelPurpleText,
    roadmapFirstSecond = true,
}: RoadMapProp): ReactElement => {
    if (!isMobile) {
        return (
            <div className={classNames('component-roadmap-mainBox',
                imageRight ?
                    'component-roadmap-mainBox-image-right'
                    : 'component-roadmap-mainBox-image-left')}>
                <div className={classNames('component-roadmap-mainBox-textBox',
                    roadmapFirstSecond ?
                        'component-roadmap-mainBox-textBox-first'
                        : 'component-roadmap-mainBox-textBox-third')}>
                    <div className={classNames("component-roadmap-mainBox-textBox-content",
                        roadmapFirstSecond ?
                            'component-roadmap-mainBox-textBox-content-first'
                            : 'component-roadmap-mainBox-textBox-content-third')}>
                        <div className={classNames('component-roadmap-mainBox-textBox-content-title',
                            roadmapFirstSecond ?
                                'component-roadmap-mainBox-textBox-content-title-first'
                                : 'component-roadmap-mainBox-textBox-content-title-third')} >
                            {title}
                        </div>
                        <div className={classNames('component-roadmap-mainBox-textBox-content-question',
                            roadmapFirstSecond ?
                                'component-roadmap-mainBox-textBox-content-question-first'
                                : 'component-roadmap-mainBox-textBox-content-question-third')}>
                            {question}
                        </div>
                        <div className={classNames('component-roadmap-mainBox-textBox-content-description',
                            roadmapFirstSecond ?
                                'component-roadmap-mainBox-textBox-content-description-first'
                                : 'component-roadmap-mainBox-textBox-content-description-third')}>
                            {description}
                        </div>
                    </div>
                    <div className="component-roadmap-mainBox-textBox-panel">
                        <div className="component-roadmap-mainBox-textBox-panel-content">
                            <div className="component-roadmap-mainBox-textBox-panel-content-panelTextFirst">
                                {panelTextFirst}
                            </div>
                            <pre className="component-roadmap-mainBox-textBox-panel-content-panelPurpleText">{panelPurpleText}</pre>
                            <div className="component-roadmap-mainBox-textBox-panel-content-panelTextSecond">
                                {panelTextSecond}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('component-roadmap-mainBox-image',
                    roadmapFirstSecond ?
                        'component-roadmap-mainBox-image-first'
                        : 'component-roadmap-mainBox-image-third')}>
                    <img src={image} alt="image" width={imageWidth} height={imageHeight} />
                </div>
            </div >

        );
    }
    {
        return (
            <div className="mobile-component-roadmap-mainBox">
                <div className='mobile-component-roadmap-mainBox-textBox'>
                    <div className={classNames("mobile-component-roadmap-mainBox-textBox-content",
                        roadmapFirstSecond ?
                            'mobile-component-roadmap-mainBox-textBox-content-first'
                            : 'mobile-component-roadmap-mainBox-textBox-content-third')}>
                        <div className={classNames('mobile-component-roadmap-mainBox-textBox-content-title',
                            roadmapFirstSecond ?
                                'mobile-component-roadmap-mainBox-textBox-content-title-first'
                                : 'mobile-component-roadmap-mainBox-textBox-content-title-third')} >
                            {titleMob}
                        </div>
                        <div className={classNames('mobile-component-roadmap-mainBox-textBox-content-question',
                            roadmapFirstSecond ?
                                'mobile-component-roadmap-mainBox-textBox-content-question-first'
                                : 'mobile-component-roadmap-mainBox-textBox-content-question-third')}>
                            {question}
                        </div>
                    </div>
                    <div className='mobile-component-roadmap-mainBox-image'>
                        <img src={imageMob} alt="image" width={'138px'} height={'138px'} />
                    </div>
                </div>
                <div className={classNames('mobile-component-roadmap-mainBox-textBox-content-description',
                    roadmapFirstSecond ?
                        'mobile-component-roadmap-mainBox-textBox-content-description-first'
                        : 'mobile-component-roadmap-mainBox-textBox-content-description-third')}>
                    {description}
                </div>
                <div className="mobile-component-roadmap-mainBox-textBox-panel">
                    <div className="component-roadmap-mainBox-textBox-panel-content">
                        <div className="component-roadmap-mainBox-textBox-panel-content-panelTextFirst">
                            {panelTextFirst}
                        </div>
                        <pre className="component-roadmap-mainBox-textBox-panel-content-panelPurpleText">{panelPurpleText}</pre>
                        <div className="component-roadmap-mainBox-textBox-panel-content-panelTextSecond">
                            {panelTextSecond}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
