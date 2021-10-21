import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sprite-gallery',
  templateUrl: './sprite-gallery.component.html',
  styleUrls: ['./sprite-gallery.component.css']
})
export class SpriteGalleryComponent implements OnInit {

  @Input() title: string
  @Input() gallery: { key: string, src: string }[];

  constructor() { }

  ngOnInit(): void {
  }

}
