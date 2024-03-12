using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly DataContext _dataContext;
        
        public ExerciseRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void CreateExercise(Exercise exercise)
        {
            _dataContext.Exercises.Add(exercise);
            _dataContext.SaveChanges();
        }

        public void DeleteExercise(int id)
        {
            var exercsiseToDelete = GetExerciseById(id);
            _dataContext.Exercises.Remove(exercsiseToDelete);
            _dataContext.SaveChanges();
        }

        public Exercise EditExercise(int id, Exercise exercise)
        {
            var exerciseToUpdate = _dataContext.Exercises.First(x => x.Id == id);

            _dataContext.Entry(exerciseToUpdate).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            exerciseToUpdate.ExerciseName = exercise.ExerciseName;
            _dataContext.SaveChanges();

            return _dataContext.Exercises.First(x => x.Id == id);
        }

        public Exercise? GetExerciseById(int id) => _dataContext.Exercises.FirstOrDefault(x => x.Id == id);

        public List<Exercise> GetExercises() => _dataContext.Exercises.ToList();
    }
}
