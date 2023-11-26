import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private route: ActivatedRoute,
    private router: Router){

    }

    irepisodios(): void{
      this.router.navigate(['episodios'],{relativeTo: this.route});
    }

    irnotas(): void{
      this.router.navigate(['notas'], {relativeTo: this.route});
    }

    irestacionamiento(): void{
      this.router.navigate(['estacionamiento'], {relativeTo: this.route});
    }
}
