import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-member-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormField,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm {}
