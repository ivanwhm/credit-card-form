import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string, options: any): void {
    super.setValue(value, options);
  }
}
