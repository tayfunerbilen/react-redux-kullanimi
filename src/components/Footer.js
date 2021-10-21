import { setLanguage, setDarkMode } from "../stores/site"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../stores/auth';

function Footer() {

	const dispatch = useDispatch()
	const { dark, language } = useSelector(state => state.site)
	const { user } = useSelector(state => state.auth)
	const languages = ['tr', 'en']

	const handleLanguage = lang => {
		dispatch(setLanguage(lang))
	}

	return (
		<div>
			footer
			<div>
				{languages.map((lang, index) => (
					<button onClick={() => handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
				))}
			</div>
			<div>
				<button onClick={() => dispatch(setDarkMode())}>
					{dark ? 'Light Moda geç' : 'Dark moda geç'}
				</button>
			</div>
			{user && (
				<div>
					<button onClick={() => dispatch(logout())}>Çıkış yap</button>
				</div>
			)}
		</div>
	)
}

export default Footer