import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MemberService } from '../../service/member-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
  ],

  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  form!: FormGroup;
  //!pour l'initiatisation
  //form group sert pour envoyer les données du html vers le ts
  //injection de dépendance
  //découplage faible entre la création de l'instance et son utilisation
  //injection dans le consturctor d'une instance deja créer à l'extérieur
  //meme instance memberService grace au patron singleton dans angular
  constructor(
    private memberService: MemberService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      created_date: new FormControl(null),
    });
  }
  submit() {
    console.log(this.form.value);
    this.memberService.AddMember(this.form.value).subscribe(() => {
      //parametre vide car je n'attends pas de données de retour car void
      this.router.navigate(['']); //redirection vers la page des membres après l'ajout n'a pas de /
      console.log('Member added successfully');
    });
  }
}
