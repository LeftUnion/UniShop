
public interface IFurnitureService 
{
    public List<Product> GetFurniture();
    public void MakeOrder(Product[] product, Client client);
    public void MakeRequest(ClientRequest req);

}