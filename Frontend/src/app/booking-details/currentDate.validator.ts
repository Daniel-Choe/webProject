import { AbstractControl } from '@angular/forms';

export class currentDateValidator {

  static startAfterCurrent(control: AbstractControl): any {

    let today = new Date().toISOString().slice(0, 10)

    if (control.value >= today) {
      return null
    } else {
      return { "currentDateCheck": true }
    }
  }

}

