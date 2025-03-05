import PropTypes from"prop-types";

import SearchBar from"./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable(
    {products, filterData, filterAction, intStockOnlyData, intStockOnlyAction}){
        return(
            <div>
                <SearchBar
                    filterText={filterData}
                    intStockOnly={intStockOnlyData}
                    onFilterTextChange={filterAction}
                    onnInStockOnlyChange={intStockOnlyAction}
                />
                <ProductTable
                    products={products}
                    filterText={filterData}
                    intStockOnly={intStockOnlyData}
                />
            </div>
        );
    }

    FilterableProductTable.PropTypes = {
        products: PropTypes.object.isRequired,
        filterData: PropTypes.string.isRequired,
        filterData: PropTypes.func.isRequired,
        intStockOnlyData: PropTypes.bool.isRequired,
        intStockOnlyAction: PropTypes.func.isRequired,
    };
