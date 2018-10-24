import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatOptionModule,
    MatSliderModule,
    MatSnackBarModule,
    MatRadioModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatSliderModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [{
        provide: ErrorStateMatcher, 
        useClass: ShowOnDirtyErrorStateMatcher
    }],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatSliderModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
})

export class MaterialModule {}
