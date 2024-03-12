using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public interface IWorkoutRepository
    {
        Workout? GetWorkoutById(int id);
        List<Workout> GetWorkouts();
        void CreateWorkout(Workout workout);
        Workout EditWorkout(int id, Workout workout);
        void DeleteWorkout(int id);
    }
}
