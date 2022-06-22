import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IDataOfRepos, IItemOfDataFromGithub } from '../interfacesApp';
import { GetDataGithubService } from '../services/get-data-github.service';

@Component({
    selector: 'app-search-repo',
    templateUrl: './search-repo.component.html',
    styleUrls: ['./search-repo.component.scss']
})
export class SearchRepoComponent implements OnInit {
    inputQuerySearch = new FormControl();

    query: string = '';
    url: string = 'https://api.github.com/search/repositories?q=';

    p: number = 1;
    alreadyResearched: boolean = false;

    results$!: IDataOfRepos;
    items: IItemOfDataFromGithub[] = [];
    total: number = 0;

    constructor(private githubService: GetDataGithubService) {}

    ngOnInit(): void {
    }

    onSearch() {
        this.query = this.inputQuerySearch.value;
        this.alreadyResearched = true;
        this.getDataFromGithub();
    }

    getDataFromGithub() {
        this.githubService.getDataFromGithub(this.query)
            .subscribe(
                data => (this.items = data.items, this.total = data.total_count)
            )
    }
}
