import { Component, Input, Output, EventEmitter } from "@angular/core";
    @Component({
        selector: "scheduler",
        templateUrl: "./scheduler.component.html",
         styleUrls: ["./scheduler.component.css"]
    })
    export class Scheduler {
        /* Please add your @Input and @Output variables here  */
@Input() formData: any;
  result: any = []

  constructor() { }

  ngOnInit(): void {
    const userData = this.formData['respScheduler'] || []
    userData?.forEach((value: string) => {
      this.result.push({ 'user': value });
    })
  }
    }
    