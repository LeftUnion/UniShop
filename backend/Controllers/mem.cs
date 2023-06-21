using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/{cathegory}")]

    public class MainController : ControllerBase
    {
        private DataBase db;
        public MainController()
        {
            db = new DataBase();
        }

        [HttpGet]
        public JsonResult Get(string cathegory)
        {
            return new JsonResult(db.getProducts(cathegory)); // TODO IVAN - C# Path parametrs 
        }

}
