import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchForm } from './search-form.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent implements OnInit, OnDestroy {
  searchForm!: FormGroup;
  submitted: boolean = false; 
  minYear = 1900;
  maxYear = new Date().getFullYear();

  searchFormListener!: Subscription;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      infos: this.formBuilder.group({
        id: [''],
        title: ['']
      }, {
        validator: this.isRequiredValidator('title', 'id')
      }),
      type: ["série"],
      releaseYear: ['', [Validators.required, this.rangeDateValidator(this.minYear, this.maxYear)]],
      sheet: ['']
    });



    this.searchFormListener = this.searchForm.valueChanges.subscribe(value => {
      console.log(value);
    });


    this.searchForm.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.searchForm.patchValue({ sheet: 'courte' });
  }


  ngOnDestroy(): void {

    this.searchFormListener.unsubscribe();

  }


  submit() {
    this.submitted = true;
    const model: SearchForm = this.searchForm.value;
    console.log(JSON.stringify(model));
  }


  isRequiredValidator(title: string, id: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const idControl = control.get(id);
      const titleControl = control.get(title);

      if (idControl?.value || titleControl?.value) {
        return null;
      }

      return { 'isRequired': true }
    };
  }


  rangeDateValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const triggerYear = control.value;
      if (triggerYear >= min && triggerYear <= max) {
        return null;
      }
      return { 'min': { min, max } };
    };
  }


}


