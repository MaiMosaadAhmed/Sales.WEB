using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sales.Web.Areas.Employee.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee/Employee
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateEmployee(int? id)
        {
            return View();
        }

        public ActionResult EmployeeJobs()
        {
            return View();
        }

        public ActionResult EmployeeLiveLocation()
        {
            return View();
        }

        public ActionResult EmployeeLocations()
        {
            return View();
        }
    }
}