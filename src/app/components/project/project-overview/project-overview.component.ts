import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-overview',
  imports: [],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.css'
})
export class ProjectOverviewComponent {
  projectId: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ){
    const tempId = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectId = tempId ? tempId : ''; 
  }
}
