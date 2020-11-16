import { Component, OnInit } from '@angular/core';
import { CritereService } from 'src/app/services/critere.service';
import { ToastrService } from 'ngx-toastr';
import { Critere } from 'src/app/model/critere';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcritere',
  templateUrl: './listcritere.component.html',
  styleUrls: ['./listcritere.component.scss']
})
export class ListcritereComponent implements OnInit {
  constructor(private service:CritereService , private router: Router,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Critere){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(idcritere){
    if (confirm('are you sureto delete this critere ?')){
     this.service.DeleteCritere(idcritere)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','critere registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}
update(){
  this.router.navigate(['updates']);
}

}
