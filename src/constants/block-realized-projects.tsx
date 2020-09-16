import * as React from 'react'
import {
    FIRST_ELEMENT_ARRAY,
    FIRST_ELEMENT_ARRAY1,
    FIRST_ELEMENT_ARRAY2,
    FIRST_ELEMENT_ARRAY2_1,
    FIRST_ELEMENT_ARRAY2_3,
    FIRST_ELEMENT_ARRAY3_2,
    FIRST_ELEMENT_ARRAY3_3,
    FIRST_ELEMENT_ARRAY4_1,
    FIRST_ELEMENT_ARRAY4_3,
    FIRST_ELEMENT_ARRAY5_1,
    FIRST_ELEMENT_ARRAY5_2,
    FIRST_ELEMENT_ARRAY6_1,
    FIRST_ELEMENT_ARRAY6_2,
    FIRST_ELEMENT_ARRAY7_1,
    FIRST_ELEMENT_ARRAY8_1,
    FIRST_ELEMENT_ARRAY9_2,
    FIRST_ELEMENT_ARRAY9_3
} from '../constants/block-for-cases'
import { BlockOfElements } from 'components/block-of-elements'
import Fire from './icons/fire.svg'

export const REALIZED_PROJECTS = [
    <BlockOfElements
        title={'Крупнейший в СНГ ресурс для мам и малышей BABY.RU'}
        key={'1'}
        subTitle={'Baby.ru'}
        elementsArray={FIRST_ELEMENT_ARRAY.concat(FIRST_ELEMENT_ARRAY1).concat(FIRST_ELEMENT_ARRAY2)}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstAchievementText={'13 млн. пользователей в месяц'}
        secondAchievementText={'Контракты с крупнейшими мировыми healthcare брендами'}
        underAchievementText={'Апрель 2010г - настоящее время'}
    />,
    <BlockOfElements
        title={'Международый портал для мам Moms.com'}
        key={'2'}
        subTitle={'Moms.com'}
        elementsArray={FIRST_ELEMENT_ARRAY2_1.concat(FIRST_ELEMENT_ARRAY2_3)}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstAchievementText={'500 000 активных пользователей'}
        secondAchievementText={'Успешная продажа бизнеса канадскому издательству'}
        underAchievementText={'2018 - настоящее время'}
    />,
    <BlockOfElements
        title={'Digital агентство фармацевтических брендов Medcraft'}
        key={'3'}
        subTitle={'Medcraft.ru'}
        elementsArray={FIRST_ELEMENT_ARRAY3_2.concat(FIRST_ELEMENT_ARRAY3_3)}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstAchievementText={'Конктракты с крупнейшими фарм брендами'}
        secondAchievementText={'Эксклюзивные агентсткие продукты'}
        underAchievementText={'2007 - настоящее время'}
    />,
    <BlockOfElements
        title={'Сервис мониторинга репутации врача Doctoronboard'}
        key={'4'}
        subTitle={'Doctoronboard.ru'}
        elementsArray={FIRST_ELEMENT_ARRAY4_1.concat(FIRST_ELEMENT_ARRAY4_3)}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstAchievementText={'Популярный сервис для врачей'}
        secondAchievementText={'Публикации в СМИ и отзывы авторитетных врачей'}
        underAchievementText={'2019 - настоящее время'}
    />,
    <BlockOfElements
        title={'Приложение для мам Happymama'}
        key={'5'}
        subTitle={'Happymama'}
        elementsArray={FIRST_ELEMENT_ARRAY5_1.concat(FIRST_ELEMENT_ARRAY5_2)}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstAchievementText={'Премия Рунета 2018 за лучшее mobile приложение'}
        secondAchievementText={'TOP 3 рекомендаций IOS и Android'}
        underAchievementText={'2016 - настоящее время'}
    />,
    <BlockOfElements
        title={'Сервис повторных консультаций с врачами Tetamed'}
        key={'6'}
        subTitle={'Tetamed'}
        elementsArray={FIRST_ELEMENT_ARRAY6_1.concat(FIRST_ELEMENT_ARRAY6_2)}
        firstIcon={<Fire />}
        secondIcon={<></>}
        firstAchievementText={'Тысячи пациентов смогли общаться с врачами'}
        secondAchievementText={''}
        underAchievementText={'2018 - 2018'}
    />,
    <BlockOfElements
        title={'Медицинская карта пациента онлайн Medkarta'}
        key={'7'}
        subTitle={'Medkarta'}
        elementsArray={FIRST_ELEMENT_ARRAY7_1}
        firstIcon={<Fire />}
        secondIcon={<></>}
        firstAchievementText={'500 000 активных пользователей'}
        secondAchievementText={''}
        underAchievementText={'2010-2012'}
    />,
    <BlockOfElements
        title={'Портал для репродуктологов Humrep'}
        key={'8'}
        subTitle={'Humrep'}
        elementsArray={FIRST_ELEMENT_ARRAY8_1}
        firstIcon={<Fire />}
        secondIcon={<></>}
        firstAchievementText={'90% репродуктологов зарегистрировались на площадке'}
        secondAchievementText={''}
        underAchievementText={'2009-2012'}
    />,
    <BlockOfElements
        title={'Digital агентство брендов для мам и малышей Babybrandlab'}
        key={'9'}
        subTitle={'Babybrandlab.ru'}
        elementsArray={FIRST_ELEMENT_ARRAY9_2.concat(FIRST_ELEMENT_ARRAY9_3)}
        firstIcon={<></>}
        secondIcon={<Fire />}
        firstAchievementText={''}
        secondAchievementText={'Контракты с крупнейшими брендами для мам и малышей'}
        underAchievementText={'2015 - настоящее время'}
    />,
]
