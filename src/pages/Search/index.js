import React, { useState, useEffect } from 'react';

import Functions from '../../functions/functions';

const Search = () => {

    const [searchType, setSearchType] = useState("");
    const [position, setPosition] = useState("");
    const [insertedArray, setInsertedArray] = useState([]);
    const [valueToSearch, setValueToSearch] = useState("");

    useEffect(() => {

        if (searchType === "linearSearch") {
            setPosition(Functions.linearSearch(insertedArray, valueToSearch));
        } else if (searchType == "binarySearch") {
            setInsertedArray(Functions.mergeSort(insertedArray));
            setPosition(Functions.binarySearch(Functions.mergeSort(insertedArray), 0, insertedArray.length, valueToSearch));
        }

    }, [valueToSearch]);

    useEffect(() => {
        if (position == -1) {
            setPosition("Posição não encontrada");
        }
    }, [position]);

    function handleSearchSelection(event) {
        event.preventDefault();

        const id = event.target.id;

        document.querySelectorAll(".selected").forEach((item) => {
            item.classList = "";
        });
        document.querySelectorAll(".search").forEach((item) => {
            item.style.display = "none";
        });
        document.getElementById(id).classList.add("selected");
        document.getElementById(id).style.display = "block";

        setSearchType(id);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const value = document.querySelector('input[name="array"]').value;
        const valueToSearch = document.querySelector('input[name="value"]').value;

        var newArray = value.split(",");
        for (var i = 0; i < newArray.length; i++) {
            newArray[i] = Number(newArray[i]);
        }

        setInsertedArray(newArray);
        setValueToSearch(valueToSearch);
    }

    return (
        <div className="container">
            <h2>Busca</h2>
            <br />
            <form id="form" onSubmit={handleSubmit} action="">
                <h3>Vetor:</h3>
                <span>** Os números devem estar separados por vírgula</span>
                <input required name="array" placeholder="1,2,3,4,5" type="text" />
                <br />
                <h3>Valor a encontrar:</h3>
                <input required name="value" type="text" />
                <br />
                <div className="sortType_container">
                    <h3>Tipo de Busca: {searchType}</h3>
                    <div className="sortType">
                        <button className="search" id="linearSearch" onClick={handleSearchSelection} >Busca Linear</button>
                        <button className="search" id="binarySearch" onClick={handleSearchSelection} >Busca Binária</button>
                    </div>
                </div>
                <input type="submit" value="Buscar" />
            </form>
            <br />
            <div className="sortedArray_container">
                <h3>Vetor: {String(insertedArray)}</h3>
                <h3>Posição do elemento {valueToSearch}: {position}</h3>
            </div>
        </div>
    );
}

export default Search;