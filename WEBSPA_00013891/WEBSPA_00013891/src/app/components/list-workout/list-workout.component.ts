import { Component, inject } from '@angular/core';
import { Workout } from '../../models/workout';
import { Router, RouterLink } from '@angular/router';
import { WorkoutService } from '../../workout.service';

@Component({
  selector: 'app-list-workout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-workout.component.html',
  styleUrl: './list-workout.component.css'
})
export class ListWorkoutComponent {
  workoutService=inject(WorkoutService);
  router=inject(Router);
  workouts:Workout[]=[];

  ngOnInit(){
    this.workoutService.getAllWorkouts().subscribe((result)=>{this.workouts=result});
  }
}
