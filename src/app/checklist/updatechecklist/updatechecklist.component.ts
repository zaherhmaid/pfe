import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from 'src/app/services/checklist.service';
import { Checklist } from 'src/app/model/checklist';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatechecklist',
  templateUrl: './updatechecklist.component.html',
  styleUrls: ['./updatechecklist.component.scss']
})
export class UpdatechecklistComponent implements OnInit {
  idchecklist: number;
  checklist: Checklist;
  constructor(private toastr:ToastrService,private route: ActivatedRoute,private router: Router,
    private service:ChecklistService) { }

  ngOnInit() {
    this.checklist = new Checklist();

    this.idchecklist = this.route.snapshot.params['idchecklist'];
    
    this.service.getchecklist(this.idchecklist)
      .subscribe(data => {
        console.log(data)
        this.checklist = data;
      }, error => console.log(error));
      this.resetForm();

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

  updateChecklist() {
      this.service.PutChecklist(this.idchecklist, this.checklist)
        .subscribe(data => {
          console.log(data);
          this.checklist = new Checklist();
          this.gotoList();
        }, error => console.log(error));
    }

   
  

  onSubmit() {

    this.updateChecklist();    
  }

  gotoList() {
    this.router.navigate(['/listchecklist']);
  }

}
