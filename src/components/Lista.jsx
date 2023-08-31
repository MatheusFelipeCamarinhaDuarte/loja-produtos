import Cabecalho from "./Cabecalho";
export default function Lista() {
    return (
        <>
            <Cabecalho>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/produtos">Produtos</a>
                </li>
                <li>
                    <a href="/editar/produtos:id">Editar Produtos</a>
                </li>
            </Cabecalho>
    </>
    );
}
