namespace CurriculoApi.Models
{
    public class ExperienciaProfissional
    {
        public int Id { get; set; }
        public string Cargo { get; set; } = string.Empty;
        public string Empresa { get; set; } = string.Empty;
        public DateTime DataInicio { get; set; }
        public DateTime? DataFim { get; set; } // A interrogação significa que pode ser nulo (emprego atual)
        public string? DescricaoAtividades { get; set; }
        public bool TrabalhoAtual { get; set; }
    }
}