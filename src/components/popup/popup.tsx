import * as React from 'react';
import { isMobile } from 'react-device-detect';
import {
	useState,
	ReactElement,
	useCallback,
	forwardRef,
	RefObject,
	useRef
} from 'react';
import Whatsapp from './icons/whatsapp.svg'
import Telegram from './icons/telegram.svg'
import Viber from './icons/viber.svg'
import Sms from './icons/sms.svg'
import Tel from './icons/tel.svg'
import Email from './icons/email.svg'
import Exit from './icons/exit.svg'
import MaskedInput from 'react-text-mask'
import { Bind } from '../../constants/binds'
import classNames from 'classnames'

import './popup.scss';


const scrollToRef = (ref: RefObject<HTMLDivElement>) =>
	 (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => ref.current.scrollIntoView();

interface PopupProp {
	closePopup: () => void
}

export const Popup = forwardRef(({
	closePopup
}: PopupProp, ref: RefObject<HTMLDivElement>): ReactElement => {

	const inputRef = useRef(null);
	const refToInputBlock = useRef(null);

	const [isSelected, setSelected] = useState(Bind.NOTHING);
	const [inputValue, setInput] = useState('');
	const [inputDescription, setInputDescription] = useState('');
	const [successText, setTextSuccess] = useState(false);
	const [activeButton, setButton] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const validTelephone = /^\+7[ ]\(?([0-9]{3})\)[ ]([0-9]{3})[-]([0-9]{4})$/;

	const handleChangeDescription = useCallback((event) => {
		setInputDescription(event.target.value);
		(validTelephone.test(inputValue) || validEmail.test(inputValue)) && event.target.value !== '' ? setButton(true) : setButton(false);
	}, [inputDescription]);

	const handleChange = useCallback((event) => {
		setInput(event.target.value);
		(validTelephone.test(event.target.value) || validEmail.test(event.target.value)) && inputDescription !== '' ?
			setButton(true) : setButton(false);
	}, [inputValue, activeButton, successText, errorMessage]);

	const handleChangeSelected = useCallback((el: Bind) => {
		if ((isSelected === Bind.EMAIL) || (el === Bind.EMAIL)) {
			setInput('')
			setButton(false);
		}
		setSelected(el)
	}, [isSelected, activeButton, successText, errorMessage]);

	const sendEmail = useCallback((data: string, type: Bind, description: string) => {
		setButton(false);
		const userRequestJson = { type: data, data: type, description };
		fetch("https://medcraft.fund/mailfund.php", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(userRequestJson),
			mode: 'no-cors'
		})
			.then(
				() => {
					setInput('');
					setInputDescription('');
					setTextSuccess(true);
					setSelected(Bind.NOTHING);
				},
				() => {
					setErrorMessage(true);
				}
			)
	}, [inputValue, errorMessage, isSelected, successText, activeButton, inputDescription]);

	const setSelStartEnd = (numb: number) => {
		inputRef.current.inputElement.selectionStart = numb;
		inputRef.current.inputElement.selectionEnd = numb;
	}

	const onClickInput = useCallback((event) => {
		if (event.target.value === '+7 (___) ___-____') {
			inputRef.current.inputElement.value = '+7 (___) ___-____'
			inputRef.current.inputElement.selectionStart = 4;
			inputRef.current.inputElement.selectionEnd = 4;
		}
		else {
			const input = event.target.value.match(/\d{1}/g);
			if (input.length >= 0 && input.length < 4) {
				setSelStartEnd(input.length + 3);
			}
			else if (input.length >= 4 && input.length <= 6) {
				setSelStartEnd(input.length + 5);
			}
			else if (input.length >= 7 && input.length < 11) {
				setSelStartEnd(input.length + 6);
			}
		}
	}, [inputValue]);


	return (
		<div className={isMobile ? 'popup-box-mob' : 'popup-box'} ref={ref}>
			<div onClick={() => { closePopup() }} className={isMobile ? 'exit-logo-mob' : 'exit-logo'}><Exit /></div>
			{!errorMessage && !successText ?
				<>
					<div className={isMobile ? 'popup-title-mob' : 'popup-title'}>Oбсудить проект с инвестором</div>
					<div className={isMobile ? 'popup-description-mob' : 'popup-description'}>Выберите удобный способ связи:</div>
					<div className={isMobile ? 'box-of-buttons-mob' : 'box-of-buttons'} onClick={scrollToRef(refToInputBlock)}>
						<div className={isMobile ? 'box-of-buttons-first-mob' : 'box-of-buttons-first'}>
							<div onClick={() => handleChangeSelected(Bind.WHATSAPP)}
								className={isMobile ?
									isSelected === Bind.WHATSAPP ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.WHATSAPP ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Whatsapp />
									<div className={'text-button'}>WhatsApp</div>
								</div>
							</div>
							<div onClick={() => handleChangeSelected(Bind.TELEGRAM)}
								className={isMobile ?
									isSelected === Bind.TELEGRAM ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.TELEGRAM ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Telegram />
									<div className={'text-button'}>Telegram</div>
								</div>
							</div>
							<div onClick={() => handleChangeSelected(Bind.VIBER)}
								className={isMobile ?
									isSelected === Bind.VIBER ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.VIBER ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Viber />
									<div className={'text-button'}>Viber</div>
								</div>
							</div>
						</div>
						<div className={isMobile ? 'box-of-buttons-second-mob' : 'box-of-buttons-second'}>
							<div onClick={() => handleChangeSelected(Bind.SMS)}
								className={isMobile ?
									isSelected === Bind.SMS ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.SMS ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Sms />
									<div className={'text-button'}>sms</div>
								</div>
							</div>
							<div onClick={() => handleChangeSelected(Bind.TEL)}
								className={isMobile ?
									isSelected === Bind.TEL ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.TEL ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Tel />
									<div className={'text-button'}>tel</div>
								</div>
							</div>
							<div onClick={() => handleChangeSelected(Bind.EMAIL)}
								className={isMobile ?
									isSelected === Bind.EMAIL ? 'button-selected-mob' : 'button-not-selected-mob'
									:
									isSelected === Bind.EMAIL ? 'button-selected' : 'button-not-selected'}>
								<div className={'icon-button'}>
									<Email />
									<div className={'text-button'}>email</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classNames(isMobile ? 'popup-project-description-mob' : 'popup-project-description', 'popup-project-style')}>
						Расскажите вкратце о вашем проекте:
				<a className='red-text'> *</a>
					</div>
					<textarea
						className={classNames(
							isMobile ? 'input-description-project-mob' :
								['input-margin', 'input-description-project'], 'popup-input-description'
						)}
						placeholder="Начните печатать..."
						value={inputDescription}
						onChange={handleChangeDescription}
					/>

					{isSelected === Bind.EMAIL ?
						<div className={isMobile ? 'popup-description-mob' : 'popup-description'}>
							Ваша почта:
					<a className='red-text'> *</a>
						</div>
						:
						<div className={isMobile ? 'popup-description-mob' : 'popup-description'}>
							Ваш номер телефона:
					<a className='red-text'> *</a>
						</div>
					}
					<div ref={refToInputBlock}>
						{isSelected === Bind.EMAIL ?
							<div className={isMobile ? 'input-button-mob' : 'input-button'}>
								<input
									className={classNames(
										isMobile ? 'input-margin-mob' : 'input-margin',
										'input-email'
									)}
									placeholder="example@email.com"
									value={inputValue}
									onChange={handleChange}
								/>
								<button
									onClick={activeButton ? () => sendEmail(inputValue, isSelected, inputDescription) : undefined}
									className={activeButton ? 'button-send' : 'button-not-send'}
								>
									Отправить
								</button>
							</div>
							:
							<div className={isMobile ? 'input-button-mob' : 'input-button'}>
								<MaskedInput className={isMobile ? 'input-margin-mob' : 'input-margin'}
									mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
									placeholder="+7 (___) ___-____"
									value={inputValue || '+7 (___) ___-____'}
									onChange={handleChange}
									ref={inputRef}
									onClick={onClickInput}
									onMouseDown={onClickInput}
								/>
								<button
									onClick={activeButton ? () => sendEmail(inputValue, isSelected, inputDescription) : undefined}
									className={isSelected != Bind.NOTHING && activeButton ? 'button-send' : 'button-not-send'}
								>
									Отправить
								</button>
							</div>
						}
					</div>
				</>
				:
				<div className='text-after-sending'>
					{successText && <div className='green-text'>
						Спасибо за обращение, мы ответим в ближайшее время!
					</div>}
					{errorMessage && <div className='red-text'>
						Извините, произошла какая-то ошибка. Повторите попытку.
			</div>}
				</div>}
		</div>
	)
});
