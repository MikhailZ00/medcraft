import * as React from 'react'
import { ListItem } from 'components/list-item';


const ENVIRONMENT_LIST_ARRAY_1 = [
	<ListItem 
		title={'Отраслевая экспертиза'} 
		key={'Отраслевая экспертиза'} 
		description={'Отраслевая экспертиза - имеем высокий уровени экспертизы в pharma и digital.'} 
	/>, 
	<ListItem 
		title={'Брейншторминг'} 
		key={'Брейншторминг'} 
		description={'Брейншторминг - обеспечиваем мозговые штурмы для создания инновационных гипотез.'}
	/>, 
	<ListItem 
		title={'Команда'} 
		key={'Команда'} 
		description={'Команда - предоставляем собственную профессиональную команду под реализацию проекта.'} 
	/>
]
const ENVIRONMENT_LIST_ARRAY_2 = [
	<ListItem 
		title={'Фармацевтические бренды'} 
		key={'Фармацевтические бренды'} 
		description={'Фармацевтические бренды - имеем контакты более чем с 120 крупнейшими мировыми фармацевтическими компаниями.'} 
	/>, 
	<ListItem 
		title={'Врачи и фармацевты'} 
		key={'Врачи и фармацевты'} 
		description={'Врачи и фармацевты - имеем контакт более чем с 350 врачами по 50 специализациям, а также с 2000 фармацевтами.'} 
	/>, 
	<ListItem 
		title={'Менторы'} 
		key={'Менторы'} 
		description={'Менторы - предоставляем доступ к сильнейшим менторам.'} 
	/>,
]
const ENVIRONMENT_LIST_ARRAY_3 = [
	<ListItem 
		title={'Инфраструктура'} 
		key={'Инфраструктура'}  
		description={'Инфраструктура - создаём инфраструктуру для построения эффективных процессов.'} 
	/>,   
	<ListItem 
		title={'Налоговое планирование'} 
		key={'Налоговое планирование'} 
		description={'Налоговый учёт - обеспечиваем правильный налоговый учёт и оформление активов.'} 
	/>,
	<ListItem 
		title={'ИТ оборудоование'} 
		key={'ИТ оборудоование'} 
		description={'ИТ оборудование - предоставляем оборудование для работы.'} 
	/>, 
	<ListItem 
		title={'Бухгалтерское обслуживание и учет'} 
		key={'Бухгалтерское обслуживание и учет'} 
		description={'Бух. обслуживание - обеспечиваем полное бухгалтерское сопровождение проекта.'} 
	/>, 
	<ListItem 
		title={'Юридическое сопровождение'} 
		key={'Юридическое сопровождение'} 
		description={'Юр. сопровождение - обеспечиваем полное юридическое сопровождение проекта.'} 
	/> 
]

export const ENVIRONMENT_PAGE_CONTENT = {
	listArray: [
		{
			listContent: ENVIRONMENT_LIST_ARRAY_1,
			title: 'Отраслевая экспертиза',
			image: '/images/expert.png',
			imageMobile: '/images/expertmob.png',
			imageWidth: '523px',
			imageHeight: '520px',
			imageWidthMob: '280px',
			imageHeightMob: '278px',
			orientation: 'right',
		},
		{
			listContent: ENVIRONMENT_LIST_ARRAY_2,
			title: 'Нетворкинг и партнерства',
			image: '/images/network.png',
			imageMobile: '/images/networkmob.png',
			imageWidth: '606px',
			imageHeight: '480px',
			imageWidthMob: '330px',
			imageHeightMob: '264px',
			orientation: 'left',
		},
		{
			listContent: ENVIRONMENT_LIST_ARRAY_3,
			title: 'Инфраструктура',
			image: '/images/escort.png',
			imageMobile: '/images/escortmob.png',
			imageWidth: '607px',
			imageHeight: '465px',
			imageWidthMob: '330px',
			imageHeightMob: '255px',
			orientation: 'right',
		}		
	]
}
