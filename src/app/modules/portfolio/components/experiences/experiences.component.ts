import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
    public arrayExperiences = signal<IExperiences[]>([
      {
        summary:{
          strong: 'Técnico Em suporte ',
          p:'Enro Sistemas | Set 2012 - Dez 2023',
        },
        text:'<p>Técnico em suporte na enro sistemas desde sempre</p>',
      },
    ]);

   constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
