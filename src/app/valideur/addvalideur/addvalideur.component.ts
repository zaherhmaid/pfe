import { Component, OnInit } from '@angular/core';
import { ValideurService } from 'src/app/services/valideur.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addvalideur',
  templateUrl: './addvalideur.component.html',
  styleUrls: ['./addvalideur.component.scss']
})
export class AddvalideurComponent implements OnInit {

  constructor(private service:ValideurService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      idvalideur:0,
      distination:''
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.idvalideur==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostValideur().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','valideur register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutValideur().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','valideur register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }


}
