import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChecklistService } from 'src/app/services/checklist.service';
import { ToastrService } from 'ngx-toastr';
import { Checklist } from 'src/app/model/checklist';
import{Router, ActivatedRoute} from '@angular/router'

import {ExportExcelService} from '../../services/export-excel.service';
//import * as jsPDF from 'jspdf'
//import * as jsPDF from 'jspdf';
//import 'jspdf-autotable';


@Component({
  selector: 'app-listchecklist',
  templateUrl: './listchecklist.component.html',
  styleUrls: ['./listchecklist.component.scss']
})
export class ListchecklistComponent implements OnInit {
  
  title1 = 'export-table-data-to-pdf-using-jspdf-example';

  title = 'angular-export-to-excel';
  head = [['biat  bank ']]

 private arr:any;

  dataForExcel = [];
  
//  @ViewChild('htmlData') htmlData:ElementRef;

  constructor(private service:ChecklistService ,
    private toastr:ToastrService,private router :Router ,public ete: ExportExcelService) { }
user:any;
  ngOnInit() {
  this.user =this.service.listchek().subscribe((users)=>{
    console.log(users);

    this.user=users;

  },(error)=>{
    console.log(error);
  })


  console.log(this.user)


  }
  populateForm(pd:Checklist){
    this.service.formData = Object.assign({},pd) ;
  }

onDelete(idchecklist){
    if (confirm('are you sureto delete this agent ?')){
     this.service.DeleteChecklist(idchecklist)
     .subscribe(res=>{
       this.service.refreshList();
       this.toastr.warning('Deleted successfully','Checklist registre');
       
    },
    err=>{
      console.log(err);
    })
  }
}
updateChecklist(){
  this.router.navigate(['update']);
}



exportToExcel() {

  this.user.forEach((row: any) => {
    this.dataForExcel.push(Object.values(row))
  })

  let reportData = {
    title: 'List Check List',
    data: this.dataForExcel,
    headers: Object.keys(this.user[0])
  }

  this.ete.exportExcel(reportData);


//public openPDF():void {
 // let DATA = this.htmlData.nativeElement;
 // let doc = new jsPDF('p','pt', 'a4');
 //// doc.fromHTML(DATA.innerHTML,15,15);
 // doc.output('dataurlnewwindow');
//}


//public downloadPDF():void {
  //let DATA = this.htmlData.nativeElement;
  //let doc = new jsPDF('p','pt', 'a4');

  //let handleElement = {
    //'#editor':function(element,renderer){
      //return true;
    //}
  //};
  //doc.fromHTML(DATA.innerHTML,15,15,{
    //'width': 200,
    //'elementHandlers': handleElement
  //});

  //doc.save('angular-demo.pdf');
//}





}


}



