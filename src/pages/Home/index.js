import React from 'react';
import { Link } from 'react-router-dom';

import computer from '../../assets/images/laptop-code-solid.svg';

const Home = () => {

    return (
        <div className="container">
            <img src={computer} alt=""/>
            <h2>Laboratório de análise de algoritmos</h2>
            <br/>
            <Link to="Complexity">Complexidade</Link>
            <Link to="Search">Busca</Link>
            <Link to="Sort">Ordenação</Link>
        </div>
    );
}

export default Home;