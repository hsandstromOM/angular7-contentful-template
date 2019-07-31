import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getHomePage(homeId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'generalPage'
    }, { 'sys.id': homeId }))
      .then(res => res.items[0]);
  }

  getCompanyInfo(query?: object): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'companyInfo'
    }, query))
      .then(res => res.items[0]);
  }

}
