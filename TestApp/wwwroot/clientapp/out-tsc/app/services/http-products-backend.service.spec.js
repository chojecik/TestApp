import { TestBed } from '@angular/core/testing';
import { HttpProductsBackendService } from './http-products-backend.service';
describe('HttpProductsBackendService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpProductsBackendService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-products-backend.service.spec.js.map