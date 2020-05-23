using Microsoft.EntityFrameworkCore;
using ProtocolosHospitalar.Models;

namespace ProtocolosHospitalar
{
    public class MyDbContext : DbContext
    {
        public DbSet<Servico> Servicos { get; set; }
        public DbSet<Protocolo> Procedimentos { get; set; }
        public DbSet<Topico> Topicos { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TopicoProtocolo>().HasKey(x => new { x.ProtocoloId, x.TopicoId });

            modelBuilder.Entity<TopicoProtocolo>()
                        .HasOne(x => x.Topico)
                        .WithMany()
                        .HasForeignKey(x => x.TopicoId);

            modelBuilder.Entity<TopicoProtocolo>()
                        .HasOne(x => x.Protocolo)
                        .WithMany()
                        .HasForeignKey(x => x.ProtocoloId);

        }
    }
}
