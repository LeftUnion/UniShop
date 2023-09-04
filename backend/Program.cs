// Microsoft.AspNetCore.App

public class Program {  

    public static void Main(string[] args) {
        CreateWebHostBuilder(args).Build().Run();  
    }  
    // Microsoft.AspNetCore.Hosting.WebHost
    public static IWebHostBuilder CreateWebHostBuilder(string[] args) => 
        Microsoft.AspNetCore.WebHost.CreateDefaultBuilder(args)
            .UseStartup<HelloWebApi.Startup>();
      
}