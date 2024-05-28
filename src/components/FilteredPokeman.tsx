import { useState } from "react";
import PokemanCard from "./PokemanCard";
import SearchInput from "./SearchInput";


const FilteredPokeman = ({ pokemons }: any) => {

    const [filteredData, setFilteredData] = useState(pokemons);

    const handleSearch = (query: string) => {
        if (query === null) {
            setFilteredData(pokemons);
        } else {
            const filtered = pokemons.filter((pokemon: { name: string; }) => pokemon.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredData(filtered);
        }
    };

    return (
        <>
            <div className="mt-10">
                <SearchInput onSearch={handleSearch} />
            </div>
            <PokemanCard data={filteredData || []} />
        </>
    );
};

export default FilteredPokeman;
