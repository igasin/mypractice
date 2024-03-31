import { IProduct } from './Product.interface'

export const Product = ({ product }: { product: IProduct }) => {
	return (
		<div>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<img src={product.images[0]} alt={product.title} />
		</div>
	)
}
