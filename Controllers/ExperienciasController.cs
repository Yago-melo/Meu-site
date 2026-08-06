using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CurriculoApi.Data;
using CurriculoApi.Models;

namespace CurriculoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExperienciasController : ControllerBase
    {
        private readonly AppDbContext _context;

        // O construtor recebe a conexão com o banco que configuramos no Program.cs
        public ExperienciasController(AppDbContext context)
        {
            _context = context;
        }

        // Método GET: Quando o site acessar /api/experiencias, ele cai aqui
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExperienciaProfissional>>> GetExperiencias()
        {
            // Vai no banco, pega todas as experiências e retorna como uma lista
            return await _context.ExperienciasProfissionais.ToListAsync();
        }
    }
}