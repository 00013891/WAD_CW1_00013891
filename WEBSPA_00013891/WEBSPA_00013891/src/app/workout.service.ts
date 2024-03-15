import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Exercise } from "./models/exercise";
import { Workout } from "./models/workout";

@Injectable({
    providedIn: 'root'
})
export class WorkoutService{
    httpClient = inject(HttpClient);
    private api = 'http://localhost:5125/api/';

    constructor() {}

    getAllExercises(){
        return this.httpClient.get<Exercise[]>(this.api+'Exercise');
    }

    getExerciseById(id:number){
        return this.httpClient.get<Exercise>(this.api+'Exercise/'+id);
    }

    editExerciseById(id:number, exercise:Exercise){
        return this.httpClient.put(this.api+'Exercise/'+id, exercise);
    }

    deleteExerciseById(id:number){
        return this.httpClient.delete(this.api+'Exercise/'+id);
    }

    createExercise(exercise:Exercise){
        return this.httpClient.post<Exercise>(this.api+'Exercise', exercise);
    }

    getAllWorkouts(){
        return this.httpClient.get<Workout[]>(this.api+'Workout');
    }

    getWorkoutById(id:number){
        return this.httpClient.get<Workout>(this.api+'Workout/'+id);
    }

    editWorkoutById(id:number, workout:Workout){
        return this.httpClient.put(this.api+'Workout/'+id, workout);
    }

    deleteWorkoutById(id:number){
        return this.httpClient.delete(this.api+'Workout/'+id);
    }

    createWorkout(workout:Workout){
        return this.httpClient.post<Workout>(this.api+'Workout', workout);
    }
}