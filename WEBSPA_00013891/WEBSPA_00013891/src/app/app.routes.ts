import { Routes } from '@angular/router';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { ListWorkoutComponent } from './components/list-workout/list-workout.component';
import { CreateExerciseComponent } from './components/create-exercise/create-exercise.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { DeleteExerciseComponent } from './components/delete-exercise/delete-exercise.component';

export const routes: Routes = [
    {
        path:"exercises",
        component:ListExerciseComponent
    },
    {
        path:"workouts",
        component:ListWorkoutComponent
    },
    {
        path:"create-exercise",
        component:CreateExerciseComponent
    },
    {
        path:"create-workout",
        component:CreateWorkoutComponent
    },
    {
        path:"delete-exercise/:id",
        component:DeleteExerciseComponent
    }
];
