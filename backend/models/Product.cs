public class Product : BaseModel
{
    public Product(string src, string Description, Decimal price)
    {
        this.Src = src;
        this.Description = Description;
        this.Price = price;
    }

    public string Src { get; set; }
    public string Description { get; set; }
    public Decimal Price { get; set; }

}