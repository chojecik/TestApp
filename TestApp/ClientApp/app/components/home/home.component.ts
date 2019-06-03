import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'ClientApp/app/models/enums/category-type.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    categories: any = CategoryType;
    constructor(private router: Router) { }

    ngOnInit() {
    }


    navigateToCategory(category: any) {
        this.router.navigate(["/category", category]);
    }
}
