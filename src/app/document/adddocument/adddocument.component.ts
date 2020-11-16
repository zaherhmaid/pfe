import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adddocument',
  templateUrl: './adddocument.component.html',
  styleUrls: ['./adddocument.component.scss']
})
export class AdddocumentComponent implements OnInit {

  constructor(private service:DocumentService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm ){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      iddocument:0,
      nomdocument:'',
      reference:''
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.iddocument==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostDocument().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','document register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutDocument().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','document register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }

}
