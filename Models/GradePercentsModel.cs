using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JosephSteed1.Models
{
    /// <summary>
    /// Class that takes in the form for inputted grade percents for a class. Specific to IS 413.
    /// </summary>
    public class GradePercentsModel
    {
        [Required]
        [Range(1,100)]
        public float assignments { get; set; }
        [Required]
        [Range(1, 100)]
        public float groupprojects { get; set; }
        [Required]
        [Range(1, 100)]
        public float quizzes { get; set; }
        [Required]
        [Range(1, 100)]
        public float exams { get; set; }
        [Required]
        [Range(1, 100)]
        public float intex { get; set; }
    }
}
