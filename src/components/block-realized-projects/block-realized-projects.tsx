import * as React from 'react'
import { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'
import classes from 'classnames'

import './block-realized-projects.scss'


export const BlockRealizedProjects: React.FC<{ blockOfElementsArray: ReactElement[] }> = (
    {blockOfElementsArray }: { blockOfElementsArray: ReactElement[] }
): ReactElement => {

    return(
        <div className={ classes(isMobile ? 'block-realized-project-mobile' : 'block-realized-projects') }>
            <div className={ classes(isMobile ? 'BRP-title-mobile' : 'BRP-title') }>
                    Реализованные проекты
            </div>
            <div className={ classes(isMobile ? 'BRP-blocks-mobile' : 'BRP-blocks') }>
                { blockOfElementsArray.map((blockOfElements, index) => <div key={index}>{blockOfElements}</div> ) }
            </div>
        </div>
    );
    
}
