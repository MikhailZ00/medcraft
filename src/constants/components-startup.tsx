import * as React from 'react'
import LineOne from './icons/startup/lineOne.svg'
import LineTwo from './icons/startup/lineTwo.svg'
import LineThree from './icons/startup/lineThree.svg'
import LineFour from './icons/startup/lineFour.svg'
import LineFive from './icons/startup/lineFive.svg'
import LineSix from './icons/startup/lineSix.svg'
import LineSeven from './icons/startup/lineSeven.svg'
import LineEight from './icons/startup/lineEight.svg'
import LineNine from './icons/startup/lineNine.svg'
import LineTen from './icons/startup/lineTen.svg'
import PharmaceuticalStartUp from './icons/startup/pharmaceuticalStartUp.svg'
import TeamStartUp from './icons/startup/teamStartUp.svg'
import GroupStartUp from './icons/startup/groupStartUp.svg'
import HospitalStartUp from './icons/startup/hospitalStartUp.svg'
import TeacherStartUp from './icons/startup/teacherStartUp.svg'
import DoctorStartUp from './icons/startup/doctorStartUp.svg'
import MuseumStartUp from './icons/startup/museumStartUp.svg'
import PharmacyStartUp from './icons/startup/pharmacyStartUp.svg'
import MoneyStartUp from './icons/startup/moneyStartUp.svg'
import TeamsStartUp from './icons/startup/teamsStartUp.svg'
import classNames from 'classnames'

export const COMPONENTS_START_UP_ARRAY_LEFT = [
    {
        mainClassName: classNames('first-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-left-start-up',
        imageBoxClassName: 'image-box-left-start-up',
        imageClassName: 'image-start-up',
        icon: <PharmaceuticalStartUp/>,
        lineClassName: 'line-left-start-up-one',
        pointClassName: classNames('point-one', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Имеем контакты с первыми лицами более 120 фармацевтических компаний',
        line: <LineOne/>
    },
    {
        mainClassName: classNames('second-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-left-start-up',
        imageBoxClassName: 'image-box-left-start-up',
        imageClassName: 'image-start-up',
        icon: <TeamStartUp/>,
        lineClassName: 'line-left-start-up-two',
        pointClassName: classNames('point-two', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Контакты более чем с 25 профессиональными ассоциациями',
        line: <LineTwo/>
    },
    {
        mainClassName: classNames('third-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-left-start-up',
        imageBoxClassName: 'image-box-left-start-up',
        imageClassName: 'image-start-up',
        icon: <GroupStartUp/>,
        lineClassName: 'line-left-start-up-three',
        pointClassName: classNames('point-three', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: <div>Контакт более чем<br />с 50.000 фармацевтов</div>,
        line: <LineThree/>
    },
    {
        mainClassName: classNames('fourth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-left-start-up',
        imageBoxClassName: 'image-box-left-start-up',
        imageClassName: 'image-start-up',
        icon: <HospitalStartUp/>,
        lineClassName: 'line-left-start-up-four',
        pointClassName: classNames('point-four', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: <div>Контакты с<br /> медицинскими НИИ и<br /> центрами</div>,
        line: <LineFour/>
    },
    {
        mainClassName: classNames('fifth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-left-start-up',
        imageBoxClassName: 'image-box-left-start-up',
        imageClassName: 'image-start-up',
        icon: <TeacherStartUp/>,
        lineClassName: 'line-left-start-up-five',
        pointClassName: classNames('point-five', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Ментор',
        line: <LineFive/>
    }
]
export const COMPONENTS_START_UP_ARRAY_RIGHT = [
    {
        mainClassName: classNames('sixth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-right-start-up',
        imageBoxClassName: 'image-box-right-start-up',
        imageClassName: 'image-start-up',
        icon: <DoctorStartUp/>,
        lineClassName: 'line-right-start-up-six',
        pointClassName: classNames('point-six', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: <div>Контакт более чем<br />с 350.000 врачей по 150 специальностям</div>,
        line: <LineSix/>
    },
    {
        mainClassName: classNames('seventh-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-right-start-up',
        imageBoxClassName: 'image-box-right-start-up',
        imageClassName: 'image-start-up',
        icon: <MuseumStartUp/>,
        lineClassName: 'line-right-start-up-seven',
        pointClassName: classNames('point-seven', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Государственные структуры, здравоохранение, поддержка предпринимательства',
        line: <LineSeven/>
    },
    {
        mainClassName: classNames('eighth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-right-start-up',
        imageBoxClassName: 'image-box-right-start-up',
        imageClassName: 'image-start-up',
        icon: <PharmacyStartUp/>,
        lineClassName: 'line-right-start-up-eight',
        pointClassName: classNames('point-eight', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Контакты с кафедрами мединститутов',
        line: <LineEight/>
    },
    {
        mainClassName: classNames('ninth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-right-start-up',
        imageBoxClassName: 'image-box-right-start-up',
        imageClassName: 'image-start-up',
        icon: <MoneyStartUp/>,
        lineClassName: 'line-right-start-up-nine',
        pointClassName: classNames('point-nine', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Акселлераторы, фонды',
        line: <LineNine/>
    },
    {
        mainClassName: classNames('tenth-component-start-up', 'component-start-up'),
        textBoxClassName: 'text-box-right-start-up',
        imageBoxClassName: 'image-box-right-start-up',
        imageClassName: 'image-start-up',
        icon: <TeamsStartUp/>,
        lineClassName: 'line-right-start-up-ten',
        pointClassName: classNames('point-ten', 'point-start-up'),
        pointPurpleClassName: 'purple-point',
        text: 'Глобальные партнерства',
        line: <LineTen/>
    }
]

export const COMPONENTS_START_UP_ARRAY_MOBILE = [
    {
        icon: <PharmaceuticalStartUp/>,
        text: 'Имеем контакты с первыми лицами более 120 фармацевтических компаний'
    },
    {
        icon: <TeamStartUp/>,
        text: <div>Контакты более чем с 25<br /> профессиональными ассоциациями</div>
    },
    {
        icon: <GroupStartUp/>,
        text: <div>Контакт более чем<br /> с 50.000 фармацевтов</div>
    },
    {
        icon: <HospitalStartUp/>,
        text: 'Контакты с медицинскими НИИ и центрами'
    },
    {
        icon: <TeacherStartUp/>,
        text: 'Ментор'
    },
    {
        icon: <DoctorStartUp/>,
        text: <div>Контакт более чем<br /> с 350.000 врачей по<br /> 150 специальностямм</div>
    },
    {
        icon: <MuseumStartUp/>,
        text: 'Государственные структуры, здравоохранение, поддержка предпринимательства'
    },
    {
        icon: <PharmacyStartUp/>,
        text: 'Контакты с кафедрами мединститутов'
    },
    {
        icon: <MoneyStartUp/>,
        text: <div>Акселлераторы,<br /> фонды</div>
    },
    {
        icon: <TeamsStartUp/>,
        text: <div>Глобальные<br /> партнерства</div>
    }
]
