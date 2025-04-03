import cars from "../../data/carsData";

const filterFunc = () => {
    const priceRange = (lowest, highest, value) => lowest <= value && value <= highest;

    const inRange = cars.filter(car => priceRange(car.price));
    console.log(inRange)
    return inRange;
};

export default filterFunc;