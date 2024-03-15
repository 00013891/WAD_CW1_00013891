import { Component, inject } from '@angular/core';
import { WorkoutService } from '../../workout.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-list-exercise',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-exercise.component.html',
  styleUrl: './list-exercise.component.css'
})
export class ListExerciseComponent {
  workoutService=inject(WorkoutService);
  router=inject(Router);
  exercises:Exercise[]=[];

  ngOnInit(){
    this.workoutService.getAllExercises().subscribe((result)=>{this.exercises=result});
  }
}
