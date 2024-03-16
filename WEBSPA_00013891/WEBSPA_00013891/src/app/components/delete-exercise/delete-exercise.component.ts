import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-delete-exercise',
  standalone: true,
  imports: [],
  templateUrl: './delete-exercise.component.html',
  styleUrl: './delete-exercise.component.css'
})
export class DeleteExerciseComponent implements OnInit {

  ngOnInit(): void {
    const exerciseId = this.route.snapshot.paramMap.get('id');
    this.id = exerciseId ? + exerciseId : 0;
    this.workoutService.getExerciseById(this.id)
    .subscribe(exercise => {
      this.exercise = exercise
    });
  }

  workoutService=inject(WorkoutService);
  router=inject(Router);
  route=inject(ActivatedRoute)
  
  exercise: Exercise = {
    id: 0,
    exerciseName: ''
  }

  id: number = 0;

  deleteExercise(): void{
    this.workoutService.deleteExerciseById(this.id)
    .subscribe(response => {
      this.router.navigate(['/exercises']);
    });
  }
  cancel():void{
    this.router.navigate(['/exercises']);
  }
}
