public class Cathegory : BaseModel
{
    public Cathegory(string type)
    {
        this.Type = type;
    }
    public string Type { get; set; }
}