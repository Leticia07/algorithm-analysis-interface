import React, { useState, useEffect } from 'react';

import './styles.css';
import Functions from '../../functions/functions';

const Sort = () => {

    const [insertedArray, setInsertedArray] = useState([]);
    const [sortedArray, setSortedArray] = useState("");
    const [sortingType, setSortingType] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        if (insertedArray.length > 0) {
            var sortedArrayAux = [];

            var timeStart, timeEnd;
            if (sortingType === "insertionSort") {
                timeStart = performance.now();
                sortedArrayAux = Functions.insertionSort(insertedArray);
                timeEnd = performance.now();
            } else if (sortingType === "bubbleSort") {
                timeStart = performance.now();
                sortedArrayAux = Functions.bubbleSort(insertedArray);
                timeEnd = performance.now();
            } else if (sortingType === "selectionSort") {
                timeStart = performance.now();
                sortedArrayAux = Functions.selectionSort(insertedArray);
                timeEnd = performance.now();
            } else if (sortingType === "mergeSort") {
                timeStart = performance.now();
                sortedArrayAux = Functions.mergeSort(insertedArray);
                timeEnd = performance.now();
            }
            
            setDuration(timeEnd - timeStart);

            setSortedArray(sortedArrayAux.join(','));
            document.getElementById('result').style.display = "block";
        }
    }, [insertedArray]);

    function handleSubmitArray(event) {
        event.preventDefault();

        const value = document.querySelector('input[name="array"]').value;

        var newArray = value.split(",");
        for(var i = 0; i < newArray.length; i++) {
            newArray[i] = Number(newArray[i]);
        }

        setInsertedArray(newArray);
    }

    function handleSortSelection(event) {
        event.preventDefault();
        const id = event.target.id;

        document.querySelectorAll(".selected").forEach((item) => {
            item.classList = "";
        });
        document.getElementById(id).classList.add("selected");

        setSortingType(id);
    }

    return (
        <div className="container">
            <h2>Ordenação</h2>
            <p>Insira o conjunto de números escolhido: </p>
            <span>** Os números devem estar separados por vírgula</span>
            <form onSubmit={handleSubmitArray} action="">
                <input required name="array" type="text" placeholder="1,2,3,4,5" />
                <br />
                <div className="sortType_container">
                    <h3>Tipo de ordenação: {sortingType}</h3>
                    <div className="sortType">
                        <button id="insertionSort" onClick={handleSortSelection} >Insertion Sort</button>
                        <button id="bubbleSort" onClick={handleSortSelection} >Bubble Sort</button>
                        <button id="selectionSort" onClick={handleSortSelection} >Selection Sort</button>
                        <button id="mergeSort" onClick={handleSortSelection} >Merge Sort</button>
                    </div>
                </div>
                <br />
                <input type="submit" value="Ordenar" />
            </form>
            <br />

            <div className="sortedArray_container">
                <h3>Array ordenado:</h3>
                <p id="result">{sortedArray}, execução em: {duration}</p>
            </div>
        </div>
    );
}

export default Sort;