import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss'],
    standalone: false
})
export class SiteHeaderComponent {
  readonly languages = [
    { code: 'en', label: 'EN' },
    { code: 'ms', label: 'BM' },
    { code: 'ta', label: 'TA' },
    { code: 'ar', label: 'AR' }
  ];

  constructor(private readonly translate: TranslateService) {}

  get currentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  useLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value;
    localStorage.setItem('ahc-language', language);
    this.translate.use(language);
  }
}
