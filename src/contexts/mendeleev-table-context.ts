import * as React from 'react'


const endPlayPopupAnimCB = () => {};
const startPlayPopupAnimCB = () => {};
const setAtLeastOnePopupIsOpenCB = (value: boolean) => {};

export const Context = React.createContext({
    endPlayPopupAnimCB,
    startPlayPopupAnimCB,
    setAtLeastOnePopupIsOpenCB
});