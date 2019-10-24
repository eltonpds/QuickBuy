using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Contratos
{
    public interface IServicoRepositorio : IBaseRepositorio<Servico>
    {
        Servico Obter(string nome, string descricao, double preco);
        Servico Obter(string descricao, double preco);
    }
}
