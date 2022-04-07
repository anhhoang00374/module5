import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Mean} from '../model/mean';
import {WordService} from '../service/word.service';

@Component({
  selector: 'app-dislay-mean',
  templateUrl: './display-mean.component.html',
  styleUrls: ['./display-mean.component.css']
})
export class DisplayMeanComponent implements OnInit {
  wordId: number;
  word: Mean;
  constructor(private activatedARoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedARoute.paramMap.subscribe((param: ParamMap) => {
      this.wordId = Number(param.get('id'));
      this.word = WordService.getId(this.wordId);
      console.log(this.word);
    });
  }

}
