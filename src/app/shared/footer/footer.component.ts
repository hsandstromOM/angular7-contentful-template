import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful'



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  info: Entry<any>;
  year: any;
  constructor(
    private contentfulService: ContentfulService,
    public sanitizer: DomSanitizer,
    public router: Router
  ) {
    if (document.getElementById("mobileMenuScript"))
      document.getElementById("mobileMenuScript").remove();
    var mobileMenuScript = document.createElement("script");
    mobileMenuScript.setAttribute("id", "mobileMenuScript");
    mobileMenuScript.setAttribute("src", "assets/mobile-menu.js");
    document.body.appendChild(mobileMenuScript);
  }

  ngOnInit() {
    this.contentfulService.getCompanyInfo()
      .then((info) => {
        this.info = info;
      });
      const d = new Date();
      this.year = d.getFullYear();
  }

}
