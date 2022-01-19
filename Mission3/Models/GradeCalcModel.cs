using System;
using System.ComponentModel.DataAnnotations;
namespace Mission3.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public int asScore { get; set; }

        [Required]
        [Range(0, 100)]
        public int grScore { get; set; }

        [Required]
        [Range(0, 100)]
        public int quScore { get; set; }

        [Required]
        [Range(0, 100)]
        public int exScore { get; set; }

        [Required]
        [Range(0, 100)]
        public int inScore { get; set; }
    }
}
