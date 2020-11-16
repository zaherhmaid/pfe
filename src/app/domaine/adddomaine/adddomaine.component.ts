import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/services/domaine.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adddomaine',
  templateUrl: './adddomaine.component.html',
  styleUrls: ['./adddomaine.component.scss']
})
export class AdddomaineComponent implements OnInit {

  constructor(private service:DomaineService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      iddomaine:0,
      nomdomaine:''
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.iddomaine==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostDomaine().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','domaine register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutDomaine().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','domaine register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }

}
