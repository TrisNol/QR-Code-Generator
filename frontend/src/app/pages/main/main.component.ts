import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
