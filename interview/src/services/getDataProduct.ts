import axios from 'axios'
import { IProduct } from '../components/Product/Product.interface'

export const getDataProduct = (
	setProduct: (product: IProduct | null) => void
) => {
	const fetchingProductData = async () => {
		try {
			const response = await axios.get('https://dummyjson.com/products/1')
			const data = response.data
			setProduct(data)
		} catch (error) {
			console.error('Error fetching product data:', error)
		}
	}

	fetchingProductData()
}
