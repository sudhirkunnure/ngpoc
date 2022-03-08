import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'AppFilterVegetables' })

export class AppFilterVegetables implements PipeTransform {
transform(vegetables: any, searchText: any): any {
        if(searchText == null) return vegetables;

        return vegetables.filter(function(item:any){
          return item.Name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
      }
    }
