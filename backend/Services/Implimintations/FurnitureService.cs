using System.Xml.Serialization;
using Microsoft.AspNetCore.Mvc;
using Telegram.Bot;
using Telegram.Bot.Types;
using TelegramBotExperiments;

public class FurnitureService : IFurnitureService  {

    private static Telega Bot = new Telega();
    private IBaseRepository<Product> Products { get; set; }
    private IBaseRepository<Client> Clients { get; set; }
    private IBaseRepository<Address> Addresses { get; set; }
    private IBaseRepository<ClientRequest> Requests { get; set; }
    private IBaseRepository<Orders> Orders { get; set; }
    

    public FurnitureService(IBaseRepository<Orders> orders, IBaseRepository<Client> clients, IBaseRepository<Address> address, IBaseRepository<ClientRequest> requests, IBaseRepository<Product> product)
        {
            Orders = orders;
            Addresses = address;
            Products = product;
            Requests = requests;
            Clients = clients;
        }

    public List<Product> GetFurniture() 
    {
        List<Product> products = Products.GetAll();
        return products;
    }
    public void MakeOrder(Product[] products, Client client) {
        Client newClient = Clients.Create(client);

        foreach (Product i in products)  {
            Orders.Create(new Orders {
                client_id = newClient.id,
                product_id = i.id
            } );
        }
    }
    public void MakeRequest(ClientRequest req) {
        Requests.Create(req);
        Bot.sendMessage(FormatTelegramString(req));
    }

    public List<Address> GetAddresses() {
        return Addresses.GetAll();
    }

    private string FormatTelegramString(ClientRequest req) {
        string result;
        result = string.Format("Имя:{0}\nПочта:{1}\nСообщение:{2}\n", req.name, req.email, req.message); 
        return result;
    }
}