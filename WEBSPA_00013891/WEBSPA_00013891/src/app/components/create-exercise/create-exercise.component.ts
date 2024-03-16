import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { Exercise } from '../../models/exercise';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-exercise',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {
  workoutService=inject(WorkoutService);
  router=inject(Router);

  exercise: Exercise = {
    id: 0,
    exerciseName: ''
  };

  createExercise(){
    this.workoutService.createExercise(this.exercise)
      .subscribe(
        response => {
          this.router.navigate(['/exercises'])
        }
      )
  }
}
