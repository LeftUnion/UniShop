using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;
using System.IO;

namespace backend.Controllers;

[ApiController]
    [Route("/api/furniture")]   
    public class MainController : ControllerBase
    {
        private IFurnitureService Service { get; set; }
        private IBaseRepository<Product> Products { get; set; }
        public MainController(IFurnitureService service, IBaseRepository<Product> products)
        {
            Service = service;
            Products = products;
        }

        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult(Service.GetFurniture());
            // return new JsonResult(Products.GetAll()); 
        }

    }

    // [Route("/api/orders")]
    // public class OrderContoller : ControllerBase
    // {
    //     private IFurnitureService Service { get; set; }
    //     public OrderContoller(IFurnitureService service)
    //     {
    //         Service = service;
    //     }

    //     [HttpPost]
    //     public JsonResult Post()
    //     {
    //         List<Product> value = Service.;
    //         return new JsonResult(value); 
    //     }
    // }
    [Route("/api/requests")]
    public class RequestsContoller : ControllerBase
    {
        private IFurnitureService Service { get; set; }
        public RequestsContoller(IFurnitureService service)
        {
            Service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post()
        {
            try
            {
                using (StreamReader reader = new StreamReader(Request.Body))
                {
                    string requestBody = await reader.ReadToEndAsync();
                    Console.WriteLine(requestBody);
                    ClientRequest myModel = JsonConvert.DeserializeObject<ClientRequest>(requestBody);

                    Service.MakeRequest(req: myModel);

                    return Ok(myModel);
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Ошибка при обработке запроса: " + ex.Message);
            }
        }
    }

    [Route("/api/addresses")]
    public class AddressesController : ControllerBase
    {
        private IFurnitureService Service { get; set; }
        public AddressesController(IFurnitureService service)
        {
            Service = service;
        }

        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult(Service.GetAddresses());
        }

    }


