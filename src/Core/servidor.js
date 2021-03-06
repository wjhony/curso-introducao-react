//URL do servidor, alterar conforme necessário
const SERVER_URL = 'http://localhost:8000/api';

function getTipos() {
    return fetch(`${SERVER_URL}/tipos`)
        .then(res => res.json());
}

function getPokemons(nome = '') {
    return fetch(`${SERVER_URL}/pokemons?nome=${nome}`)
        .then(res => res.json());
}

function getImagemPokemon(id) {
    return fetch(`${SERVER_URL}/pokemons/${id}/imagem`);
}

function createPokemon(formData) {
    return fetch(`${SERVER_URL}/pokemons`, {
        method: 'POST',
        body: formData
    }).then(res => res.json());
}

function deletePokemon(id) {
    return fetch(`${SERVER_URL}/pokemons/${id}`, { method: 'DELETE' });
}

export default {
    getTipos, getPokemons, getImagemPokemon, createPokemon, deletePokemon
}