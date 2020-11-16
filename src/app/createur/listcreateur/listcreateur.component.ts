import { Component, OnInit } from '@angular/core';
import { CreateurService } from 'src/app/services/createur.service';
import { ToastrService } from 'ngx-toastr';
import { Createur } from 'src/app/model/createur';

@Component({
  selector: 'app-listcreateur',
  templateUrl: './listcreateur.component.html',
  styleUrls: ['./listcreateur.component.scss']
})
export class ListcreateurComponent implements OnInit {

  constructor(private service:CreateurService ,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Createur){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(idcreateur){
    if (confirm('are you sureto delete this createur ?')){
     this.service.DeleteCreateur(idcreateur)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','createur registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}

}
