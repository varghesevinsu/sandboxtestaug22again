import { Component, Input, Output, EventEmitter } from "@angular/core";
    @Component({
        selector: "leadertable",
        templateUrl: "./leadertable.component.html",
         styleUrls: ["./leadertable.component.css"]
    })
    export class Leadertable {
        /* Please add your @Input and @Output variables here  */

        @Input() formData: any;
  result: any = []

  constructor() { }

  ngOnInit(): void {
    const userData = this.formData['respLeader']
    if (typeof userData === 'string') {
      const data = userData?.split(',');
      data?.forEach((value: string) => {
        this.result.push({ 'user': value });
      })

    }
  }

    }
    