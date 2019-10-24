using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ServicoRepositorio : BaseRepositorio<Servico>, IServicoRepositorio
    {
        public ServicoRepositorio(QuickBuyContexto quickBuyContexto): base(quickBuyContexto)
        {

        }

        public Servico Obter(string nome, string descricao, double preco)
        {
            return QuickBuyContexto.Servico.FirstOrDefault(s => s.Nome == nome && s.Descricao == descricao && s.Preco.Equals(preco));
        }

        public Servico Obter(string descricao, double preco)
        {
            return QuickBuyContexto.Servico.FirstOrDefault(s => s.Descricao == descricao && s.Preco.Equals(preco));
        }
    }
}
