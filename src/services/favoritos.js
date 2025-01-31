import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos () {
    const response = await favoritosAPI.get('/')

    return response.data
}

export {
    getFavoritos
}

//Sobre async e await: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar