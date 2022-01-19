using System;
using System.ComponentModel.DataAnnotations;
namespace Mission3.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int Assignment { get; set; }

        [Required]
        [Range(0, 100)]
        public int Group { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exam { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
