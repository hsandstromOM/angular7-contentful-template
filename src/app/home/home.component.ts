import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful'

import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Entry<any>;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {

    const homeId = '1K2qtvxCOpr114EnxkV18q';
    this.contentfulService.getHomePage(homeId)
      .then((home) => {
        this.home = home;
        console.log('home data', this.home);

        this.titleService.setTitle(home.fields.seoTitle);
        this.meta.addTag({ id: "siteDescription", name: "description", content: home.fields.seoDescription });

        this.meta.updateTag({ property: 'og:title', content: home.fields.seoTitle });
        this.meta.updateTag({ property: 'og:description', content: home.fields.seoDescription });
        this.meta.updateTag({ property: 'og:site_name', content: home.fields.seoTitle });
        this.meta.updateTag({ property: 'og:url', content: "https://example.com" });

        this.meta.updateTag({ name: 'twitter:title', content: home.fields.seoTitle });
        this.meta.updateTag({ name: 'twitter:card', content: home.fields.seoDescription });
        this.meta.updateTag({ name: 'twitter:url', content: "https://example.com" });

      });

      this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    setTimeout(() => { }, 500);
  }

}
