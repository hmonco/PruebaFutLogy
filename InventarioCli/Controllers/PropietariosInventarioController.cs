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
    public class PropietariosInventarioController : ControllerBase
    {
        private readonly InventarioContext _context;

        public PropietariosInventarioController(InventarioContext context)
        {
            _context = context;
        }

        // GET: api/PropietariosInventario
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropietarioInventarioItm>>> GetPropietarioInventario()
        {
            return await _context.PropietarioInventario.ToListAsync();
        }

        // GET: api/PropietariosInventario/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropietarioInventarioItm>> GetPropietarioInventarioItm(int id)
        {
            var propietarioInventarioItm = await _context.PropietarioInventario.FindAsync(id);

            if (propietarioInventarioItm == null)
            {
                return NotFound();
            }

            return propietarioInventarioItm;
        }

        // PUT: api/PropietariosInventario/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPropietarioInventarioItm(int id, PropietarioInventarioItm propietarioInventarioItm)
        {
            if (id != propietarioInventarioItm.Id)
            {
                return BadRequest();
            }

            _context.Entry(propietarioInventarioItm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropietarioInventarioItmExists(id))
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

        // POST: api/PropietariosInventario
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<PropietarioInventarioItm>> PostPropietarioInventarioItm(PropietarioInventarioItm propietarioInventarioItm)
        {
            _context.PropietarioInventario.Add(propietarioInventarioItm);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPropietarioInventarioItm), new { id = propietarioInventarioItm.Id }, propietarioInventarioItm);
        }

        // DELETE: api/PropietariosInventario/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PropietarioInventarioItm>> DeletePropietarioInventarioItm(int id)
        {
            var propietarioInventarioItm = await _context.PropietarioInventario.FindAsync(id);
            if (propietarioInventarioItm == null)
            {
                return NotFound();
            }

            _context.PropietarioInventario.Remove(propietarioInventarioItm);
            await _context.SaveChangesAsync();

            return propietarioInventarioItm;
        }

        private bool PropietarioInventarioItmExists(int id)
        {
            return _context.PropietarioInventario.Any(e => e.Id == id);
        }
    }
}
