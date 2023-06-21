using System;
using System.Data;
using Npgsql;



public class DataBase {

    private NpgsqlConnection connection { get; set; }
    public DataBase()
    {
        const string DB_HOST = "localhost";
        const string DB_PORT = "5432";
        const string DB_USER = "left";
        const string DB_PASSWORD = "right";
        const string DB_NAME = "local";
        string jija = String.Format(@"Host={0};Port={1};Username={2};Password={3};Database={4}",
                                    DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_NAME);
        connection = new NpgsqlConnection(jija);
        
        connection.Open();
    }

    public Product[] getProducts(string Cathegory) {
        NpgsqlDataReader reader;
        Console.WriteLine(Cathegory);
        string query = String.Format(@"
        SELECT 
        shop.products.id, 
        shop.products.src, 
        shop.products.description, 
        shop.products.price 
        FROM shop.products JOIN shop.product_categories ON shop.products.product_category_id = shop.product_categories.id 
        WHERE 
        shop.product_categories.cathegory = '{0}'
        ORDER BY shop.products.id DESC;", Cathegory); 

        string count = String.Format(@"
        SELECT count(*)
        FROM shop.products P JOIN shop.product_categories C ON P.product_category_id = C.id 
        WHERE 
        C.cathegory = '{0}';", Cathegory); 
        NpgsqlCommand com = new NpgsqlCommand(query, connection);
        reader = com.ExecuteReader();

        reader.Read();

        Product[] arr = new Product[(int)reader[0]];
        int i = 0;
        
        
        do {
            arr[i] = new Product(reader[1].ToString(), reader[2].ToString(), (Decimal)reader[3]);
            i++;
        } while (reader.Read());
        // for(int j = 0; i < 12; i++)
        // {
        //     Console.WriteLine(arr[j]);
        // }

        return arr;
    }

    ~DataBase() {
        connection.Close();
    }

}
