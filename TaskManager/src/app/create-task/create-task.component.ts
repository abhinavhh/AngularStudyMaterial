import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TaskServive } from '../service/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
  createTaskForm!: FormGroup;


  constructor(private taskService: TaskServive) {}

  ngOnInit(): void {
    this.createTaskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), this.noSpaceValidator]),
      description: new FormControl('', Validators.maxLength(500)),
      status: new FormControl('todo', Validators.required),
      priority: new FormControl(''),
      dueDate: new FormControl(''),
      tags: new FormControl(''),
      subtasks: new FormArray([])
    });
  }


  // Custom validator: no spaces allowed
  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    return value.includes(' ') ? { hasSpace: true } : null;
  }

  // Form submission
  onSubmit() {
    if (this.createTaskForm.invalid) {
      this.createTaskForm.markAllAsTouched();
      return;
    }

    const formValue = this.createTaskForm.value;

    const task = {
      ...formValue,
      tags: formValue.tags ? formValue.tags.split(',').map((tag: string) => tag.trim()) : []
    };

    this.taskService.createTask(task);

    console.log('New Task:', task);

    // Reset form and clear subtasks
    this.createTaskForm.reset();
  }

  // Helper to show errors in template
  getFieldError(field: string): string | null {
    const control = this.createTaskForm.get(field);
    if (!control || !control.touched) return null;

    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('minlength')) return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    if (control.hasError('maxlength')) return `Maximum length is ${control.errors?.['maxlength'].requiredLength}`;
    if (control.hasError('hasSpace')) return 'Cannot contain spaces';
    return null;
  }
}
