using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventarioAPI.Models;

namespace InventarioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventariosController : ControllerBase
    {
        private readonly InventarioContext _context;

        public InventariosController(InventarioContext context)
        {
            _context = context;
        }

        // GET: api/Inventarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventarioItm>>> GetInventario()
        {
            return await _context.Inventario.ToListAsync();
        }

        // GET: api/Inventarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InventarioItm>> GetInventarioItm(int id)
        {
            var inventarioItm = await _context.Inventario.FindAsync(id);

            if (inventarioItm == null)
            {
                return NotFound();
            }

            return inventarioItm;
        }

        // PUT: api/Inventarios/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventarioItm(int id, InventarioItm inventarioItm)
        {
            if (id != inventarioItm.Id)
            {
                return BadRequest();
            }

            _context.Entry(inventarioItm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventarioItmExists(id))
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

        // POST: api/Inventarios
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<InventarioItm>> PostInventarioItm(InventarioItm inventarioItm)
        {
            _context.Inventario.Add(inventarioItm);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetInventarioItm), new { id = inventarioItm.Id }, inventarioItm);
        }

        // DELETE: api/Inventarios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<InventarioItm>> DeleteInventarioItm(int id)
        {
            var inventarioItm = await _context.Inventario.FindAsync(id);
            if (inventarioItm == null)
            {
                return NotFound();
            }

            _context.Inventario.Remove(inventarioItm);
            await _context.SaveChangesAsync();

            return inventarioItm;
        }

        private bool InventarioItmExists(int id)
        {
            return _context.Inventario.Any(e => e.Id == id);
        }
    }
}
