import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AgGridComponent, CommonModule, AgGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})  
export class AppComponent {
  title = 'angular18-standalone';

  sum(a: number, b:number) {
    return a+b;
  }
}
