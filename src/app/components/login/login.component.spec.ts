import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerMock = {
      navigate: jest.fn(),  // Mock the navigate method
    };
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [{provide: Router, useValue: routerMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create loginFormSubmit', () => {
    component.loginForm.controls['username'].setValue('keerthi');
    component.loginForm.controls['password'].setValue('keer');
    expect(component.loginForm.value).toEqual({
      username: 'keerthi',
      password: 'keer',
    });
    component.loginFormSubmit();
    expect(router.navigate).toHaveBeenCalledWith(["./home"]);
  })
});
