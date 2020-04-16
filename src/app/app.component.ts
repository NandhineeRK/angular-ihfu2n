import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   public reactiveForm: FormGroup = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required)
  });
}
