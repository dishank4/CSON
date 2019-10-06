
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TagInputModule } from 'ngx-chips';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        TagInputModule,
        DragDropModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            closeButton: true,
            enableHtml: true
        }),
        // TranslateModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        NgCircleProgressModule.forRoot({
            'radius': 60,
            'space': -6,
            'outerStrokeGradient': true,
            'outerStrokeWidth': 10,
            'outerStrokeColor': '#2a88bb',
            'outerStrokeGradientStopColor': '#07ed74',
            'showSubtitle': false,
        }),
        RouterModule
    ],
    entryComponents: [
        
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgCircleProgressModule,
        TagInputModule,
        DragDropModule,

    ]
})

export class SharedModule {
}
