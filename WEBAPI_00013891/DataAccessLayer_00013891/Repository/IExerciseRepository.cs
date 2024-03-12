using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public interface IExerciseRepository
    {
        Task<Exercise> GetExerciseById(int id);
        Task<List<Exercise>> GetExercises();
        Task<Exercise> CreateExercise(Exercise exercise);
        Task<Exercise> EditExercise(int id, Exercise exercise);
        Task DeleteExercise(int id);
    }
}
