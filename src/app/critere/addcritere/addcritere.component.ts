import { Component, OnInit } from '@angular/core';
import { CritereService } from 'src/app/services/critere.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcritere',
  templateUrl: './addcritere.component.html',
  styleUrls: ['./addcritere.component.scss']
})
export class AddcritereComponent implements OnInit {

 
  constructor(private service:CritereService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm ){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      idcritere:0,
      nomcritere:'',
      cas_figure:''
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.idcritere==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostCritere().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','critere register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutCritere().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','critere register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }

}
