import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Component } from '@angular/core';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login method', () => {
    const username = 'keerthi';
    const password = '12345';
    service.login(username, password);
    expect(service.isAuthenticated).toBe(false);
    expect(service.login(username, password)).toBe(false);
  })

  it('should call login method true cse', () => {
    const username = 'keerthi';
    const password = 'keer';
    service.login(username, password);
    expect(service.isAuthenticated).toBe(true);
    expect(service.login(username, password)).toBe(true);
  })

  it('should call isAuthenticaetdUser', () => {
    service.isAuthenticatedUser();
    expect(service.isAuthenticatedUser()).toBe(false);
    expect(service.isAuthenticatedUser()).toBeDefined();
  })
});
