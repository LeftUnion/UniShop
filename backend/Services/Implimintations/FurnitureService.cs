public class FurnitureService : IFurnitureService  {

    private IBaseRepository<Product> Products { get; set; }
    private IBaseRepository<Client> Clients { get; set; }
    private IBaseRepository<ClientRequest> Requests { get; set; }
    
    // FurnitureService()

    public FurnitureService(IBaseRepository<Client> clients, IBaseRepository<ClientRequest> requests, IBaseRepository<Product> product)
        {
            Products = product;
            Requests = requests;
            Clients = clients;
        }

    public List<Product> GetFurniture() 
    {
        List<Product> products = Products.GetAll();
        Console.Write(products);
        return products;
    }
    public void MakeOrder(Product[] product, Client client) {

    }
    public void MakeRequest(ClientRequest req) {
        Requests.Create(req);
    }
}