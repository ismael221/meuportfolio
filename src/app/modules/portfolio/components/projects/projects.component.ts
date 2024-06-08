import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    #dialog = inject(MatDialog);
    

    public arrayProjects = signal<IProjects[]>([
      {
        src: 'assets/img/projects/vfull.png',
        alt:"",
        title:"Vida fullstack",
        width:"100px",
        height:"51px",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci dolor, vitae blandit tortor iaculis eget. Curabitur leo massa, lobortis non leo sit amet, auctor consequat magna. Mauris et nisl nulla. Integer convallis, felis in porttitor pulvinar, lectus sem posuere nunc, maximus condimentum ante tortor eu risus. Vivamus nec leo vitae libero gravida interdum sit amet non neque. Mauris neque ex, commodo vitae volutpat ut, rutrum at ex. Nunc egestas facilisis dolor, sed mollis ligula pharetra ac. Vestibulum pellentesque ante ac eros elementum sodales. Duis accumsan arcu sed orci posuere fringilla. Praesent turpis turpis, dictum luctus felis ut, gravida mollis eros. Nam hendrerit at est vel consequat. Suspendisse tempor id dui a suscipit. Aliquam eget varius quam. Maecenas ultrices dictum diam, a luctus dui posuere sed. Vestibulum nibh nunc, accumsan quis arcu vel, posuere cursus est.",
        links:[
          {
            name:'Conheça o blog',
            href: 'https://example.com',
          }
        ]
      },
      {
        src: 'assets/img/projects/vfull.png',
        alt:"",
        title:"Vida fullstack",
        width:"100px",
        height:"51px",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci dolor, vitae blandit tortor iaculis eget. Curabitur leo massa, lobortis non leo sit amet, auctor consequat magna. Mauris et nisl nulla. Integer convallis, felis in porttitor pulvinar, lectus sem posuere nunc, maximus condimentum ante tortor eu risus. Vivamus nec leo vitae libero gravida interdum sit amet non neque. Mauris neque ex, commodo vitae volutpat ut, rutrum at ex. Nunc egestas facilisis dolor, sed mollis ligula pharetra ac. Vestibulum pellentesque ante ac eros elementum sodales. Duis accumsan arcu sed orci posuere fringilla. Praesent turpis turpis, dictum luctus felis ut, gravida mollis eros. Nam hendrerit at est vel consequat. Suspendisse tempor id dui a suscipit. Aliquam eget varius quam. Maecenas ultrices dictum diam, a luctus dui posuere sed. Vestibulum nibh nunc, accumsan quis arcu vel, posuere cursus est.",
        links:[
          {
            name:'Conheça o blog',
            href: 'https://example.com',
          }
        ]
      },
      {
        src: 'assets/img/projects/vfull.png',
        alt:"",
        title:"Vida fullstack",
        width:"100px",
        height:"51px",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit orci dolor, vitae blandit tortor iaculis eget. Curabitur leo massa, lobortis non leo sit amet, auctor consequat magna. Mauris et nisl nulla. Integer convallis, felis in porttitor pulvinar, lectus sem posuere nunc, maximus condimentum ante tortor eu risus. Vivamus nec leo vitae libero gravida interdum sit amet non neque. Mauris neque ex, commodo vitae volutpat ut, rutrum at ex. Nunc egestas facilisis dolor, sed mollis ligula pharetra ac. Vestibulum pellentesque ante ac eros elementum sodales. Duis accumsan arcu sed orci posuere fringilla. Praesent turpis turpis, dictum luctus felis ut, gravida mollis eros. Nam hendrerit at est vel consequat. Suspendisse tempor id dui a suscipit. Aliquam eget varius quam. Maecenas ultrices dictum diam, a luctus dui posuere sed. Vestibulum nibh nunc, accumsan quis arcu vel, posuere cursus est.",
        links:[
          {
            name:'Conheça o blog',
            href: 'https://example.com',
          }
        ]
      },
      
    ])

    public openDialog(data:IProjects){
      this.#dialog.open(DialogProjectsComponent,{
        data,
        panelClass: EDialogPanelClass.PROJECTS
      })
    }

   
}
