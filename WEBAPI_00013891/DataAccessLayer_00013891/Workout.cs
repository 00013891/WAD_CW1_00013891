using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891
{
    public class Workout
    {
        public int Id { get; set; }
        public int DurationInMinutes { get; set; }
        public DateTime WorkoutDate { get; set; } = DateTime.Now;
        public Exercise Exercise { get; set; }
    }
}
