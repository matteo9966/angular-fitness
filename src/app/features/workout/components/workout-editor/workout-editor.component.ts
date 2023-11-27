import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthSelectComponent } from 'src/app/shared/components/month-select/month-select.component';
import { FormsModule } from '@angular/forms';
import { ComponentHostDirective } from 'src/app/core/directives/component-host.directive';
import { WorkoutWeekEditorComponent } from '../workout-week-editor/workout-week-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Exercise } from 'src/app/core/models/Workout/IWorkout.interface';
@Component({
  selector: 'app-workout-editor',
  standalone: true,
  imports: [
    CommonModule,
    MonthSelectComponent,
    FormsModule,
    ComponentHostDirective,
    MatButtonModule,
    MatIconModule,
    WorkoutWeekEditorComponent,
  ],
  templateUrl: './workout-editor.component.html',
  styleUrl: './workout-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutEditorComponent  {
  @ViewChild(ComponentHostDirective, { static: true })
  hostDirective!: ComponentHostDirective;
  _month = new Date().getMonth();

  weeks: Record<number, Exercise[]> = {};

  weekCount = 0;
  get month() {
    return this._month;
  }
  set month(val: number) {
    this._month = val;
  }

  addWeekEditor() {
    // const { viewContainerRef }: ComponentHostDirective = this.hostDirective;
    // const componentRef = viewContainerRef.createComponent(
    //   WorkoutWeekEditorComponent,{

    //   }
    //   );
    // componentRef.setInput('weekNumber', this.weekCount + 1);
    this.weekCount += 1;
    this.weeks[this.weekCount] = [exerciseFactory(this.weekCount)];
  }

  get weeksExercisesList() {
    return Object.entries(this.weeks);
  }

  addExercise(week: number) {
    console.log(this.weeks);
    // this.weeks[week]=[...this.weeks[week],exerciseFactory(week)];
    this.weeks[week].push(exerciseFactory(week))
  }
}

function exerciseFactory(week: number) {
  const exercise: Exercise = {
    day: 0,
    exercise: '',
    exerciseRef: '',
    notes: '',
    reps: 0,
    rest: 0,
    sets: 0,
    week: week,
    userNotes: '',
    id: Math.random().toString(16).slice(2),
  };
  return exercise;
}
