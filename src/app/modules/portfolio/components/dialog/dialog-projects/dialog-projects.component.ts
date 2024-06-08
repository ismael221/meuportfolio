import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [
    MatDialogContent
  ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.css'
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ){}
  public getData = signal<IProjects | null>(null)

  ngOnInit(): void {
      this.getData.set(this._data)
  }

  public closeModel(){
      return this._dialogRef.close()
  }
}
