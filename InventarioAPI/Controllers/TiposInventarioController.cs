using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventarioAPI.Models;

namespace InventarioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiposInventarioController : ControllerBase
    {
        private readonly InventarioContext _context;

        public TiposInventarioController(InventarioContext context)
        {
            _context = context;
        }

        // GET: api/TiposInventario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoInventarioItm>>> GetTipoInventario()
        {
            return await _context.TipoInventario.ToListAsync();
        }

        // GET: api/TiposInventario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoInventarioItm>> GetTipoInventarioItm(int id)
        {
            var tipoInventarioItm = await _context.TipoInventario.FindAsync(id);

            if (tipoInventarioItm == null)
            {
                return NotFound();
            }

            return tipoInventarioItm;
        }

        // PUT: api/TiposInventario/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoInventarioItm(int id, TipoInventarioItm tipoInventarioItm)
        {
            if (id != tipoInventarioItm.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoInventarioItm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoInventarioItmExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TiposInventario
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TipoInventarioItm>> PostTipoInventarioItm(TipoInventarioItm tipoInventarioItm)
        {
            _context.TipoInventario.Add(tipoInventarioItm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoInventarioItm", new { id = tipoInventarioItm.Id }, tipoInventarioItm);
        }

        // DELETE: api/TiposInventario/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TipoInventarioItm>> DeleteTipoInventarioItm(int id)
        {
            var tipoInventarioItm = await _context.TipoInventario.FindAsync(id);
            if (tipoInventarioItm == null)
            {
                return NotFound();
            }

            _context.TipoInventario.Remove(tipoInventarioItm);
            await _context.SaveChangesAsync();

            return tipoInventarioItm;
        }

        private bool TipoInventarioItmExists(int id)
        {
            return _context.TipoInventario.Any(e => e.Id == id);
        }
    }
}
