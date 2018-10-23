/* tslint:disable */

declare var Object: any;
export interface SeasonInterface {
  "name": string;
  "seasonNo": number;
  "totalSeason": number;
  "episodes"?: Array<any>;
  "id"?: number;
}

export class Season implements SeasonInterface {
  "name": string;
  "seasonNo": number;
  "totalSeason": number;
  "episodes": Array<any>;
  "id": number;
  constructor(data?: SeasonInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Season`.
   */
  public static getModelName() {
    return "Season";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Season for dynamic purposes.
  **/
  public static factory(data: SeasonInterface): Season{
    return new Season(data);
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
      name: 'Season',
      plural: 'seasons',
      path: 'seasons',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "seasonNo": {
          name: 'seasonNo',
          type: 'number',
          default: 1
        },
        "totalSeason": {
          name: 'totalSeason',
          type: 'number'
        },
        "episodes": {
          name: 'episodes',
          type: 'Array&lt;any&gt;',
          default: <any>[]
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
