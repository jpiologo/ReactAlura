import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLivros } from "../../services/livros";
import { postFavorito } from "../../services/favoritos";
import Input from "../Input";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    position: relative; /* Permite que os resultados fiquem abaixo do input */
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    font-family: "Nunito", serif;
`;

const Subtitulo = styled.h4`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 40px;
    font-family: "Nunito", serif;
`;

const ResultadoContainer = styled.div`
    position: absolute;
    width: 100%;
    background: #FFF;
    color: #000;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Nunito", serif;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    font-family: "Nunito", serif;

    &:hover {
        background: #f0f0f0;
    }

    p {
        margin: 0;
        font-size: 16px;
        width: 200px;
    }

    img {
        width: 50px;
        height: auto;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    async function insertFavorito(id) {
        await postFavorito(id);
        alert(`Livro de ID ${id} inserido!`);
    }

    function handlePesquisa(evento) {
        const textoDigitado = evento.target.value.trim().toLowerCase();

        if (textoDigitado === "") {
            setLivrosPesquisados([]);
            return;
        }

        const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(textoDigitado)
        );

        setLivrosPesquisados(resultadoPesquisa);
    }

    return (
        <PesquisaContainer>
            <Titulo>Encontre um livro que é sua cara!</Titulo>
            <Subtitulo>Navegue por nossa vasta biblioteca</Subtitulo>

            <div style={{ position: "relative", display: "inline-block" }}>
                <Input
                    type="text"
                    placeholder="Pesquise por sua próxima leitura..."
                    onChange={handlePesquisa}
                />

                {livrosPesquisados.length > 0 && (
                    <ResultadoContainer>
                        {livrosPesquisados.map((livro) => (
                            <Resultado key={livro.id} onClick={() => insertFavorito(livro.id)}>
                                <p>{livro.nome}</p>
                                <img src={livro.src} alt={livro.nome} />
                            </Resultado>
                        ))}
                    </ResultadoContainer>
                )}
            </div>
        </PesquisaContainer>
    );
}

export default Pesquisa;
