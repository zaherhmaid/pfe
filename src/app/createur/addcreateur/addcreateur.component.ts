import { Component, OnInit } from '@angular/core';
import { CreateurService } from 'src/app/services/createur.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcreateur',
  templateUrl: './addcreateur.component.html',
  styleUrls: ['./addcreateur.component.scss']
})
export class AddcreateurComponent implements OnInit {


  constructor(private service:CreateurService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      idcreateur:0
     
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.idcreateur==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostCreateur().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','createur register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutCreateur().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','createur register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }

}
