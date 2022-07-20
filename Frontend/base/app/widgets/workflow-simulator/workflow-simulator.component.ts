import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-workflow-simulator',
  templateUrl: './workflow-simulator.component.html',
  styleUrls: ['./workflow-simulator.component.scss'],
  providers:[DialogService]
})
export class WorkflowSimulatorComponent implements OnInit {

  constructor(
    private dialogService : DialogService,
    private dynamicDialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig
    
  ) { }

  statusFieldConfig:any = null;
  detailFormControls = new FormGroup({
    actor : new FormControl(),
    status : new FormControl(),
  })

  ngOnInit(): void {
    this.statusFieldConfig = this.dynamicDialogConfig.data?.statusFieldConfig
  }

  loadWorkflow(){
    const values = this.detailFormControls.getRawValue();
    
    this.dynamicDialogRef.close({
      userTypes :[values.actor],
      step : values.status
    });
  }
  getSelectedObject(field:string,options:any){
    if(options){
      const selectedObj = (options.filter((item: { label: any}) => item.label.includes(field)));
      return selectedObj[0];

    }
  }

  log(data:any){
    console.log(data)
  }

}
