import * as React from 'react'
import { ChemicalElement } from '../components/chemical-element'
import { LinkButton } from '../components/link-button'
import { COLOR } from './chemical-element-colors'
import { LB_COLORS } from './link-button-colors'
import Megafon from './icons/mendeleev-table/megafon.svg'
import Box from './icons/mendeleev-table/box.svg'
import Conversations from './icons/mendeleev-table/conversations.svg'


const generateSchemeObj = (size: number): {[index: number]: boolean} => {

    let schemeObject = {};

    for (let i = 0; i < size; i++) {
        schemeObject[i] = false;        
    }

    return schemeObject;

}

// Количество элементов в таблице
export const numberOfObjectFields = 38;
// Каждый элемент - поле в данной константе
export const PERIODIC_TABLE_SCHEME = generateSchemeObj(numberOfObjectFields);

export const MENDELEEV_TABLE_CONTENT = {

    leftPartOfTable: [
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-001'}>
                    <div className={'MT-empty-chemical-element'} />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={1}
                        elementLetters={'BI'}
                        title={'BI - Buisness idea'}
                        popupText={'Бизнес идея - помогаем сформировать окончательное решение для '
                            + 'рынка, проверяем жизнеспособность бизес-модели на потребительском рынке'}
                        isOpenPopupByCycle={scheme[0]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={2}
                        elementLetters={'PM'}
                        title={'PM - Product management'}
                        popupText={'Продукт-менеджмент - строим дорожную карту создания продукта и его '
                            + 'развития, помогаем с процессом управления продуктом'}
                        isOpenPopupByCycle={scheme[1]}
                    />
                    <div className={'MT-empty-chemical-element'} />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-002'}>
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={5}
                        elementLetters={'DV'}
                        title={'DV - Development'}
                        popupText={'Разработка - предоставляем команду разработчиков под веб,'
                            + ' мобильные приложения и сервисы'}
                        isOpenPopupByCycle={scheme[4]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={6}
                        elementLetters={'TC'}
                        title={'TC - Technology'}
                        popupText={'Технологии - применяем накопленный стек технологий и решений для'
                            + ' максимизации скорости разработки, используя самые передовые технологии'}
                        isOpenPopupByCycle={scheme[5]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={7}
                        elementLetters={'RE'}
                        title={'RE - Researches'}
                        popupText={'Исследования - проводим первичные и вторичные исследования рынка, '
                            + 'западной практики'}
                        isOpenPopupByCycle={scheme[6]}
                    />
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-003'}>
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={11}
                        elementLetters={'FO'}
                        title={'FO - Forecasting'}
                        popupText={'Прогнозирование - строим прогнозы по достижимому объёму рынка, '
                            + 'экономики бизнес-модели'}
                        isOpenPopupByCycle={scheme[10]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={12}
                        elementLetters={'CO'}
                        title={'CO - Competitors'}
                        popupText={'Конкуренты - проводим глубинный конкурентный анализ, а также '
                            + 'анализ продуктов-заменителей'}
                        isOpenPopupByCycle={scheme[11]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={13}
                        elementLetters={'TA'}
                        title={'TA - Target Audience'}
                        popupText={'Целевая аудитория - строим ментальные карты портретов целевой '
                            + 'аудитории, её профили, паттерны, характеристики'}
                        isOpenPopupByCycle={scheme[12]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={14}
                        elementLetters={'UC'}
                        title={'UC - User case'}
                        popupText={'Пользовательский опыт - тестируем опыт пользователя по '
                            + 'выбору и использованию продукта'}
                        isOpenPopupByCycle={scheme[13]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-004'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={21}
                        elementLetters={'CJM'}
                        title={'CJM - Customer journey map'}
                        popupText={'Карта путешествия клиента - прогнозируем все возможные пути '
                            + 'клиента по взаимодействию с продуктом'}
                        isOpenPopupByCycle={scheme[20]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={22}
                        elementLetters={'AGL'}
                        title={'AGL - AGILE'}
                        popupText={'Методология AGILE - используем гибкую методологию разработки AGILE'}
                        isOpenPopupByCycle={scheme[21]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={23}
                        elementLetters={'PGM'}
                        title={'PGM - Programming'}
                        popupText={'Программирование - имеем собственные ресурсы для '
                            + 'программирования практически любых технологий'}
                        isOpenPopupByCycle={scheme[22]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-005'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={30}
                        elementLetters={'DE'}
                        title={'DE - Design'}
                        popupText={'Дизайн - создаём визуальное решение на основе пользовательского опыта'}
                        isOpenPopupByCycle={scheme[29]}
                    />
                    <ChemicalElement
                        color={COLOR.purple}
                        elementNumber={31}
                        elementLetters={'AR'}
                        title={'AR - Architecture'}
                        popupText={'Архитектура - создаём гибкую архитектуру продукта'}
                        isOpenPopupByCycle={scheme[30]}
                    />
                </React.Fragment>
            );
        },
    ],
    centerPartOfTable: [
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-011'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-012'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-013'}>
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={15}
                        elementLetters={'PA'}
                        title={'PA - Packaging'}
                        popupText={'Создаём у потребителей желание приобрести продукт'}
                        isOpenPopupByCycle={scheme[14]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={16}
                        elementLetters={'DM'}
                        title={'DM - Digital marketing'}
                        popupText={'Интернет-маркетинг - имеем 15-летний опыт комплесного '
                            + 'интернет-маркетинга'}
                        isOpenPopupByCycle={scheme[15]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={17}
                        elementLetters={'SA'}
                        title={'SA - Sales'}
                        popupText={'Продажи - строим отдел экспертных продаж под ключ'}
                        isOpenPopupByCycle={scheme[16]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-014'}>
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={24}
                        elementLetters={'BRA'}
                        title={'BRA - Branding'}
                        popupText={'Брендинг - создаём уникальный запоминающийся и узнаваемый бренд'}
                        isOpenPopupByCycle={scheme[23]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={25}
                        elementLetters={'CRE'}
                        title={'CRE - Creative'}
                        popupText={'Креатив - создаём уникальные креативные концепции и визуализацию'}
                        isOpenPopupByCycle={scheme[24]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={26}
                        elementLetters={'PRI'}
                        title={'PRI - Pricing'}
                        popupText={'Ценообразование - экспертно управляем ценнобразованием '
                            + 'относительно ценности продукта для рынка'}
                        isOpenPopupByCycle={scheme[25]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-015'}>
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={32}
                        elementLetters={'MP'}
                        title={'MP - Mediaplaning'}
                        popupText={'Медиапланирование - детализированно планируем расходы '
                            + 'и результаты продвижения на 1-2 года вперёд'}
                        isOpenPopupByCycle={scheme[31]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={33}
                        elementLetters={'OM'}
                        title={'OM - Omni-channel marketing'}
                        popupText={'Омниканальный маркетинг - взаимодействуем с целевой аудиторией '
                            + 'продукта в различных каналах в наиболее эффективном порядке'}
                        isOpenPopupByCycle={scheme[32]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={34}
                        elementLetters={'OF'}
                        title={'OF - Offer'}
                        popupText={'УТП - создаём уникальное торговое предложение, '
                            + 'дифференцированное от конкурентов'}
                        isOpenPopupByCycle={scheme[33]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-016'}>
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={36}
                        elementLetters={'B2B'}
                        title={'B2B'}
                        popupText={'Продажи бизнесу - настраиваем воронку B2B продаж'}
                        isOpenPopupByCycle={scheme[35]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={37}
                        elementLetters={'B2C'}
                        title={'B2C'}
                        popupText={'Розница - создаём поток B2C клиентов'}
                        isOpenPopupByCycle={scheme[36]}
                    />
                    <ChemicalElement
                        color={COLOR.yellow}
                        elementNumber={38}
                        elementLetters={'B2G'}
                        title={'B2G'}
                        popupText={'Взаимодействие и сотрудничество с государственными структурами'}
                        isOpenPopupByCycle={scheme[37]}
                    />
                </React.Fragment>
            );
        },
    ],
    rightPartOfTable: [
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-021'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={3}
                        elementLetters={'NW'}
                        title={'NW - Networking'}
                        popupText={'Знакомства и партнёрства - обеспечиваем нетворкинг с крупнейшими игроками рынка'}
                        isOpenPopupByCycle={scheme[2]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={4}
                        elementLetters={'IE'}
                        title={'IE - Industry expertise'}
                        popupText={'Отраслевая экспертиза - имеем высокий уровень экспертизы '
                            + 'в pharma и digital'}
                        isOpenPopupByCycle={scheme[3]}
                    />
                </React.Fragment>);
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-022'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={8}
                        elementLetters={'HR'}
                        title={'HR - Human resources'}
                        popupText={'Команда - предоставляем собственную профессиональную '
                            + 'команду под реализацию проекта'}
                        isOpenPopupByCycle={scheme[7]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={9}
                        elementLetters={'LA'}
                        title={'LA - Legal assistance'}
                        popupText={'Юр. сопровождение - обеспечиваем полное юридическое сопровождение проекта'}
                        isOpenPopupByCycle={scheme[8]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={10}
                        elementLetters={'AS'}
                        title={'AS - Accounting service'}
                        popupText={'Бух. обслуживание - обеспечиваем полное бухгалтерское '
                            + 'сопровождение проекта'}
                        isOpenPopupByCycle={scheme[9]}
                    />
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-023'}>
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={18}
                        elementLetters={'IN'}
                        title={'IN - Infrastructure'}
                        popupText={'Инфраструктура - создаём инфраструктуру для построения '
                            + 'эффективных процессов'}
                        isOpenPopupByCycle={scheme[17]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={19}
                        elementLetters={'BS'}
                        title={'BS - Brainstorming'}
                        popupText={'Брейншторминг - обеспечиваем мозговые штурмы '
                            + 'для создания инновационных гипотез'}
                        isOpenPopupByCycle={scheme[18]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={20}
                        elementLetters={'ME'}
                        title={'ME - Mentors'}
                        popupText={'Менторы - предоставляем доступ к сильнейшим менторам'}
                        isOpenPopupByCycle={scheme[19]}
                    />
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-024'}>
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={27}
                        elementLetters={'ITE'}
                        title={'ITE - IT equipment'}
                        popupText={'ИТ оборудование - предоставляем оборудование для работы'}
                        isOpenPopupByCycle={scheme[26]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={28}
                        elementLetters={'PHB'}
                        title={'PHB - Pharmaceutical brands'}
                        popupText={'Фарм. бренды - имеем контакты более чем с 120 '
                            + 'крупнейшими мировыми фармацевтическими компаниями'}
                        isOpenPopupByCycle={scheme[27]}
                    />
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={29}
                        elementLetters={'DAP'}
                        title={'DAP - Doctors and pharmacists'}
                        popupText={'Контакт более чем с 350.000 врачей по 150 специальностям'}
                        isOpenPopupByCycle={scheme[28]}
                    />
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-025'}>
                    <ChemicalElement
                        color={COLOR.blue}
                        elementNumber={35}
                        elementLetters={'TP'}
                        title={'TP - Tax planning'}
                        popupText={'Налоговый учёт - обеспечиваем правильный налоговый '
                            + 'учёт и оформление активов'}
                        isOpenPopupByCycle={scheme[34]}
                    />
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        },
        (scheme: {[index: number]: boolean}):React.ReactElement => {
            return(
                <React.Fragment key={'uniquekey-026'}>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                    <div className={'MT-empty-chemical-element'}></div>
                </React.Fragment>
            );
        }
    ],
    buttons: [
        <LinkButton
            key={'product'}
            title={'Продукт'}
            colorStyle={LB_COLORS.purpule}
            linkTo={'/product'}
            logo={<Box />}
        />,
        <LinkButton
            key={'promoute'}
            title={'Продвижение'}
            colorStyle={LB_COLORS.yellow}
            linkTo={'/promoute'}
            logo={<Megafon />}
        />,
        <LinkButton
            key={'environment'}
            title={'Среда'}
            colorStyle={LB_COLORS.blue}
            linkTo={'/environment'}
            logo={<Conversations />}
        />
    ]

}
