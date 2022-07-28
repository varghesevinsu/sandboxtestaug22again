import { Component, Input, Output, EventEmitter } from "@angular/core";
    @Component({
        selector: "leader",
        templateUrl: "./leader.component.html",
         styleUrls: ["./leader.component.css"]
    })
    export class Leader {
        /* Please add your @Input and @Output variables here  */

        @Input() formData: any;
  result: any = []

  constructor() { }

  ngOnInit(): void {
    const userData = this.formData['respLeader'] || []
    userData?.forEach((value: string) => {
      this.result.push({ 'user': value });
    })
  }
    }
    