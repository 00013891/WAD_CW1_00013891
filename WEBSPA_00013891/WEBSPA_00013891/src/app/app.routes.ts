import { Routes } from '@angular/router';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { ListWorkoutComponent } from './components/list-workout/list-workout.component';

export const routes: Routes = [
    {
        path:"exercises",
        component:ListExerciseComponent
    },
    {
        path:"workouts",
        component:ListWorkoutComponent
    }
];
