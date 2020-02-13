using Microsoft.EntityFrameworkCore;

namespace InventarioAPI.Models
{
    public class InventarioContext : DbContext
    {

        public InventarioContext(DbContextOptions<InventarioContext> options) : base(options) 
        { }

        public DbSet<EmpresaItm> Empresa { get; set; }
        public DbSet<AreaItm> Area { get; set; }
        public DbSet<PersonaItm> Persona { get; set; }
        public DbSet<TipoInventarioItm> TipoInventario { get; set; }
        public DbSet<PropietarioInventarioItm> PropietarioInventario { get; set; }
        public DbSet<InventarioItm> Inventario { get; set; }

    }
}
