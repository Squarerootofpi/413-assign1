using JosephSteed1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JosephSteed1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("Calculator")]
        public IActionResult Calculator()
        {
            return View();
        }
        [HttpPost("Calculator")]

        public IActionResult Calculator(GradePercentsModel model)
        {
            return View();
        }
    }
}
