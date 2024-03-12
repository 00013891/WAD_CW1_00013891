using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer_00013891.Repository
{
    public class WorkoutRepository : IWorkoutRepository
    {
        private readonly DataContext _context;

        public WorkoutRepository(DataContext context)
        {
            _context = context;
        }

        public void CreateWorkout(Workout workout)
        {
            var exercsise = _context.Exercises.First(e => e.Id == workout.Exercise.Id);
            workout.Exercise = exercsise;
            _context.Workouts.Add(workout);
        }

        public void DeleteWorkout(int id)
        {
            var workoutToDelete = GetWorkoutById(id)!;
            _context.Workouts.Remove(workoutToDelete);
            _context.SaveChanges();
        }

        public Workout EditWorkout(int id, Workout workout)
        {
            var workoutToEdit = GetWorkoutById(id)!;

            _context.Entry(workoutToEdit).State = EntityState.Modified;
            workoutToEdit.WorkoutDate = workout.WorkoutDate;
            workoutToEdit.DurationInMinutes = workout.DurationInMinutes;
            workoutToEdit.Exercise = workout.Exercise;

            return GetWorkoutById(id)!;
        }

        public Workout? GetWorkoutById(int id) => _context.Workouts.Include(w => w.Exercise).FirstOrDefault(w => w.Id == id);

        public List<Workout> GetWorkouts() => _context.Workouts.Include(w => w.Exercise).ToList();
    }
}
