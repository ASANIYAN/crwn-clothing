import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    console.log(categoriesMap, "in categories Preview");

    return (
        <Fragment>
            { categoriesMap &&
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    ); 
                })
            }
        </Fragment>
    );
}
 
export default CategoriesPreview;