import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.Title}}</h4> 
      {{data.Content}}
    </div>
  `
})
export class AdvertisementComponent{
     @Input() data: any;
}