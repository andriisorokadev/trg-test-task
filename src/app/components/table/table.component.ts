import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLocations } from 'src/app/store/app.selectors';
import { addLocation, updateLocation } from 'src/app/store/app.actions';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit  {
  @ViewChild('myPaginator') paginator!: MatPaginator;

  locations$!: Observable<Readonly<any[]>>
  dataSource = new MatTableDataSource([] as any[]);

  public pagination: number[] = [];


  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'action'];
  constructor(
    public dialog: MatDialog,
    private store: Store
    ) {
      this.store.select(getLocations).subscribe((data: any) => {
        this.dataSource.data = [...data]
      });
    }

  @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {
    this.setPagination();
  }

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'latitude': return item.coordinates.lat;
        case 'longitude': return item.coordinates.lng;
        default: return item.name;
      }
    };
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public openEditDialog(element: any): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { element },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.store.dispatch(updateLocation({ location: result.newValue, locationNameToUpdate: result.nameToRemove }));
      }
    });
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(location => {
      if (location != null) {
        this.store.dispatch(addLocation({ location }));
      }
    });
  }

  private setPagination() {
    if (window.innerHeight >= 1593) {
      this.pagination = [5, 10, 15];
      return;
    }
    if (window.innerHeight >= 1062) {
      this.pagination = [5, 10];
      return;
    }
    if (window.innerHeight >= 531) {
      this.pagination = [5];
      return;
    }
  }
}
