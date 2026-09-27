import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-member-form',
  imports: [CommonModule, MatFormFieldModule, MatInputModule],

  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm {}
