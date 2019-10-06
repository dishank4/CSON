import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

// Date value should be greater than current Date
export function MinDateParameterValue(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = moment(control.value);
        const currentDate = moment();
        if (value > currentDate) {
            return null;
        } else {
            return { minDateError: true };
        }
    };
}

// Minimum 1 value and maximum 5 values should be selected...
export function MinMaxRequired(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const values: any[] = control.value;
        if (values) {
            if (values.length >= 1 && values.length <= 5) {
                return null;
            } else {
                return { minMaxSelectError: true };
            }
        } else {
            return { minMaxSelectError: true };

        }
    };
}
