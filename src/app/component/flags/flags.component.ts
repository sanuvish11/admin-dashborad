import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { PositionsService } from 'src/app/service/positions.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  isflag = true;
  @Output() thisflag = new EventEmitter<boolean>();
  @Input('width') public width: number | undefined;
  @Input('height') public height: number | undefined;
  @Input('left') public left: number | undefined;
  @Input('top') public top: number | undefined;

  toggleclosebtn() {
    this.isflag = !this.isflag;
    this.thisflag.emit(this.isflag);
  }

  options: any;
  dashboard: Array<GridsterItem> = []
  loaded = false;
  constructor(private posServ: PositionsService) {
    setInterval(() => {
      this.timeNow = new Date();
    }, 1);
  }
  ngOnInit() {
    this.options = {
      setGridSize: true,
      gridType: 'verticalFixed',
      fixedRowHeight: 100,
      minRows: 1,
      maxRows: 100,
      minItemRows: 1,
      maxItemRows: 10,
      defaultItemRows: 2,
      minCols: 1,
      maxCols: 12,
      maxItemCols: 12,
      minItemCols: 2,
      defaultItemCols: 2,
      maxItemArea: 250,
      minItemArea: 1,
      swap: true,
      displayGrid: 'onDrag&Resize',
      compactType: 'compactUp', // 'compactUp&Left',compactLeft&Up'
      pushItems: true,
      resizable: { enabled: true },
      draggable: {
        enabled: true
      },

      itemChangeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemChange(item, itemComponent),
      itemResizeCallback: (item: GridsterItem, itemComponent: GridsterItemComponentInterface) => this.itemResize(item, itemComponent),
    };

    this.dashboard = [
      { "x": 0, "y": 0, "cols": 3, "rows": 3 },
    ]

    // hiding the gridster untill positions are loaded
    this.loaded = false;

    this.posServ.getPositions().subscribe((positions) => {
      this.dashboard = positions;
      this.loaded = true;
    })

  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    throw new Error('Method not implemented.');
  }
  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    throw new Error('Method not implemented.');
  }
  timeNow: Date = new Date();
  itemChange(item: any, itemComponent: any) {
    console.info(`state: ${JSON.stringify(this.dashboard, null, 5)}`);
    this.posServ.savePositions(this.dashboard)
  }

  itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }
  isShown: boolean = false; // hidden by default


  toggleShow() {

    this.isShown = !this.isShown;

  }

}
