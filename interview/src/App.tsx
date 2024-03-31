import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './components/Product/Product'
import { IProduct } from './components/Product/Product.interface'
import { getDataProduct } from './services/getDataProduct'

export const App = () => {
	const [product, setProduct] = useState<IProduct | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		getDataProduct(setProduct)
	}, [])

	const handleViewProduct = () => {
		setIsOpen(true)
	}

	return (
		<div className='App'>
			<button onClick={handleViewProduct}>Get Product Data</button>
			{product && isOpen && <Product product={product} />}
		</div>
	)
}
