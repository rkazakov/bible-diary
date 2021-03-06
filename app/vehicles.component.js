System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VehiclesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VehiclesComponent = (function () {
                function VehiclesComponent() {
                    this.vehicles = [
                        { id: 1, name: 'X-Wing Fighter' },
                        { id: 2, name: 'Tie Fighter' },
                        { id: 3, name: 'Y-Wing Fighter' }
                    ];
                }
                VehiclesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-vehicles',
                        template: "\n    <ul>\n        <li *ngFor=\"#vehicle of vehicles\">\n            {{vehicle.name}}\n        </li>\n    </ul>\n    <div *ngIf=\"vehicles.length\">\n        <h3>You have {{vehicles.length}} vehicles</h3>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], VehiclesComponent);
                return VehiclesComponent;
            }());
            exports_1("VehiclesComponent", VehiclesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUNFLGFBQVEsR0FBRzt3QkFDVCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNqQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTt3QkFDOUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtxQkFDbEMsQ0FBQztnQkFDSixDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsK05BU1Q7cUJBQ0YsQ0FBQzs7cUNBQUE7Z0JBT0Ysd0JBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELGlEQU1DLENBQUEiLCJmaWxlIjoidmVoaWNsZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LXZlaGljbGVzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsPlxyXG4gICAgICAgIDxsaSAqbmdGb3I9XCIjdmVoaWNsZSBvZiB2ZWhpY2xlc1wiPlxyXG4gICAgICAgICAgICB7e3ZlaGljbGUubmFtZX19XHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidmVoaWNsZXMubGVuZ3RoXCI+XHJcbiAgICAgICAgPGgzPllvdSBoYXZlIHt7dmVoaWNsZXMubGVuZ3RofX0gdmVoaWNsZXM8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVoaWNsZXNDb21wb25lbnQge1xyXG4gIHZlaGljbGVzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ1gtV2luZyBGaWdodGVyJyB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogJ1RpZSBGaWdodGVyJyB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ1ktV2luZyBGaWdodGVyJyB9XHJcbiAgXTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
