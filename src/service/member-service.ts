import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//le decorateur Injectable permet de déclarer un service injectable dans l'application Angular. Il indique que la classe peut être injectée en tant que dépendance dans d'autres composants ou services. Le paramètre providedIn: 'root' signifie que le service sera disponible à l'échelle de l'application entière, ce qui permet de partager une seule instance du service entre tous les composants qui en ont besoin.
@Injectable({
  providedIn: 'root', //sur toute la route de l'application, ce service sera disponible pour être injecté dans n'importe quel composant ou service.
})
export class MemberService {
  constructor(private http: HttpClient) {} //le constructeur de la classe MemberService. Il utilise l'injection de dépendance pour obtenir une instance de HttpClient, qui est un service Angular permettant d'effectuer des requêtes HTTP vers un serveur backend. Cela permet au service de communiquer avec une API ou un serveur pour récupérer ou envoyer des données liées aux membres.
  //toutes les methodes et propriétés du service seront définies ici. Le service peut contenir des méthodes pour effectuer des opérations liées aux membres, telles que la récupération de données depuis une API, la gestion de l'état des membres, etc.
  //de type http vers le backend pour récupérer les données des membres, ou d'autres opérations liées aux membres.
  getAllMembers() {
    return this.http.get<any[]>('http://localhost:3000/members');
  }
}
