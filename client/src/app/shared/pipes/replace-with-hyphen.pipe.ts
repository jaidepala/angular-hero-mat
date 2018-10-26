import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'replaceWithHyphen'
})
export class ReplaceWithHyphenPipe implements PipeTransform {

	transform(value: any, args ? : any): any {
		return value.replace(/\s+/g, '-').toLowerCase();;
	};
}
