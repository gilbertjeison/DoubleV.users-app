import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    DragDropModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatCardModule
  ]
})
export class AngularMaterialModule {
  private icons: string[] = [
    'copy',
    'import',
    'exchange',
    'moon',
    'sun',
    'menu-collapse',
    'menu-expand',
    'search',
    'actions',
    'operation',
    'inquiries',
    'open-external',
    'tasks',
    'actions',
    'bolt',
    'switch',
    'pointer-down',
    'collapse-down',
    'collapse-up',
    'collapse-right',
    'options',
    'ocean-boat',
    'other-services',
    'air-plane',
    'road-truck',
    'rail-train',
    'multi-map',
    'filter',
    'sort',
    'folder',
    'check',
    'check-circle',
    'check-big',
    'full-screen',
    'notifications',
    'calendar',
    'eye',
    'close',
    'clear',
    'hamburguer',
    'plus',
    'file',
    'person',
    'error',
    'warning',
    'arrow-go',
    'arrow-left',
    'arrow-right',
    'receive',
    'send',
    'direction-left',
    'direction-right',
    'direction-up',
    'direction-down',
    'direction-first',
    'direction-last',
    'drag-and-drop',
    'reset',
    'delete',
    'entities',
    'files',
    'solar-energy',
    'cash',
    'credit',
    'minus',
    'times',
    'chat',
    'save',
    'configuration',
    'user-card',
    'last-viewed',
    'star',
    'star-empty',
    'phone',
    'edit',
    'container-none',
    'container-reefer',
    'container-dangerous-goods',
    'container-flexitank',
    'billing',
    'settings',
    'container-20',
    'container-40',
    'GPS',
    'world',
    'quotations',
    'container-small',
    'container-small-large',
    'container-high-large',
    'calculator',
    'ellipse'
  ];
}
