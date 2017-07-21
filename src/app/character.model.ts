import { Item } from './item.model';

export class Character {
    constructor(public name: string, public race: string, public gender: string, public characterClass: string, public strength: number, public dexterity: number, public constitution: number, public intelligence: number, public wisdom: number, public charisma: number, public equipmentList: Item[]) {

    }
}
