import parse from 'html-react-parser'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import { useRef, useState } from 'react'
import styles from './EmailEditor.module.scss'
import { TStyle, applyStyle } from './apply-style'

export function EmailEditor() {
	const [text, setText] =
		useState(`Hey! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
	deserunt praesentium suscipit eos minus, quidem, fugit excepturi cum
	perspiciatis sed similique, ex delectus! Nihil eaque, maiores
	doloremque error eum odio!`)

	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)

	const textRef = useRef<HTMLTextAreaElement | null>(null)

	const updateSelection = () => {
		if (!textRef.current) return
		setSelectionStart(textRef.current.selectionStart)
		setSelectionEnd(textRef.current.selectionEnd)
	}

	const applyFormat = (type: TStyle) => {
		const selectedText = text.substring(selectionStart, selectionEnd)

		if (!selectedText) return

		const before = text.substring(0, selectionStart)

		const after = text.substring(selectionEnd)

		setText(before + applyStyle(type, selectedText) + after)
	}

	return (
		<div>
			<h1>Email Editor</h1>
			<div className={styles.preview}>{parse(text)}</div>
			<div className={styles.card}>
				<textarea
					ref={textRef}
					contentEditable
					className={styles.editor}
					spellCheck='false'
					onSelect={updateSelection}
					value={text}
					readOnly={false}
					onChange={e => setText(e.target.value)}
				>
					{text}
				</textarea>
				<div className={styles.action}>
					<div className={styles.tools}>
						<button onClick={() => setText('')}>
							<Eraser size={17} />
						</button>
						<button onClick={() => applyFormat('bold')}>
							<Bold size={17} />
						</button>
						<button onClick={() => applyFormat('italic')}>
							<Italic size={17} />
						</button>
						<button onClick={() => applyFormat('underline')}>
							<Underline size={17} />
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	)
}
