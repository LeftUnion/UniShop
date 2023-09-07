
public interface IFurnitureService 
{
    public List<Product> GetFurniture();
    public List<Address> GetAddresses();
    public void MakeOrder(Product[] product, Client client);
    public void MakeRequest(ClientRequest req);

}