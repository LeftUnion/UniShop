using Microsoft.EntityFrameworkCore;

public class ApplicationContext: DbContext
{
    public DbSet<Product> products { get; set; }
    public DbSet<Address> addresses { get; set; }
    public DbSet<Client> clients { get; set; }
    public DbSet<ClientRequest> requests { get; set; }
    public DbSet<Orders> clientsproducts { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options): base(options)
    {
        Database.EnsureCreated();
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //Configure default schema
        modelBuilder.HasDefaultSchema("shop");
        // modelBuilder.
    }
}

