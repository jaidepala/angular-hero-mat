import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
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
        MatButtonToggleModule,
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
        MatButtonToggleModule,
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
