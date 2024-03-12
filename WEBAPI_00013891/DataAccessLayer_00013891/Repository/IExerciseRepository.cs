using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public interface IExerciseRepository
    {
        Exercise? GetExerciseById(int id);
        List<Exercise> GetExercises();
        void CreateExercise(Exercise exercise);
        Exercise EditExercise(int id, Exercise exercise);
        void DeleteExercise(int id);
    }
}
