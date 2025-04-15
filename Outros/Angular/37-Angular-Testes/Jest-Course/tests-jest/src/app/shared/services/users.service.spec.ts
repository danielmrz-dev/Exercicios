import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { UserInteface } from '../types/user.interface';

fdescribe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UsersService ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should add an user', () => {
    const newUser: UserInteface = {
      id: '3',
      name: 'foo',
    };
    service.addUser(newUser);
    expect(service.users$.getValue()).toEqual([{ id: '3', name: 'foo' }]);
  });

  it('should remove an user based on its id', () => {
    service.users$.next([{ id: '2', name: 'foo' }]);
    service.removeUser('2');
    expect(service.users$.getValue()).toEqual([]);
  });

});
