
namespace ProtocolosHospitalar.Models
{
    public class TopicoProtocolo
    {
        public int TopicoId { get; set; }
        public int ProtocoloId { get; set; }
        public Topico Topico { get; set; }
        public Protocolo Protocolo { get; set; }
    }
}
