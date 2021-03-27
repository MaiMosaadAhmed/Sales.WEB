using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sales.Web.Areas.Clients.Controllers
{
    public class ClientsController : Controller
    {
        // GET: Clients/Clients
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateNewClient()
        {
            return View();
        }

        public ActionResult ClientsCategories()
        {
            return View();
        }

        public ActionResult ClientsClasses()
        {
            return View();
        }

        public ActionResult ClientsTransactions()
        {
            return View();
        }
        
        public ActionResult ClientsSettlements()
        {
            return View();
        }

        public ActionResult ClientsLocations()
        {
            return View();
        }

    }
}