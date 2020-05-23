using System.Collections.Generic;

namespace ProtocolosHospitalar.Models
{
    public class Protocolo
    {
        public int ProtocoloId { get; set; }
        public string Texto { get; set; }
        public Servico Servico { get; set; }
        public ICollection<TopicoProtocolo> TopicoProtocolo { get; set; }
    }

}
