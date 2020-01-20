import React, { ChangeEvent } from 'react';
type Product = { id: number, category: string, price: string, stocked: boolean, name: string }
type ProductsByCategory = { [category: string]: Product[] };


const ProductsData: Product[] = [
    { id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];


function groupProductsByCategory(products: Product[]) {
    var productsByCategory: ProductsByCategory = {};
    products.forEach(product => {
        if (productsByCategory[product.category] == null) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    }

    );
    return productsByCategory;
}

function createFilter(obj: Readonly<{ nameFilterText: string; showOnlyStocked: boolean; }>): (product: Product) => boolean {
    if (obj.showOnlyStocked === false && !!obj.nameFilterText === false) {
        return () => true;
    }
    else if (obj.showOnlyStocked) {
        return (product) => product.stocked === true && product.name.includes(obj.nameFilterText);
    }
    else {
        return (product) => product.name.includes(obj.nameFilterText);
    }
}

class FilteredProducts extends React.Component<{ products: Product[] }, { nameFilterText: string, showOnlyStocked: boolean }> {
    constructor(props: { products: Product[] }) {
        super(props);
        this.state = { nameFilterText: '', showOnlyStocked: false };
        this.handleShowOnlyStockedChange = this.handleShowOnlyStockedChange.bind(this);
        this.handleNameFilterChange = this.handleNameFilterChange.bind(this);

    }

    render() {
        var filter = createFilter(this.state);
        var productsByCategory = groupProductsByCategory(this.props.products.filter(filter))

        return (
            < div >
                <ProductNameFilter onChange={this.handleNameFilterChange} />
                <br />
                <ProductStockFilter onChange={this.handleShowOnlyStockedChange} />
                <ProductTable productsByCategory={productsByCategory} />
            </div>
        );
    }


    handleNameFilterChange(nameFilterText: string) {
        this.setState({ nameFilterText });
    }

    handleShowOnlyStockedChange(showOnlyStocked: boolean) {
        this.setState({ showOnlyStocked });
    }


}

class ProductTable extends React.Component<{ productsByCategory: ProductsByCategory }> {
    render() {
        var productsByCategory = this.props.productsByCategory;
        var categories = Object.keys(productsByCategory);
        return (
            <table>
                <ProductTableHeader />
                <tbody>
                    {
                        categories.map(category =>
                            <React.Fragment key={category}>
                                <CategoryRow key={category} category={category}>
                                    <ProductRows products={productsByCategory[category]} />
                                </CategoryRow>
                            </React.Fragment>)
                    }
                </tbody>
            </table>
        );
    }

}

class ProductTableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr><th>Name</th><th>Price</th></tr>
            </thead>);
    }

}

class CategoryRow extends React.Component<{ category: string, }>
{
    render() {
        return (
            <>
                <tr><td style={{ fontWeight: 'bold' }} colSpan={2}>{this.props.category}</td></tr>
                {this.props.children}
            </>);

    }

}
class ProductRows extends React.Component<{ products: Product[] }> {
    render() {
        var rows = this.props.products.map(product => <ProductRow key={product.id} product={product} />);
        return rows;
    }

}

class ProductRow extends React.Component<{ product: Product }> {
    render() {
        var product = this.props.product;
        var style = product.stocked ? {} : { color: 'red' };
        return <tr><td style={style}>{product.name}</td><td>{product.price}</td></tr>;
    }
}


class ProductNameFilter extends React.Component<{ onChange: (nameFilterText: string) => void }> {
    constructor(props: { onChange: (nameFilterText: string) => void }) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (<input onChange={this.handleChange} type="text" placeholder="Search..." />)
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.props.onChange(event.target.value);
    }
}

class ProductStockFilter extends React.Component<{ onChange: (showOnlyStocked: boolean) => void }>  {
    constructor(props: { onChange: (showOnlyStocked: boolean) => void }) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.handleChange} />
                <label>Only show products in stock</label>
            </div>
        )
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.props.onChange(event.target.checked);
    }



}


const Products: React.FC = () => {
    return (<div>
        <FilteredProducts products={ProductsData} />
    </div>);
};

export default Products;


