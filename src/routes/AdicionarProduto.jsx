import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProduto() {

    document.title = "Criar Produtos";

    const navigate = useNavigate();

    const {id} = useParams(); 
    let contadorID = ListaProdutos.length
    
    let produtoNovo = ListaProdutos.filter( produto => produto.id == (contadorID+1) );
    
    const [produtoId, setProdutoId] = useState(0)
    const [produto, setProduto] = useState({
        id:0,
        nome:"",
        desc:"",
        preco:"",
        img:"",
    })



    return (

<div>
    <h1>Adicionar produto</h1>
    <div>
        <form action="">
            <fieldset>
                <legend>Cadastrar Produto</legend>
                <div>
                    <label htmlFor="idNome">Nome: </label>
                    <input type="text" name='nome' id='idNome' value={produto.nome} />
                </div>
                <div>
                    <label htmlFor="idDesc">Descrição: </label>
                    <input type="number" name='desc' id='idDesc' value={produto.desc} />
                </div>
                <div>
                    <label htmlFor="idPreco">Preço: </label>
                    <input type="text" name='preco' id='idpreco' value={produto.preco} />
                </div>
                <div>
                    <label htmlFor="idImg">Imagem: </label>
                    <input type="text" name='imagem' id='idImg' value={produto.img} />
                </div>
            </fieldset>
        </form>

    </div>
</div>


    )
}
