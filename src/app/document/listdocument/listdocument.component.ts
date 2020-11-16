import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { ToastrService } from 'ngx-toastr';
import { Document } from 'src/app/model/document';


@Component({
  selector: 'app-listdocument',
  templateUrl: './listdocument.component.html',
  styleUrls: ['./listdocument.component.scss']
})
export class ListdocumentComponent implements OnInit {

  constructor(private service:DocumentService ,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd:Document){
    this.service.formData = Object.assign({},pd) ;
  }
  onDelete(iddocument){
    if (confirm('are you sureto delete this document ?')){
     this.service.DeleteDocument(iddocument)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','document registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}

}
