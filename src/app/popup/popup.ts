import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  imports: [MatDialogModule],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup {
  constructor(public dialogRef: MatDialogRef<Popup>) {}
}
