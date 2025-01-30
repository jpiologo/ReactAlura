import axios from "axios";

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getLivros () {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}

//Sobre async e await: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar