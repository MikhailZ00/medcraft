import * as React from 'react';
import { ReactElement } from 'react';
import { isMobile } from 'react-device-detect';

import './bottom-button.scss';


interface BottomButtonProp {
    popupFunction: () => void
}

export const BottomButton: React.FC<BottomButtonProp>  = (
{ 
    popupFunction
}: BottomButtonProp):ReactElement => {

return (
    <div>
        <button onClick={popupFunction} className={isMobile ? 'mobile-bottom-button' : 'bottom-button'}>
            Обсудить проект с инвестором
        </button>
    </div>
);
}
