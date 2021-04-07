import { Product } from 'actions/redux/product/interfaces';
import * as React from 'react';
import { Card } from 'react-bootstrap';
import { TranslateFunction } from 'react-localize-redux/es';
import { Link } from 'react-router-dom';

interface Props {
	product: Product;
	translate: TranslateFunction;
	onDeleteProductSelected: () => void;
}

const ProductView: React.FC<Props> = (props: Props) => {
	const { product, translate } = props;
	function handleDeleteProduct() {
		const { onDeleteProductSelected } = props;
		onDeleteProductSelected()
	}
	return (
		<Card>
			<Card.Header> {product.name}</Card.Header>
			<Card.Body>
				{product.description}
				<br />
				<Link to={{ pathname: `product/${product.id}` }}> {translate('products.updateProduct')}</Link>
				<button type="button" onClick={handleDeleteProduct}>{translate('products.deleteProduct')}</button>
			</Card.Body>
			<Card.Img src={product.picture} />
		</Card>
	);
};

export default ProductView;
