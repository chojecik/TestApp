import { async, TestBed } from '@angular/core/testing';
import { ProductCreateUpdateComponent } from './product-create-update.component';
describe('ProductCreateUpdateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductCreateUpdateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductCreateUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-create-update.component.spec.js.map