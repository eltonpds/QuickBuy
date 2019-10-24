using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Contratos
{
    public interface IProdutoRepositorio : IBaseRepositorio<Produto>
    {
        Produto Obter(string nome, string descricao, decimal preco);
        Produto Obter(string descricao, decimal preco);
    }
}
