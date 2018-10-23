/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Client } from '../../models/Client';
import { Angular_Loopback } from '../../models/Angular_Loopback';
import { Hero } from '../../models/Hero';
import { Serie } from '../../models/Serie';
import { Season } from '../../models/Season';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Client: Client,
    Angular_Loopback: Angular_Loopback,
    Hero: Hero,
    Serie: Serie,
    Season: Season,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
