import {Mean} from '../model/mean';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WordService{
  public static listWord: Mean[] = [{
    id: 1,
    vn: 'xin chào',
    us: 'hi'
  }, {
    id: 2,
    vn: 'giáo viên',
    us: 'teacher'
  }, {
    id: 3,
    vn: 'sách',
    us: 'book'
  }, {
    id: 4,
    vn: 'bút',
    us: 'pen'
  }, {
    id: 5,
    vn: 'nhà',
    us: 'house'
  }, {
    id: 6,
    vn: 'trường',
    us: 'school'
  }, ];

  // @ts-ignore
  static getId(id: number): Mean {
    for (const word of WordService.listWord){
      if (word.id === id){
        return word;
      }
    }
  }
}


