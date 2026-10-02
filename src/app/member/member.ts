import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MemberService } from '../../service/member-service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Popup } from '../popup/popup';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  imports: [CommonModule, MatTableModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  //injection de dépendance
  constructor(
    private MS: MemberService,
    private router: Router,
    private Dialog: MatDialog,
  ) {} //le constructeur de la classe Member. Il utilise l'injection de dépendance pour obtenir une instance de MemberService, qui est un service Angular permettant d'effectuer des opérations liées aux membres. Cela permet au composant de communiquer avec le service pour récupérer ou envoyer des données liées aux membres.
  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'type',
    'created_date',
    '5',
  ];

  dataSource: any[] = [];
  //ngOnInit se déclanche automatiquement sans la necessité d'appuyer sur un bouton
  ngOnInit() {
    //injecter le service et appeler la méthode getAllMembers()
    // etape1 .getallmembers etape 4 .scubscribe (2et 3) dans getall member
    //response variable locale qui fonctionne seuement dans la fonction fléchée
    this.MS.getAllMembers().subscribe((response) => {
      this.dataSource = response; //la propriété dataSource est initialisée avec les données récupérées depuis le service MemberService. Ces données sont ensuite utilisées pour alimenter le tableau affiché dans le composant.
    });
  }
  deleteMember(id: string) {
    //ouvrir la boite lancé par le click sur delete
    let dialogRef = this.Dialog.open(Popup, {});
    //attendre le click sur le bouton de confirmation
    dialogRef.afterClosed().subscribe((x) => {
      if (x) {
        this.MS.deleteMember(id).subscribe(() => {
          this.ngOnInit(); //après la suppression d'un membre, la méthode ngOnInit() est appelée pour rafraîchir les données affichées dans le composant. Cela permet de mettre à jour l'affichage du tableau des membres après la suppression d'un membre.
        });
      }
      //si click=confirm =>delete sinon rien
    });
  }
}
