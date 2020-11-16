import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/services/domaine.service';
import { Domaine } from 'src/app/model/domaine';

@Component({
  selector: 'app-listdomaine',
  templateUrl: './listdomaine.component.html',
  styleUrls: ['./listdomaine.component.scss']
})
export class ListdomaineComponent implements OnInit {
  constructor(private service:DomaineService ,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Domaine){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(iddomaine){
    if (confirm('are you sureto delete this domaine ?')){
     this.service.DeleteDomaine(iddomaine)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','domaine registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}

}
