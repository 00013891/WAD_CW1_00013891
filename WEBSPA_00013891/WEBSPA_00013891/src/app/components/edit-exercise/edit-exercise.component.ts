import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../../models/exercise';
import { WorkoutService } from '../../workout.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-exercise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-exercise.component.html',
  styleUrl: './edit-exercise.component.css'
})
export class EditExerciseComponent implements OnInit{
  workoutService=inject(WorkoutService);
  router=inject(Router);
  route=inject(ActivatedRoute);

  exercise: Exercise = {
    id: 0,
    exerciseName: ''
  };

  id = 0;
  ngOnInit(): void{
    const exerciseId = this.route.snapshot.paramMap.get('id');
    this.id = exerciseId ? + exerciseId : 0;
    this.workoutService.getExerciseById(this.id).subscribe(
      exercise => this.exercise = exercise
    );
  }

  editExercise(exercise: Exercise){
    this.workoutService.editExerciseById(this.id, exercise)
    .subscribe(
      response => {
        this.router.navigate(['/exercises']);
      }
    )
  }
}
