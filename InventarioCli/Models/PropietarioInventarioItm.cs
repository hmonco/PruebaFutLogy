using System.ComponentModel.DataAnnotations;

namespace InventarioAPI.Models
{
    public class PropietarioInventarioItm
    {
        public int Id { get; set; }
        [MaxLength(1)] public string Tipo { get; set; }
        public int? Area { get; set; }
        public int? Persona { get; set; }
    }
}
