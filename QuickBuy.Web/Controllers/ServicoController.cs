using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    public class ServicoController : Controller
    {
        private readonly IServicoRepositorio _servicoRepositorio;

        public ServicoController(IServicoRepositorio servicoRepositorio)
        {
            _servicoRepositorio = servicoRepositorio;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Servico servico)
        {
            try
            {
                var servicoInformado = _servicoRepositorio.Obter(servico.Descricao, servico.Preco);
                if (servicoInformado != null)
                    return BadRequest("Usuário já cadastrado no sistema");

                _servicoRepositorio.Adicionar(servico);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        
    }

}
