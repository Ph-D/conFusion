import { Component, OnInit, Inject } from '@angular/core';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchmap';
import {MatSliderModule} from '@angular/material';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  comment: Comment;
  dishIds: number[];
  prev: number;
  next: number;

  autoTicks = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 5;
  vertical = false;

  commentForm : FormGroup;

 
 

  formErrors = {
    'author' : '',
    'comment' : ''
  };

  validationMessages = {
    'author' : {
      'required' : 'First Name is required.',
      'minlength':'First Name must bet at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 25 characters long.' 
    },
    'comment' : {
      'required' : 'Comment is required.',
      'minlength':'Comment must bet at least 2 characters long.',
      'maxlength': 'Comment cannot be more than 25 characters long.' 
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL
    ) { 
     
    }

    ngOnInit() {
      
      this.createForm();

          this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
          this.route.params
            .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
            .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
        }
      
        setPrevNext(dishId: number) {
          let index = this.dishIds.indexOf(dishId);
          this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
          this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
        }

  goBack(): void {
    this.location.back();
  }

  

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(5);
  }
  private _tickInterval = 1;

  

    createForm(){
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      date: ''
    });

    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

  onValueChanged(data ? : any){
    if(!this.commentForm){
        return;
    }
    const form = this.commentForm;

    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            this.formErrors[field] += messages[key] + ' ';
          }
      }
    }
  }

onSubmit(){
  this.comment = this.commentForm.value;
  this.commentForm.value.date = new Date().toISOString();
  this.dish.comments.push(this.comment);
  this.commentForm.reset({
    author: '',
    comment: '',
    rating: '5'
  });
}
  

}
