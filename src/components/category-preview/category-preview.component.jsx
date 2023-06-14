import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.jsx";
import { CategoryPreviewContainer } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link className="title" to={title}> {title.toUpperCase()} </Link>
            </h2>
            <section className="preview">
                {
                    products
                        .filter((_, idx) => idx > 4)
                        .map((product) => 
                        <ProductCard key={product.id} product={product} /> )
                }
            </section>
        </CategoryPreviewContainer>
    );
}
 
export default CategoryPreview;