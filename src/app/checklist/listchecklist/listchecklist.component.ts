import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ToastrService } from 'ngx-toastr';
import { Checklist } from 'src/app/model/checklist';
import{Router, ActivatedRoute} from '@angular/router'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-listchecklist',
  templateUrl: './listchecklist.component.html',
  styleUrls: ['./listchecklist.component.scss']
})
export class ListchecklistComponent implements OnInit {

  
  constructor(private service:ChecklistService ,
    private toastr:ToastrService,private router :Router) { }

  ngOnInit() {
    this.service.refreshList();

  }
  populateForm(pd:Checklist){
    this.service.formData = Object.assign({},pd) ;
  }

onDelete(idchecklist){
    if (confirm('are you sureto delete this agent ?')){
     this.service.DeleteChecklist(idchecklist)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','Checklist registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}
updateChecklist(){
  this.router.navigate(['update']);
}




}
