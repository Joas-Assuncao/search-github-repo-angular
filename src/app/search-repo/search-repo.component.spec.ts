import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepoComponent } from './search-repo.component';

fdescribe('SearchRepoComponent', () => {
    let component: SearchRepoComponent;
    let fixture: ComponentFixture<SearchRepoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ SearchRepoComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchRepoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
