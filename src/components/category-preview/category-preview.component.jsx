import './category-preview.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';

import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={title} className='title'>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .map((product, index) =>
                            index < 4 &&
                            <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;