import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss'],
    standalone: false
})
export class SiteHeaderComponent {
  currentLanguage = localStorage.getItem('ahc-language') || 'en';

  readonly languages = [
    { code: 'en', label: 'EN' },
    { code: 'ms', label: 'BM' },
    { code: 'ta', label: 'TA' },
    { code: 'ar', label: 'AR' },
    { code: 'zh', label: '中文' }
  ];

  constructor(private readonly translate: TranslateService) {
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.currentLanguage = lang;
    });
  }

  useLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value;
    this.currentLanguage = language;
    localStorage.setItem('ahc-language', language);
    this.translate.use(language);
  }
}
