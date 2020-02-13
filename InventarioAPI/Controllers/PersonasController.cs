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
    public class PersonasController : ControllerBase
    {
        private readonly InventarioContext _context;

        public PersonasController(InventarioContext context)
        {
            _context = context;
        }

        // GET: api/Personas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonaItm>>> GetPersona()
        {
            return await _context.Persona.ToListAsync();
        }

        // GET: api/Personas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonaItm>> GetPersonaItm(int id)
        {
            var personaItm = await _context.Persona.FindAsync(id);

            if (personaItm == null)
            {
                return NotFound();
            }

            return personaItm;
        }

        // PUT: api/Personas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonaItm(int id, PersonaItm personaItm)
        {
            if (id != personaItm.Id)
            {
                return BadRequest();
            }

            _context.Entry(personaItm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonaItmExists(id))
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

        // POST: api/Personas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<PersonaItm>> PostPersonaItm(PersonaItm personaItm)
        {
            _context.Persona.Add(personaItm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonaItm", new { id = personaItm.Id }, personaItm);
        }

        // DELETE: api/Personas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PersonaItm>> DeletePersonaItm(int id)
        {
            var personaItm = await _context.Persona.FindAsync(id);
            if (personaItm == null)
            {
                return NotFound();
            }

            _context.Persona.Remove(personaItm);
            await _context.SaveChangesAsync();

            return personaItm;
        }

        private bool PersonaItmExists(int id)
        {
            return _context.Persona.Any(e => e.Id == id);
        }
    }
}
