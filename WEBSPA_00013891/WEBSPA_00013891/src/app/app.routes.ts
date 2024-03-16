import { Routes } from '@angular/router';
import { ListExerciseComponent } from './components/list-exercise/list-exercise.component';
import { ListWorkoutComponent } from './components/list-workout/list-workout.component';
import { CreateExerciseComponent } from './components/create-exercise/create-exercise.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { DeleteExerciseComponent } from './components/delete-exercise/delete-exercise.component';
import { DeleteWorkoutComponent } from './components/delete-workout/delete-workout.component';
import { EditExerciseComponent } from './components/edit-exercise/edit-exercise.component';
import { EditWorkoutComponent } from './components/edit-workout/edit-workout.component';

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
    },
    {
        path:"delete-workout/:id",
        component:DeleteWorkoutComponent
    },
    {
        path:"edit-exercise/:id",
        component:EditExerciseComponent
    },
    {
        path:"edit-workout/:id",
        component:EditWorkoutComponent
    }
];
