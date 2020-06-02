import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface TextAreaData {
  /** previous input text */
  textInput?: string;
  customPlaceholder?: string;
  textAreaSize?: any;
  maxLength?: number;
  type?: any;
  infoMessage?: string;
}

@Component({
  selector: 'mes-text-area',
  templateUrl: './mes-text-area.component.html',
  styleUrls: ['./mes-text-area.component.scss']
})

export class MesTextAreaComponent implements OnInit{

  @Input() textAreaData: TextAreaData;
  @Output() textMessageEmitter: EventEmitter<string> = new EventEmitter;

  commentField = new FormControl('', [
    Validators.required
  ]);
  
  constructor() { }

  ngOnInit() {
    this.textAreaData.textInput? this.commentField.setValue(this.textAreaData.textInput) : '';
  }

  /** emits the comment when leaving the textarea (blur) */
  emitCommentText(messageText) {
    this.textMessageEmitter.emit(messageText);
  }
  
}
