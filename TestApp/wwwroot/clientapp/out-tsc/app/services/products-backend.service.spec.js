import { TestBed } from '@angular/core/testing';
import { ProductsBackendService } from './products-backend.service';
describe('ProductsBackendService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductsBackendService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=products-backend.service.spec.js.map