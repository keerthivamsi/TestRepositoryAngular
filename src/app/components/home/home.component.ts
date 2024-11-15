import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectItems } from '../../state/items.selector';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addProduct, deleteProduct, updateProduct } from '../../state/items.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  store$: any;
  productDetails: Product[] = [];
  ProductForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.store$ = store.select(selectItems);
    this.ProductForm = this.fb.group({
      id: [''],
      name: [''],
      quantity: [''], 
      price: ['']
    })
  }
  ngOnInit(): void {
    this.getProductDetails();
  }

  addProduct() {
    console.log("form values are", this.ProductForm.value);
    const item: Product = this.ProductForm.value
    if(this.ProductForm.value.id) {
      this.store$.dispatch(updateProduct({item}));
      this.ProductForm.reset();
    }
    else {
      this.ProductForm.value.id = Math.random().toString();
      this.store$.dispatch(addProduct({item}));
    }
  }

  getProductDetails() {
    this.store$.subscribe((res: any) => {
      console.log(res, "res");
      this.productDetails = res['itemsnew']['productDetails'];
    });
  }

  editItem(item: Product) {
    console.log("edit item", item);
    this.ProductForm.get('id')?.setValue(item.id);
    this.ProductForm.get('name')?.setValue(item.name);
    this.ProductForm.get('price')?.setValue(item.price);
    this.ProductForm.get('quantity')?.setValue(item.quantity);
  }

  deleteItem(item: string) {
    this.store$.dispatch(deleteProduct({item}))
  }
}
