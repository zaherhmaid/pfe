import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ValideurService } from 'src/app/services/valideur.service';
import { Valideur } from 'src/app/model/valideur';

@Component({
  selector: 'app-listvalideur',
  templateUrl: './listvalideur.component.html',
  styleUrls: ['./listvalideur.component.scss']
})
export class ListvalideurComponent implements OnInit {

  constructor(private service:ValideurService ,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Valideur){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(idvalideur){
    if (confirm('are you sureto delete this valideur ?')){
     this.service.DeleteValideur(idvalideur)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','valideur registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}

}
