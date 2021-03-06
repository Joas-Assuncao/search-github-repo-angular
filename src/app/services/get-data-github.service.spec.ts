import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetDataGithubService } from './get-data-github.service';

describe('GetDataGithubService', () => {
    let service: GetDataGithubService;
    let http: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(GetDataGithubService);
        http = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('must be called a GET with the query of the input of the HTML', () => {
        const spy = spyOn(http, 'get').and.callThrough();
        service.getDataFromGithub('query');
        expect(spy).toHaveBeenCalled();
    })
});
