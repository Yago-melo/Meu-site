using CurriculoApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CurriculoApi.Data
{
    // O DbContext é a classe base do Entity Framework
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Isso diz ao C# que a classe ExperienciaProfissional é uma tabela no banco
        public DbSet<ExperienciaProfissional> ExperienciasProfissionais { get; set; }
    }
}