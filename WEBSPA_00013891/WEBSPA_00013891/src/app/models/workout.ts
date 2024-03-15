import { Exercise } from "./exercise";

export interface Workout{
    id: number;
    durationInMinutes: number;
    workoutDate: Date;
    exercise: Exercise;
}