import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

interface IProduct {
	title: string
	description: string
	images: string[]
}

export const App = () => {
	const [product, setProduct] = useState<IProduct | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const getProductData = async () => {
			try {
				const response = await axios.get('https://dummyjson.com/products/1')
				const data = response.data
				setProduct(data)
			} catch (error) {
				console.error('Error fetching product data:', error)
			}
		}

		getProductData()
	}, [])

	const handleViewProduct = () => {
		setIsOpen(true)
	}

	return (
		<div className='App'>
			<button onClick={handleViewProduct}>Get Product Data</button>
			{product && isOpen && (
				<div>
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<img src={product.images[0]} alt={product.title} />
				</div>
			)}
		</div>
	)
}
