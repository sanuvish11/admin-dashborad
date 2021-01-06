import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Observable } from 'rxjs';

@Injectable()
export class PositionsService {

constructor() { }

getPositions(): Observable<any> {
return new Observable(observer => {

setTimeout(() => {
if (localStorage.getItem('positions')) {
observer.next(JSON.parse(localStorage.getItem('positions')|| ''));

} else { //default data

observer.next([
{ cols: 3, rows: 8, y: 0, x: 6 },
{ cols: 3, rows: 8, y: 0, x: 0 },
{ cols: 3, rows: 8, y: 8, x: 0 },
{ cols: 3, rows: 8, y: 8, x: 6 },
{ cols: 3, rows: 16, y: 0, x: 12 }
]);

}
}, 1000);
});
}

savePositions(positions: GridsterItem[]) {
localStorage.setItem('positions', JSON.stringify(positions))
}
}