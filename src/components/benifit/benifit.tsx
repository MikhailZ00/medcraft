import * as React from 'react';
import Medal from './icons/medal.svg';
import Slider from 'infinite-react-carousel';
import './benifit.scss';



export const Benifit = (): React.ReactElement => {

    return (
        <div className={'benifit'}>
            {outerWidth < 760 ?
                (
                    <div className="mobile-benifits">
                        <Slider dots={false} arrows={false} slidesToShow={1.3} className='mobile-component-benifits'>
                            <>
                                <div className="mobile-component-benifits-first">
                                    <div className="benifits-first-content">
                                        <div className="benifits-first-content-medal">
                                            <Medal />
                                        </div>
                                        <div className="benifits-first-content-text">
                                            <div className="benifits-first-content-text-title">17 ЛЕТ</div>
                                            <div className="benifits-first-content-text-information">
                                                экспертизы <br /> на фарм рынке
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className='mobile-component-benifits-second'>
                                    <div className="benifits-second-content">
                                        <div className="benifits-second-content-medal">
                                            <Medal />
                                        </div>
                                        <div className="benifits-second-content-text">
                                            <div className="benifits-second-content-text-title">КОНТАКТЫ</div>
                                            <div className="benifits-second-content-text-information">
                                                с топ-100 мировыми фарм компаниями
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className='mobile-component-benifits-third'>
                                    <div className="benifits-third-content">
                                        <div className="benifits-third-content-medal">
                                            <Medal />
                                        </div>
                                        <div className="benifits-third-content-text">
                                            <div className="benifits-third-content-text-title">СИЛЬНЕЙШАЯ</div>
                                            <div className="benifits-third-content-text-information">команда исполнителей</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </Slider>
                    </div>
                ) : (((outerWidth > 752) && (outerWidth < 1024)) ?
                (
                    <div className='ipad-component-benifits'>
                        <div className='mobile-component-benifits-first'>
                            <div className="benifits-first-content">
                                <div className="benifits-first-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-first-content-text">
                                    <div className="benifits-first-content-text-title">17 ЛЕТ</div>
                                    <div className="benifits-first-content-text-information">экспертизы <br /> на фарм рынке</div>
                                </div>
                            </div>
                        </div>
                        <div className='mobile-component-benifits-second'>
                            <div className="benifits-second-content">
                                <div className="benifits-second-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-second-content-text">
                                    <div className="benifits-second-content-text-title">КОНТАКТЫ</div>
                                    <div className="benifits-second-content-text-information">с топ-100 мировыми фарм компаниями</div>
                                </div>
                            </div>
                        </div>
                        <div className='mobile-component-benifits-third'>
                            <div className="benifits-third-content">
                                <div className="benifits-third-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-third-content-text" id='komanda'>
                                    <div className="benifits-third-content-text-title">СИЛЬНЕЙШАЯ</div>
                                    <div className="benifits-third-content-text-information">команда исполнителей</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div className='component-benifits'>
                        <div className='component-benifits-first'>
                            <div className="benifits-first-content">
                                <div className="benifits-first-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-first-content-text">
                                    <div className="benifits-first-content-text-title">17 ЛЕТ</div>
                                    <div className="benifits-first-content-text-information">экспертизы <br /> на фарм рынке</div>
                                </div>
                            </div>
                        </div>
                        <div className='component-benifits-second'>
                            <div className="benifits-second-content">
                                <div className="benifits-second-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-second-content-text">
                                    <div className="benifits-second-content-text-title">КОНТАКТЫ</div>
                                    <div className="benifits-second-content-text-information">с топ-100 мировыми фарм компаниями</div>
                                </div>
                            </div>
                        </div>
                        <div className='component-benifits-third'>
                            <div className="benifits-third-content">
                                <div className="benifits-third-content-medal">
                                    <Medal />
                                </div>
                                <div className="benifits-third-content-text" id='komanda'>
                                    <div className="benifits-third-content-text-title">СИЛЬНЕЙШАЯ</div>
                                    <div className="benifits-third-content-text-information">команда исполнителей</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
}
