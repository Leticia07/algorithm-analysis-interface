import React, { useState } from 'react';

const Complexity = () => {

    const [result, setResult] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        let processing = document.querySelector('input[name="processing"]').value;
        let complexity = document.querySelector('input[name="complexity"]').value;
        let elements = document.querySelector('input[name="elements"]').value;

        //var patt1 = new RegExp(/[a-z]\^[2-9]/);
        //var patt2 = new RegExp(/[2-9]\*[a-z]\^[2-9]/);

        if (complexity.indexOf("n^") !== -1) {
            var values = complexity.split("n^");
            if (values.length === 1) {
                complexity = Math.pow(Number(elements), Number(values[0]));
            } else {
                complexity = Number(values[0]) * Math.pow(Number(elements), Number(values[1]));
            }
        } else if (complexity === "log n") {
            complexity = Math.log10(Number(elements));
        } else if (complexity === "log^2 n") {
            complexity = Math.pow(Math.log10(Number(elements)), 2);
        } else if (complexity === "n") {
            complexity = elements;
        } else if (complexity === "2^n") {
            complexity = Math.pow(2, Number(elements));
        } else if (complexity === "n log n") {
            complexity = Number(elements) * Math.log10(Number(elements));
        } else {
            complexity = 1;
        }

        let time = complexity / Number(processing);
        setResult(time);
    }

    return (
        <div className="container">
            <h2>Complexidade</h2>
            <br />
            <form onSubmit={handleSubmit} action="">
                <p>Instruções do computador / segundo:</p>
                <input required name="processing" placeholder="instruções do computador / segundo" type="text" />
                <p>Instruções do algoritmo:</p>
                <span>* n^2, log n, log^2 n, n, n log n, n^3, 2^n, 2n^2, 1</span>
                <input required name="complexity" placeholder="n^2, log n, log^2 n, n, n log n, n^3, 2^n, 2n^2" type="text" />
                <p>Número de elementos:</p>
                <input required name="elements" placeholder="elementos" type="text" />
                <input type="submit" value="Calcular" />
            </form>
            <br />
            <div className="result_container">
                <h3>Resultado:</h3>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Complexity;