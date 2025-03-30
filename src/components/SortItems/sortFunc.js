const sortFunc = (sortBy, cars) => {
    let sortedCars = [...cars]; // Copy to prevent mutation

    switch (sortBy) {
        case "Alphabetical":
            return sortedCars.sort((a, b) => a.name.localeCompare(b.name));
        case "RevAlpahebetical":
            return sortedCars.sort((a, b) => b.name.localeCompare(a.name));
        case "Price":
            return sortedCars.sort((a, b) => a.price - b.price);
        case "RevPrice":
            return sortedCars.sort((a, b) => b.price - a.price);
        case "Date":
            return sortedCars.sort((a, b) => b.id - a.id);
        default:
            return sortedCars;
    };
};

export default sortFunc;