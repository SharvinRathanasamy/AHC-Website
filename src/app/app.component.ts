import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'AHC Resources';

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.translate.addLangs(['en', 'ms', 'ta', 'ar']);
    this.translate.setDefaultLang('en');

    const savedLanguage = localStorage.getItem('ahc-language') || 'en';
    this.translate.use(savedLanguage);
    this.setDocumentLanguage(savedLanguage);

    this.translate.onLangChange.subscribe(({ lang }) => this.setDocumentLanguage(lang));
  }

  private setDocumentLanguage(language: string): void {
    this.document.documentElement.lang = language;
    this.document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }
}
