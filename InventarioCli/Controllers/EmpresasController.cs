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
    [Produces("application/json")]
    [Route("api/Empresas")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly InventarioContext _context;

        public EmpresasController(InventarioContext context)
        {
            _context = context;
        }

        // GET: api/Empresas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpresaItm>>> GetEmpresas()
        {
            return await _context.Empresa.ToListAsync();
        }

        // GET: api/Empresas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpresaItm>> GetEmpresa(int id)
        {
            var empresa = await _context.Empresa.FindAsync(id);

            if (empresa == null)
            {
                return NotFound();
            }

            return empresa;
        }

        // PUT: api/Empresas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpresa([FromRoute] int id,[FromBody] EmpresaItm empresa)
        {
            if (id != empresa.Id)
            {
                return BadRequest();
            }

            _context.Entry(empresa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpresaExists(id))
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

        // POST: api/Empresas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<EmpresaItm>> PostEmpresa(EmpresaItm empresa)
        {
            _context.Empresa.Add(empresa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmpresa), new { id = empresa.Id }, empresa);
        }

        // DELETE: api/Empresas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmpresaItm>> DeleteEmpresa([FromRoute] int id)
        {
            var empresa = await _context.Empresa.FindAsync(id);
            if (empresa == null)
            {
                return NotFound();
            }

            _context.Empresa.Remove(empresa);
            await _context.SaveChangesAsync();

            return empresa;
        }

        private bool EmpresaExists(int id)
        {
            return _context.Empresa.Any(e => e.Id == id);
        }
    }
}
