/* tslint:disable */

declare var Object: any;
export interface HeroInterface {
  "name": string;
  "alterEgo"?: string;
  "likes"?: number;
  "dateOfEstablishment"?: Date;
  "image"?: string;
  "id"?: number;
}

export class Hero implements HeroInterface {
  "name": string;
  "alterEgo": string;
  "likes": number;
  "dateOfEstablishment": Date;
  "image": string;
  "id": number;
  constructor(data?: HeroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Hero`.
   */
  public static getModelName() {
    return "Hero";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Hero for dynamic purposes.
  **/
  public static factory(data: HeroInterface): Hero{
    return new Hero(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Hero',
      plural: 'heroes',
      path: 'heroes',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "alterEgo": {
          name: 'alterEgo',
          type: 'string'
        },
        "likes": {
          name: 'likes',
          type: 'number'
        },
        "dateOfEstablishment": {
          name: 'dateOfEstablishment',
          type: 'Date'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
