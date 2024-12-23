import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Product } from '../../models/product.model';
import { initialState } from '../../state/app.state';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create for edit item', () => {
    const item: Product = {
      id: '1',
      name: 'keer',
      price: 250,
      quantity: 450
    }
    component.editItem(item);
  });

  it('should creaete addProduct', () => {
    component.ProductForm.controls['id'].setValue('1');
    expect(component.ProductForm.value.id).toEqual('1');
    component.addProduct();
  });

  it('should creaete addProduct else condition', () => {
    component.ProductForm.controls['id'].setValue('');
    expect(component.ProductForm.value.id).toEqual('');
    component.ProductForm.reset();
    component.addProduct();
  });


  it('should create for delte item',() => {
    component.deleteItem('1');
  })
});
