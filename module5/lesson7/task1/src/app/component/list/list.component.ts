import { Component, OnInit } from '@angular/core';
import {Mean} from '../../model/mean';
import {WordService} from '../../service/word.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listWord: Mean[];
  constructor() { }

  ngOnInit(): void {
    this.listWord = WordService.listWord;
  }

}
