import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public content: string = "";
  public qrCode: any = null;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  createCode(){
    this.imageService.generateQRCode(this.content).subscribe(res => {
        this.qrCode= this.imageService.decodeImage(res.code);
    })
  }

}
