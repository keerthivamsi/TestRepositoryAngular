import { Component, OnInit } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular'; // Angular Data Grid Component
import { CellClassRules, ClientSideRowModelModule, ColDef, ICellRendererParams, ModuleRegistry, RowClassRules, RowSelectionOptions, ValueGetterParams } from 'ag-grid-community'; // Column Definition Type Interface
import "ag-grid-community/styles/ag-theme-quartz.css"; 
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  standalone: true,
  template: `<button (click)="buttonClicked()">Push Me!</button>`,
 })
 export class CustomButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert("clicked");
  }
 }
 

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent implements OnInit {
  // Row Data: The data to be displayed.
 rowData:any[] = [
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: true },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef<any>[] = [
  { headerName: 'Make & Model', valueGetter: (p: ValueGetterParams) => p.data.make + ' ' + p.data.model , flex: 2
  },
  { field: "price", flex: 1, filter: 'agNumberColumnFilter', floatingFilter: true },
  { field: "electric",flex: 1, filter: true,  cellClassRules: ragCellClassRules },
  { field: "button", flex: 1, cellRenderer: CustomButtonComponent },
];


pagination: boolean = true;
paginationPageSize: number = 5;
paginationPageSizeSelector: number[] = [200, 500, 1000];
public rowClassRules: RowClassRules = {
  // apply red to Ford cars
  'rag-red': (params:any) => params.data.make === 'Ford',
};


public themeClass: string = "ag-theme-quartz";
columnDefs: any[] = [
  { field: "make", flex: 2, filter: true, floatingFilter: true,  editable: true,  cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: ['Tesla', 'Ford', 'Toyota'],
  },
   }, //This column will be twice as wide as the others
  { field: "model", flex: 1 },
  { field: "price", flex: 1 },
  { field: "electric", flex: 1,    cellClassRules: {
    // apply green to electric cars
    'rag-green': (params:any) => {console.log(params, params.value), params.value === true},
} }
];

public rowSelection: RowSelectionOptions | "single" | "multiple" = {
  mode: "multiRow",
  headerCheckbox: false,
}

public defaultColDef: ColDef = {
  filter: "agTextColumnFilter",
  floatingFilter: true,
  flex: 1,
  editable: true,
  cellEditor: 'agSelectCellEditor', cellEditorParams: { values: ['Tesla', 'Ford', 'Toyota']}
}

ngOnInit(): void {
  this.rowSelection = {
    mode: 'multiRow',
  };
}

}

const ragCellClassRules: CellClassRules = {
  "rag-green": (params) => params.value === true,
}

