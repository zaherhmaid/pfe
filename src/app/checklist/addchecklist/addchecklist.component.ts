import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import{ Router, Route} from '@angular/router'
import { DomaineService } from 'src/app/services/domaine.service';

@Component({
  selector: 'app-addchecklist',
  templateUrl: './addchecklist.component.html',
  styleUrls: ['./addchecklist.component.scss']
})
export class AddchecklistComponent implements OnInit {

  constructor(private service:ChecklistService, private toastr:ToastrService,private router :Router
    ,private services:DomaineService) { }
  ngOnInit() {
this.resetForm();
this.services.refreshList();

  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      idchecklist:0,
      libelle:'',
      critere:'',
      cas_de_figure:'',
      document_exiges:'',
      autres_documents:'',
      
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.idchecklist==0)
    this.isertRecord(form);

 
    }
    isertRecord(from:NgForm){
     this.service.PostChecklist().subscribe(
       res => {
        this.resetForm(from);
        this.toastr.success('Sumbitted successfuly','checklist Ajouté');
        this.service.refreshList();
      },
       err=>{
 console.log(err);
       }
     )
 
    }
 
 
 }
 