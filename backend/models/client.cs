public class Client : BaseModel
{
    public string name { get; set; }
    public string email { get; set; }
    public string phone { get; set; }

    public List<Product> products { get; set; } = new();
}