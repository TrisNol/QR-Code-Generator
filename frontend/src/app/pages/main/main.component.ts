import { Component, signal } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent {

  public content: string = "";
  public qrCode = signal<any>(null);
  constructor(private imageService: ImageService) { }

  createCode() {
    this.imageService.generateQRCode(this.content).subscribe(res => {
      this.qrCode.set(this.imageService.decodeImage(res.code));
    })
  }

}
