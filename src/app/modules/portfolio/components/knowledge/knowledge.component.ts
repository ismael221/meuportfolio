import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayknowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Icone de conhecimento de Spring boot'
    },
  ])
}
