import {
	IconDefinition,
	faCat,
	faCoffee,
	faHeart,
	faHome,
	faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './RandomIcon.module.scss'

export const RandomIcon = () => {
	const [randomIcon, setRandomIcon] = useState<IconDefinition | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const generateRandomIcon = () => {
		setIsLoading(true)
		const icons = [faCoffee, faHeart, faStar, faHome, faCat]
		const randomIndex = Math.floor(Math.random() * icons.length)
		const selectedIcon = icons[randomIndex]
		setTimeout(() => {
			setRandomIcon(selectedIcon)
			setIsLoading(false)
		}, 3000)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.icon}>
				{randomIcon && <FontAwesomeIcon icon={randomIcon} />}
			</div>
			<button onClick={generateRandomIcon} disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Show Random Icon'}
			</button>
		</div>
	)
}
