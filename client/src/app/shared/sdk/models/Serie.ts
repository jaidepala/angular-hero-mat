/* tslint:disable */

declare var Object: any;
export interface SerieInterface {
  "name": string;
  "dateOfEstablishment": Array<any>;
  "medium": string;
  "image"?: string;
  "totalSeasons"?: number;
  "production"?: string;
  "id"?: number;
}

export class Serie implements SerieInterface {
  "name": string;
  "dateOfEstablishment": Array<any>;
  "medium": string;
  "image": string;
  "totalSeasons": number;
  "production": string;
  "id": number;
  constructor(data?: SerieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Serie`.
   */
  public static getModelName() {
    return "Serie";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Serie for dynamic purposes.
  **/
  public static factory(data: SerieInterface): Serie{
    return new Serie(data);
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
      name: 'Serie',
      plural: 'series',
      path: 'series',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "dateOfEstablishment": {
          name: 'dateOfEstablishment',
          type: 'Array&lt;any&gt;'
        },
        "medium": {
          name: 'medium',
          type: 'string'
        },
        "image": {
          name: 'image',
          type: 'string'
        },
        "totalSeasons": {
          name: 'totalSeasons',
          type: 'number'
        },
        "production": {
          name: 'production',
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
