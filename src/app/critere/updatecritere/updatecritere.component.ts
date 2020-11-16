import { Component, OnInit } from '@angular/core';
import { Critere } from 'src/app/model/critere';
import { ActivatedRoute, Router } from '@angular/router';
import { CritereService } from 'src/app/services/critere.service';

@Component({
  selector: 'app-updatecritere',
  templateUrl: './updatecritere.component.html',
  styleUrls: ['./updatecritere.component.scss']
})
export class UpdatecritereComponent implements OnInit {

  id: number;
  critere: Critere;

  constructor(private route: ActivatedRoute,private router: Router,
    private critereService: CritereService) { }

  ngOnInit() {
    this.critere = new Critere();

    this.id = this.route.snapshot.params['id'];
    
    this.critereService.getCritere(this.id)
      .subscribe(data => {
        console.log(data)
        this.critere = data;
      }, error => console.log(error));
  }

  update() {
    this.critereService.PutCritere()
      .subscribe(data => {
        console.log(data);
        this.critere = new Critere();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}



