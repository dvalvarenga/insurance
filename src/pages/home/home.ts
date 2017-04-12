import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AgeValidator } from  '../../validators/age';
import { UsernameValidator } from  '../../validators/username';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('signupSlider') signupSlider: any;

    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;
    slideThreeForm: FormGroup;

    submitAttempt: boolean = false;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
      this.slideOneForm = formBuilder.group({
           nome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*'), Validators.required])],

           age: ['', AgeValidator.isValid]
       });

       this.slideTwoForm = formBuilder.group({
          tipo: ['', Validators.required],
           username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],

           bio: ['']
       });

       this.slideThreeForm = formBuilder.group({
       });

    }

    next(){
        this.signupSlider.slideNext();
    }

    prev(){
        this.signupSlider.slidePrev();
    }

    save(){
          this.submitAttempt = true;

          if(!this.slideOneForm.valid){
              this.signupSlider.slideTo(0);
          }
          else if(!this.slideTwoForm.valid){
              this.signupSlider.slideTo(1);
          }
          else {
              console.log("success!")
              console.log(this.slideOneForm.value);
              console.log(this.slideTwoForm.value);
          }

      }

}
