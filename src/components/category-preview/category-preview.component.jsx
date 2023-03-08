import ProductCard from '../../components/product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h2>
            <Preview>
                {
                    products
                        .map((product, index) =>
                            index < 4 &&
                            <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;