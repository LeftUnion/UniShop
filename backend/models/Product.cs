public class Product : BaseModel
{
    public string src { get; set; }
    public string description { get; set; }
    public Decimal price { get; set; }
    public List<Client> Students { get; set; } = new();

}