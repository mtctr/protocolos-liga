using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProtocolosHospitalar;
using ProtocolosHospitalar.Models;

namespace ProtocolosHospitalar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProtocolosController : ControllerBase
    {
        private readonly MyDbContext _context;

        public ProtocolosController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Protocolos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Protocolo>>> GetProcedimentos()
        {
            return await _context.Procedimentos.ToListAsync();
        }

        // GET: api/Protocolos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Protocolo>> GetProtocolo(int id)
        {
            var protocolo = await _context.Procedimentos.FindAsync(id);

            if (protocolo == null)
            {
                return NotFound();
            }

            return protocolo;
        }

        // PUT: api/Protocolos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProtocolo(int id, Protocolo protocolo)
        {
            if (id != protocolo.ProtocoloId)
            {
                return BadRequest();
            }

            _context.Entry(protocolo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProtocoloExists(id))
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

        // POST: api/Protocolos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Protocolo>> PostProtocolo(Protocolo protocolo)
        {
            _context.Procedimentos.Add(protocolo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProtocolo", new { id = protocolo.ProtocoloId }, protocolo);
        }

        // DELETE: api/Protocolos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Protocolo>> DeleteProtocolo(int id)
        {
            var protocolo = await _context.Procedimentos.FindAsync(id);
            if (protocolo == null)
            {
                return NotFound();
            }

            _context.Procedimentos.Remove(protocolo);
            await _context.SaveChangesAsync();

            return protocolo;
        }

        private bool ProtocoloExists(int id)
        {
            return _context.Procedimentos.Any(e => e.ProtocoloId == id);
        }
    }
}
