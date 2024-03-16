import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Workout } from '../../models/workout';
import { WorkoutService } from '../../workout.service';

@Component({
  selector: 'app-delete-workout',
  standalone: true,
  imports: [],
  templateUrl: './delete-workout.component.html',
  styleUrl: './delete-workout.component.css'
})
export class DeleteWorkoutComponent {
  ngOnInit(): void {
    const exerciseId = this.route.snapshot.paramMap.get('id');
    this.id = exerciseId ? + exerciseId : 0;
    this.workoutService.getWorkoutById(this.id)
    .subscribe(workout => {
      this.workout = workout
    });
  }

  workoutService=inject(WorkoutService);
  router=inject(Router);
  route=inject(ActivatedRoute)
  
  workout: Workout = {
    id: 0,
    durationInMinutes: 0,
    workoutDate: new Date(),
    exercise:{
      id: 0,
      exerciseName: ''
    }
  }

  id: number = 0;

  deleteWorkout(): void{
    this.workoutService.deleteWorkoutById(this.id)
    .subscribe(response => {
      this.router.navigate(['/workouts']);
    });
  }
  cancel():void{
    this.router.navigate(['/workouts']);
  }
}
