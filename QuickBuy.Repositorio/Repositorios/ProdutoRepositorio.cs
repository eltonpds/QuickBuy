using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }

        public Produto Obter(string nome, string descricao, decimal preco)
        {
            return QuickBuyContexto.Produtos.FirstOrDefault(p => p.Nome == nome && p.Descricao == descricao && p.Preco == preco);
        }

        public Produto Obter(string descricao, decimal preco)
        {
            return QuickBuyContexto.Produtos.FirstOrDefault(p => p.Descricao == descricao && p.Preco == preco);
        }
    }
}
