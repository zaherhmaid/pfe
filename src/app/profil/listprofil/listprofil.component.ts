import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { ToastrService } from 'ngx-toastr';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-listprofil',
  templateUrl: './listprofil.component.html',
  styleUrls: ['./listprofil.component.scss']
})
export class ListprofilComponent implements OnInit {

  constructor(private service:ProfilService ,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Profil){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(idprofil){
    if (confirm('are you sureto delete this profil ?')){
     this.service.DeleteProfil(idprofil)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','profil registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}

}
