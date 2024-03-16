import { Component, OnInit, inject } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { Workout } from '../../models/workout';
import { Router } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-workout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-workout.component.html',
  styleUrl: './create-workout.component.css'
})
export class CreateWorkoutComponent implements OnInit {
  workoutService=inject(WorkoutService);
  router=inject(Router);

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

  ngOnInit(): void {
    this.workoutService.getAllExercises().subscribe(
      exercises => this.exercises = exercises
    );
  }

  createWorkout(){
    this.workoutService.createWorkout(this.workout)
      .subscribe(
        response => {
          this.router.navigate(['/workouts']);
        }
      )
  }
}
