namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do Produto deve ser informado");
            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição do Produto deve ser informado");
        }
    }
}
