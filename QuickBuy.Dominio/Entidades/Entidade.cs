using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagemValidacao ?? (_mensagemValidacao = new List<string>()); }
        }

        public void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public string ObterMensagemValidacao()
        {
            return string.Join(". ", mensagemValidacao);
        }

        public abstract void Validate();
        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
    }
}
