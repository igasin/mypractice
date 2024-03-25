import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'

export function EmailEditor() {
	return (
		<div>
			<h1>Email Editor</h1>
			<div className={styles.card}>
				<div className={styles.editor}>
					Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
					deserunt praesentium suscipit eos minus, quidem, fugit excepturi cum
					perspiciatis sed similique, ex delectus! Nihil eaque, maiores
					doloremque error eum odio!
				</div>
				<div className={styles.action}>
					<div className={styles.tools}>
						<button>
							<Eraser size={17} />
						</button>
						<button>
							<Bold size={17} />
						</button>
						<button>
							<Italic size={17} />
						</button>
						<button>
							<Underline size={17} />
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	)
}
