using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public interface IWorkoutRepository
    {
        Task<Workout> GetExerciseById(int id);
        Task<List<Workout>> GetExercises();
        Task<Workout> CreateExercise(Workout workout);
        Task<Workout> EditExercise(int id, Workout workout);
        Task DeleteExercise(int id);
    }
}
