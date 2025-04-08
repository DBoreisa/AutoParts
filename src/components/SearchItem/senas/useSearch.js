import { useState } from "react";
import cars from "../../data/carsData";

const useSearch = () => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredItems, setFilteredItems] = useState(cars);

    const searchFunc = (searchTerm) => {
        setSearchItem(searchTerm);
        setFilteredItems(
            cars.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    return { searchItem, filteredItems, searchFunc };
};

export default useSearch;