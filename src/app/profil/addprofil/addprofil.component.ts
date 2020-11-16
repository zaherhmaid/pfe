import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.scss']
})
export class AddprofilComponent implements OnInit {

  constructor(private service:ProfilService, private toastr:ToastrService) { }

  ngOnInit() {
this.resetForm();


  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      idprofil:0,
      matricule:'',
      nom:'',
      prenom:'',
      unite:'',
      fonction:'',
      mdp:'',
      role:'',
      login:''
    }
  }
 onSubmit(form:NgForm){
   if(this.service.formData.idprofil==0)
   this.isertRecord(form);
 else
 this.updateRecord(form);

   }
   isertRecord(from:NgForm){
    this.service.PostProfil().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.success('Sumbitted successfuly','profil register');
       this.service.refreshList();
     },
      err=>{
console.log(err);
      }
    )

   }
   updateRecord(from:NgForm){
    this.service.PutProfil().subscribe(
      res => {
       this.resetForm(from);
       this.toastr.info('update successfuly','profil register');
       this.service.refreshList();

     },
      err=>{
console.log(err);
      }
    )

   }

}
