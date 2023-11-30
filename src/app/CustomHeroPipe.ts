import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CustomHero' })
export class CustomHeroPipe implements PipeTransform {
  transform(value: string, Id: number) {
    let fav: string = '';
    if (value === 'ironman') {
      fav = 'love you 3000';
    }
    if (value === 'thor') {
      fav = 'god of the thunder';
    }
    if (value === 'spiderman') {
      fav = 'home coming';
    }
    return `${value} rank  ${Id}  ${fav}`;
  }
}
