import { NgModule } from "@angular/core";

import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule
} from '@angular/material';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule 
    ]
})

export class AngularMaterialModule {}