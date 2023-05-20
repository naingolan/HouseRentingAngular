import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
    A water systems leakage reporting system is a software application or platform designed to facilitate the reporting and management of water leakages within a water supply network. It enables users, such as utility companies, municipalities, or individuals, to report and track instances of water leaks, aiding in the efficient detection and resolution of leaks.
    
Here is a description of the key features and functionalities typically found in a water systems leakage reporting system:
    </p>
  `,
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

}
