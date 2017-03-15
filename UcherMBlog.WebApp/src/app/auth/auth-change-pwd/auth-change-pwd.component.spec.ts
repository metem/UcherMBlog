import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthChangePwdComponent } from './auth-change-pwd.component';

describe('AuthChangePwdComponent',
    () => {
        let component: AuthChangePwdComponent;
        let fixture: ComponentFixture<AuthChangePwdComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                    declarations: [AuthChangePwdComponent]
                })
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AuthChangePwdComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create',
            () => {
                expect(component).toBeTruthy();
            });
    });