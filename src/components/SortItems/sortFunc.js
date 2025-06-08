const sortFunc = (sortBy, products) => {
    let sortedProducts = [...products]; // Copy to prevent mutation

    switch (sortBy) {
        case "Alphabetical":
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case "RevAlpahebetical":
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        case "Price":
            return sortedProducts.sort((a, b) => a.price - b.price);
        case "RevPrice":
            return sortedProducts.sort((a, b) => b.price - a.price);
        case "Date":
            return sortedProducts.sort((a, b) => b.id - a.id);
        default:
            return sortedProducts;
    };
};

export default sortFunc;