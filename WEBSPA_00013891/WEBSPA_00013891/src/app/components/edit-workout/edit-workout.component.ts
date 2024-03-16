import { Component, inject } from '@angular/core';
import { Workout } from '../../models/workout';
import { Router, ActivatedRoute } from '@angular/router';
import { Exercise } from '../../models/exercise';
import { WorkoutService } from '../../workout.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-workout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-workout.component.html',
  styleUrl: './edit-workout.component.css'
})
export class EditWorkoutComponent {
  workoutService=inject(WorkoutService);
  router=inject(Router);
  route=inject(ActivatedRoute);

  workout: Workout = {
    id: 0,
    durationInMinutes: 0,
    workoutDate: new Date(),
    exercise: {
      id: 0,
      exerciseName: ''
    }
  }

  exercises!: Exercise[];

  id = 0;
  ngOnInit(): void {
    this.workoutService.getAllExercises().subscribe(
      exercises => this.exercises = exercises
    );
    const exerciseId = this.route.snapshot.paramMap.get('id');
    this.id = exerciseId ? + exerciseId : 0;
    this.workoutService.getWorkoutById(this.id).subscribe(
      workout => this.workout = workout
    );
  }

  editWorkout(workout: Workout){
    this.workoutService.editWorkoutById(this.id, workout)
    .subscribe(
      response => {
        this.router.navigate(['/workouts']);
      }
    )
  }
}
