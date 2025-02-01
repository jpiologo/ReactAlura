import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos () {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito (id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito (id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}

//Sobre async e await: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar
//Sobre o banco de dados MongoDB: https://www.alura.com.br/artigos/mongodb-o-banco-baseado-em-documentos