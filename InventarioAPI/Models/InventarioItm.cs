using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventarioAPI.Models
{
    public class InventarioItm
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int TipoInventario { get; set; }
        public string Serial { get; set; }
        public double ValorCompra { get; set; }
        public DateTime FechaCompra { get; set; }
        public string EstadoActual { get; set; }
        public int PropietarioInventario { get; set; }
                
    }
}
