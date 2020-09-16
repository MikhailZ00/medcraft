import * as React from 'react'
import Fire from './icons/fire28px.svg'
import FireMobile from './icons/fire23px.svg'
import { BlockForCases } from '../components/block-for-cases'
import { BlockOfElementsCases } from '../components/block-of-elements-cases'
import { ChemicalElement } from '../components/chemical-element'
import { COLOR } from '../constants/chemical-element-colors'



export const FIRST_ELEMENT_ARRAY = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'1'}
            elementNumber={1}
            elementLetters={'BI'}
            title={'BI - Бизнес идея'}
            popupText={'Бизнес идея - помогаем сформировать окончательное решение для рынка, проверяем '
                + 'жизнеспособность бизес-модели на потребительском рынке'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'2'}
            elementNumber={2}
            elementLetters={'PM'}
            title={'PM - Продукт-менеджмент'}
            popupText={'Продукт-менеджмент - строим дорожную карту создания продукта и его'
                + ' развития, помогаем с процессом управления продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'3'}
            elementNumber={3}
            elementLetters={'TC'}
            title={'TC - Технологии'}
            popupText={'Технологии - применяем накопленный стек'
                + 'технологий и решений для максимизации скорости разработки, используя самые передовые технологии'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'4'}
            elementNumber={4}
            elementLetters={'TA'}
            title={'TA - Целевая аудитория'}
            popupText={'Целевая аудитория - строим ментальные карты портретов целевой аудитории, её профили, паттерны, характеристики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'5'}
            elementNumber={5}
            elementLetters={'CJM'}
            title={'CJM - Карта путешествия клиента'}
            popupText={'Карта путешествия клиента - прогнозируем все возможные пути клиента по взаимодействию с продуктом'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY1 = [
    <>
        <ChemicalElement
            color={COLOR.yellow}
            key={'21'}
            elementNumber={1}
            elementLetters={'SA'}
            title={'SA - Продажи'}
            popupText={'Продажи - строим отдел экспертных продаж под ключ'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'22'}
            elementNumber={2}
            elementLetters={'MP'}
            title={'MP - Медиапланирование'}
            popupText={'Медиапланирование - детализированно планируем расходы и результаты продвижения на 1-2 года вперёд'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY2 = [
    <>
        <ChemicalElement
            color={COLOR.blue}
            key={'24'}
            elementNumber={1}
            elementLetters={'HR'}
            title={'HR - Команда'}
            popupText={'Команда - предоставляем собственную профессиональную команду под реализацию проекта'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'25'}
            elementNumber={2}
            elementLetters={'BS'}
            title={'BS - Брейншторминг'}
            popupText={'Брейншторминг - обеспечиваем мозговые штурмы для создания инновационных гипотез'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY2_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'30'}
            elementNumber={1}
            elementLetters={'PM'}
            title={'PM - Продукт-менеджмент'}
            popupText={'Продукт-менеджмент - строим дорожную карту создания продукта и его'
                + ' развития, помогаем с процессом управления продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'29'}
            elementNumber={2}
            elementLetters={'TC'}
            title={'TC - Технологии'}
            popupText={'Технологии - применяем накопленный стек технологий и'
                + 'решений для максимизации скорости разработки, используя самые передовые технологии'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'28'}
            elementNumber={3}
            elementLetters={'TA'}
            title={'TA - Целевая аудитория'}
            popupText={'Целевая аудитория - строим ментальные карты портретов целевой аудитории, её профили, паттерны, характеристики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'27'}
            elementNumber={4}
            elementLetters={'CJM'}
            title={'CJM - Карта путешествия клиента'}
            popupText={'Карта путешествия клиента - прогнозируем все возможные пути клиента по взаимодействию с продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'26'}
            elementNumber={5}
            elementLetters={'CO'}
            title={'CO - Конкуренты'}
            popupText={'Конкуренты - проводим глубинный конкурентный анализ, а также анализ продуктов-заменителей'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY2_3 = [
    <>
        <ChemicalElement
            color={COLOR.blue}
            key={'32'}
            elementNumber={1}
            elementLetters={'HR'}
            title={'HR - Команда'}
            popupText={'Команда - предоставляем собственную профессиональную команду под реализацию проекта'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'33'}
            elementNumber={2}
            elementLetters={'BS'}
            title={'BS - Брейншторминг'}
            popupText={'Брейншторминг - обеспечиваем мозговые штурмы для создания инновационных гипотез'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY3_2 = [
    <>
        <ChemicalElement
            color={COLOR.yellow}
            key={'36'}
            elementNumber={1}
            elementLetters={'DM'}
            title={'DM - Интернет-маркетинг'}
            popupText={'Интернет-маркетинг - имеем 15-летний опыт комплесного интернет-маркетинга'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'37'}
            elementNumber={2}
            elementLetters={'SA'}
            title={'SA - Продажи'}
            popupText={'Продажи - строим отдел экспертных продаж под ключ'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'38'}
            elementNumber={3}
            elementLetters={'PRI'}
            title={'PRI - Ценообразование'}
            popupText={'Ценообразование - экспертно управляем ценнобразованием относительно ценности продукта для рынка'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'39'}
            elementNumber={4}
            elementLetters={'MP'}
            title={'MP - Медиапланирование'}
            popupText={'Медиапланирование - детализированно планируем расходы и результаты продвижения на 1-2 года вперёд'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'40'}
            elementNumber={5}
            elementLetters={'OM'}
            title={'OM - Омниканальный маркетинг'}
            popupText={'Омниканальный маркетинг - взаимодействуем с целевой аудиторией продукта'
                + 'в различных каналах в наиболее эффективном порядке'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'41'}
            elementNumber={6}
            elementLetters={'OF'}
            title={'OF - УТП'}
            popupText={'УТП - создаём уникальное торговое предложение, дифференцированное от конкурентов'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY3_3 = [
    <>
        <ChemicalElement
            color={COLOR.blue}
            key={'42'}
            elementNumber={1}
            elementLetters={'PHB'}
            title={'PHB - Фарм. бренды'}
            popupText={'Фарм. бренды - имеем контакты более чем с 120 крупнейшими мировыми фармацевтическими компаниями'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'43'}
            elementNumber={2}
            elementLetters={'DAP'}
            title={'DAP - Врачи и фармацевты'}
            popupText={'Контакт более чем с 350.000 врачей по 150 специальностям'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY4_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'50'}
            elementNumber={1}
            elementLetters={'BI'}
            title={'BI - Бизнес идея'}
            popupText={'Бизнес идея - помогаем сформировать окончательное решение для рынка,'
                + 'проверяем жизнеспособность бизес-модели на потребительском рынке.'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'49'}
            elementNumber={2}
            elementLetters={'DV'}
            title={'DV - Разработка'}
            popupText={'Разработка - предоставляем команду разработчиков под веб, мобильные приложения и сервисы'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'48'}
            elementNumber={3}
            elementLetters={'RE'}
            title={'RE - Исследования'}
            popupText={'Исследования - проводим первичные и вторичные исследования рынка, западной практики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'47'}
            elementNumber={4}
            elementLetters={'CJM'}
            title={'CJM - Карта путешествия клиента'}
            popupText={'Карта путешествия клиента - прогнозируем все возможные пути клиента по взаимодействию с продуктом'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY4_3 = [
    <>
        <ChemicalElement
            color={COLOR.blue}
            key={'56'}
            elementNumber={1}
            elementLetters={'DAP'}
            title={'DAP - Врачи и фармацевты'}
            popupText={'Контакт более чем с 350.000 врачей по 150 специальностям'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'57'}
            elementNumber={2}
            elementLetters={'LA'}
            title={'LA - Юр. сопровождение'}
            popupText={'Юр. сопровождение - обеспечиваем полное юридическое сопровождение проекта'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY5_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'60'}
            elementNumber={1}
            elementLetters={'PM'}
            title={'PM - Продукт-менеджмент'}
            popupText={'Продукт-менеджмент - строим дорожную карту создания продукта и его развития, '
                + 'помогаем с процессом управления продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'61'}
            elementNumber={2}
            elementLetters={'TC'}
            title={'TC - Технологии'}
            popupText={'Технологии - применяем накопленный стек технологий и решений для максимизации '
                + 'скорости разработки, используя самые передовые технологии'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'62'}
            elementNumber={3}
            elementLetters={'FO'}
            title={'FO - Прогнозирование'}
            popupText={'Прогнозирование - строим прогнозы по достижимому объёму рынка, экономики бизнес-модели'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'63'}
            elementNumber={4}
            elementLetters={'TA'}
            title={'TA - Целевая аудитория'}
            popupText={'Целевая аудитория - строим ментальные карты портретов целевой аудитории, её профили, паттерны, характеристики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'64'}
            elementNumber={5}
            elementLetters={'CJM'}
            title={'CJM - Карта путешествия клиента'}
            popupText={'Карта путешествия клиента - прогнозируем все возможные пути клиента по взаимодействию с продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'65'}
            elementNumber={6}
            elementLetters={'PJM'}
            title={'PJM - Программирование'}
            popupText={'Программирование - имеем собственные ресурсы для программирования практически любых технологий'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY5_2 = [
    <>
        <ChemicalElement
            color={COLOR.yellow}
            key={'70'}
            elementNumber={1}
            elementLetters={'PA'}
            title={'PA - Упаковка'}
            popupText={'Создаём у потребителей желание приобрести продукт'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'71'}
            elementNumber={2}
            elementLetters={'SA'}
            title={'SA - Продажи'}
            popupText={'Продажи - строим отдел экспертных продаж под ключ'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'72'}
            elementNumber={3}
            elementLetters={'PRI'}
            title={'PRI - Ценообразование'}
            popupText={'Ценообразование - экспертно управляем ценнобразованием относительно ценности продукта для рынка'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY6_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'80'}
            elementNumber={1}
            elementLetters={'BI'}
            title={'BI - Бизнес идея'}
            popupText={'Бизнес идея - помогаем сформировать окончательное решение для рынка, '
                + 'проверяем жизнеспособность бизес-модели на потребительском рынке.'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'81'}
            elementNumber={2}
            elementLetters={'TC'}
            title={'TC - Технологии'}
            popupText={'Технологии - применяем накопленный стек технологий и решений для максимизации '
                + 'скорости разработки, используя самые передовые технологии'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'82'}
            elementNumber={3}
            elementLetters={'CO'}
            title={'CO - Конкуренты'}
            popupText={'Конкуренты - проводим глубинный конкурентный анализ, а также анализ продуктов-заменителей'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'83'}
            elementNumber={4}
            elementLetters={'UC'}
            title={'UC - Пользовательский опыт'}
            popupText={'Пользовательский опыт - тестируем опыт пользователя по выбору и использованию продукта'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'84'}
            elementNumber={5}
            elementLetters={'AGL'}
            title={'AGL - Методология AGILE'}
            popupText={'Методология AGILE - используем гибкую методологию разработки AGILE'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY6_2 = [
    <>
        <ChemicalElement
            color={COLOR.yellow}
            key={'85'}
            elementNumber={1}
            elementLetters={'BRA'}
            title={'BRA - Брендинг'}
            popupText={'Брендинг - создаём уникальный запоминающийся и узнаваемый бренд'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'86'}
            elementNumber={2}
            elementLetters={'CRE'}
            title={'CRE - Креатив'}
            popupText={'Креатив - создаём уникальные креативные концепции и визуализацию'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY7_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'90'}
            elementNumber={1}
            elementLetters={'BI'}
            title={'BI - Бизнес идея'}
            popupText={'Бизнес идея - помогаем сформировать окончательное решение для рынка, '
                + 'проверяем жизнеспособность бизес-модели на потребительском рынке'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'91'}
            elementNumber={2}
            elementLetters={'PM'}
            title={'PM - Продукт-менеджмент'}
            popupText={'Продукт-менеджмент - строим дорожную карту создания продукта и его развития, '
                + 'помогаем с процессом управления продуктом'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'92'}
            elementNumber={3}
            elementLetters={'TC'}
            title={'TC - Технологии'}
            popupText={'Технологии - применяем накопленный стек технологий и решений для максимизации '
                + 'скорости разработки, используя самые передовые технологии'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'93'}
            elementNumber={4}
            elementLetters={'RE'}
            title={'RE - Исследования'}
            popupText={'Исследования - проводим первичные и вторичные исследования рынка, западной практики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'94'}
            elementNumber={5}
            elementLetters={'TA'}
            title={'TA - Целевая аудитория'}
            popupText={'Целевая аудитория - строим ментальные карты портретов целевой аудитории, её профили, паттерны, характеристики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'95'}
            elementNumber={6}
            elementLetters={'UC'}
            title={'UC - Пользовательский опыт'}
            popupText={'Пользовательский опыт - тестируем опыт пользователя по выбору и использованию продукта'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY8_1 = [
    <>
        <ChemicalElement
            color={COLOR.purple}
            key={'97'}
            elementNumber={1}
            elementLetters={'BI'}
            title={'BI - Бизнес идея'}
            popupText={'Бизнес идея - помогаем сформировать окончательное решение для рынка, '
                + 'проверяем жизнеспособность бизес-модели на потребительском рынке'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'98'}
            elementNumber={2}
            elementLetters={'DV'}
            title={'DV - Разработка'}
            popupText={'Разработка - предоставляем команду разработчиков под веб, мобильные приложения и сервисы'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'100'}
            elementNumber={3}
            elementLetters={'RE'}
            title={'RE - Исследования'}
            popupText={'Исследования - проводим первичные и вторичные исследования рынка, западной практики'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'99'}
            elementNumber={4}
            elementLetters={'CO'}
            title={'CO - Конкуренты'}
            popupText={'Конкуренты - проводим глубинный конкурентный анализ, а также анализ продуктов-заменителей'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'102'}
            elementNumber={5}
            elementLetters={'UC'}
            title={'UC - Пользовательский опыт'}
            popupText={'Пользовательский опыт - тестируем опыт пользователя по выбору и использованию продукта'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'101'}
            elementNumber={6}
            elementLetters={'AGL'}
            title={'AGL - Методология AGILE'}
            popupText={'Методология AGILE - используем гибкую методологию разработки AGILE'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.purple}
            key={'103'}
            elementNumber={7}
            elementLetters={'DE'}
            title={'DE - Дизайн'}
            popupText={'Дизайн - создаём визуальное решение на основе пользовательского опыта'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY9_2 = [
    <>
        <ChemicalElement
            color={COLOR.yellow}
            key={'112'}
            elementNumber={1}
            elementLetters={'PA'}
            title={'PA - Упаковка'}
            popupText={'Создаём у потребителей желание приобрести продукт'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'113'}
            elementNumber={2}
            elementLetters={'DM'}
            title={'DM - Интернет-маркетинг'}
            popupText={'Интернет-маркетинг - имеем 15-летний опыт комплесного интернет-маркетинга'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'114'}
            elementNumber={3}
            elementLetters={'SA'}
            title={'SA - Продажи'}
            popupText={'Продажи - строим отдел экспертных продаж под ключ'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.yellow}
            key={'115'}
            elementNumber={4}
            elementLetters={'CRE'}
            title={'CRE - Креатив'}
            popupText={'Креатив - создаём уникальные креативные концепции и визуализацию'}
            isTop={false}
        />
    </>
]
export const FIRST_ELEMENT_ARRAY9_3 = [
    <>
        <ChemicalElement
            color={COLOR.blue}
            key={'116'}
            elementNumber={1}
            elementLetters={'NW'}
            title={'NW - Связи и партнёры'}
            popupText={'Знакомства и партнёрства - обеспечиваем нетворкинг с крупнейшими игроками рынка'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'117'}
            elementNumber={2}
            elementLetters={'LA'}
            title={'LA - Юр. сопровождение'}
            popupText={'Юр. сопровождение - обеспечиваем полное юридическое сопровождение проекта'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'118'}
            elementNumber={3}
            elementLetters={'TP'}
            title={'TP - Налоговый учёт'}
            popupText={'Налоговый учёт - обеспечиваем правильный налоговый учёт и оформление активов'}
            isTop={false}
        />
        <ChemicalElement
            color={COLOR.blue}
            key={'119'}
            elementNumber={4}
            elementLetters={'ME'}
            title={'ME - Менторы'}
            popupText={'Менторы - предоставляем доступ к сильнейшим менторам'}
            isTop={false}
        />
    </>
]
const LIST_ARRAY1 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'211'}
        elementsArray={FIRST_ELEMENT_ARRAY}
    />,
    <BlockOfElementsCases
        title={'Продвижение'}
        key={'212'}
        elementsArray={FIRST_ELEMENT_ARRAY1}
    />,
    <BlockOfElementsCases
        title={'Среда'}
        key={'213'}
        elementsArray={FIRST_ELEMENT_ARRAY2}
    />
]
const LIST_ARRAY2 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'221'}
        elementsArray={FIRST_ELEMENT_ARRAY2_1}
    />,
    <BlockOfElementsCases
        title={'Среда'}
        key={'223'}
        elementsArray={FIRST_ELEMENT_ARRAY2_3}
    />
]
const LIST_ARRAY3 = [
    <BlockOfElementsCases
        title={'Продвижение'}
        key={'232'}
        elementsArray={FIRST_ELEMENT_ARRAY3_2}
    />,
    <BlockOfElementsCases
        title={'Среда'}
        key={'233'}
        elementsArray={FIRST_ELEMENT_ARRAY3_3}
    />
]
const LIST_ARRAY4 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'241'}
        elementsArray={FIRST_ELEMENT_ARRAY4_1}
    />,
    <BlockOfElementsCases
        title={'Среда'}
        key={'243'}
        elementsArray={FIRST_ELEMENT_ARRAY4_3}
    />
]
const LIST_ARRAY5 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'251'}
        elementsArray={FIRST_ELEMENT_ARRAY5_1}
    />,
    <BlockOfElementsCases
        title={'Продвижение'}
        key={'252'}
        elementsArray={FIRST_ELEMENT_ARRAY5_2}
    />
]
const LIST_ARRAY6 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'261'}
        elementsArray={FIRST_ELEMENT_ARRAY6_1}
    />,
    <BlockOfElementsCases
        title={'Продвижение'}
        key={'262'}
        elementsArray={FIRST_ELEMENT_ARRAY6_2}
    />
]
const LIST_ARRAY7 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'271'}
        elementsArray={FIRST_ELEMENT_ARRAY7_1}
    />
]
const LIST_ARRAY8 = [
    <BlockOfElementsCases
        title={'Продукт'}
        key={'281'}
        elementsArray={FIRST_ELEMENT_ARRAY8_1}
    />
]
const LIST_ARRAY9 = [
    <BlockOfElementsCases
        title={'Продвижение'}
        key={'292'}
        elementsArray={FIRST_ELEMENT_ARRAY9_2}
    />,
    <BlockOfElementsCases
        title={'Среда'}
        key={'293'}
        elementsArray={FIRST_ELEMENT_ARRAY9_3}
    />
]

export const BLOCKS_FOR_CASES = [
    <BlockForCases
        title={'Крупнейший в СНГ ресурс для мам и малышей BABY.RU'}
        key={'314'}
        subTitle={'Baby.ru'}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        secondIconMobile={<FireMobile />}
        firstAchievementText={'13 млн. пользователей в месяц'}
        secondAchievementText={'Самый большой сайт для мам в РФ'}
        underAchievementText={'2011 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY1}
        isRevers={true}
        imageSizeWH={[575, 404]}
        imageSizeMobileWH={[330, 225]}
        imagePath={'/images/babyRublock.png'}
        linkPath={'https://www.baby.ru/'}
    />,
    <BlockForCases
        title={'Международый портал для мам Moms.com'}
        key={'315'}
        subTitle={'Moms.com'}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        secondIconMobile={<FireMobile />}
        firstAchievementText={'500 000 активных пользователей'}
        secondAchievementText={'Успешная продажа бизнеса канадскому издательству'}
        underAchievementText={'2018 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY2}
        isRevers={false}
        imageSizeWH={[575, 300]}
        imageSizeMobileWH={[330, 160]}
        imagePath={'/images/moms.png'}
        linkPath={'https://www.moms.com/'}
    />,
    <BlockForCases
        title={'Digital агентство фармацевтических брендов Medcraft'}
        key={'316'}
        subTitle={'Medcraft.ru'}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        secondIconMobile={<FireMobile />}
        firstAchievementText={'Конктракты с крупнейшими фарм брендами'}
        secondAchievementText={'Эксклюзивные агентсткие продукты'}
        underAchievementText={'2007 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY3}
        isRevers={true}
        imageSizeWH={[575, 300]}
        imageSizeMobileWH={[330, 150]}
        imagePath={'/images/medcraftRu.png'}
        linkPath={'https://medcraft.ru/'}
    />,
    <BlockForCases
        title={'Сервис мониторинга репутации врача Doctoronboard'}
        key={'317'}
        subTitle={'Doctoronboard.ru'}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        secondIconMobile={<FireMobile />}
        firstAchievementText={'Популярный сервис для врачей'}
        secondAchievementText={'Публикации в СМИ и отзывы авторитетных врачей'}
        underAchievementText={'2019 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY4}
        isRevers={false}
        imageSizeWH={[575, 280]}
        imageSizeMobileWH={[330, 150]}
        imagePath={'/images/doctoronboard.png'}
        linkPath={'https://doctoronboard.ru/'}
    />,
    <BlockForCases
        title={'Приложение для мам Happymama'}
        key={'318'}
        subTitle={'Happymama'}
        firstIcon={<Fire />}
        secondIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        secondIconMobile={<FireMobile />}
        firstAchievementText={'Премия Рунета 2018 за лучшее mobile приложение'}
        secondAchievementText={'TOP 3 рекомендаций IOS и Android'}
        underAchievementText={'2016 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY5}
        isRevers={true}
        imageSizeWH={[500, 500]}
        imageSizeMobileWH={[330, 330]}
        imagePath={'/images/happymama.png'}
        linkPath={'https://play.google.com/store/apps/details?id=ru.babyk.android&hl=ru'}
    />,
    <BlockForCases
        title={'Сервис повторных консультаций с врачами Tetamed'}
        key={'319'}
        subTitle={'Tetamed'}
        firstIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        firstAchievementText={'Тысячи пациентов смогли общаться с врачами'}
        underAchievementText={'2018 - 2018'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY6}
        isRevers={false}
        imageSizeWH={[575, 280]}
        imageSizeMobileWH={[330, 150]}
        imagePath={'/images/tetamed.png'}
        linkPath={''}
        isNeedButton={false}
    />,
    <BlockForCases
        title={'Медицинская карта пациента онлайн Medkarta'}
        key={'320'}
        subTitle={'Medkarta'}
        firstIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        firstAchievementText={'500 000 активных пользователей'}
        underAchievementText={'2010-2012'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY7}
        isRevers={true}
        imageSizeWH={[500, 400]}
        imageSizeMobileWH={[330, 260]}
        imagePath={'/images/medkarta.png'}
        linkPath={''}
        isNeedButton={false}
    />,
    <BlockForCases
        title={'Портал для репродуктологов Humrep'}
        key={'321'}
        subTitle={'Humrep'}
        firstIcon={<Fire />}
        firstIconMobile={<FireMobile />}
        firstAchievementText={'90% репродуктологов зарегистрировались на площадке'}
        underAchievementText={'2009-2012'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY8}
        isRevers={false}
        imageSizeWH={[500, 290]}
        imageSizeMobileWH={[330, 200]}
        imagePath={'/images/humrep.png'}
        linkPath={''}
        isNeedButton={false}
    />,
    <BlockForCases
        title={'Digital агентство брендов для мам и малышей Babybrandlab'}
        key={'322'}
        subTitle={'Babybrandlab.ru'}
        secondIcon={<Fire />}
        secondIconMobile={<FireMobile />}
        secondAchievementText={'Контракты с крупнейшими брендами для мам и малышей'}
        underAchievementText={'2015 - настоящее время'}
        aboveListTitle={'Использованные элементы методологии'}
        listsArray={LIST_ARRAY9}
        isRevers={true}
        imageSizeWH={[575, 260]}
        imageSizeMobileWH={[330, 150]}
        imagePath={'/images/babybrandlab.png'}
        linkPath={'https://babybrandlab.ru/'}
    />
] 
