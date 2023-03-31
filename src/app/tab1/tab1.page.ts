import { Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})

export class Tab1Page implements OnInit {
  allCharacters: any;

constructor(
    private serviceOne: MiservicioService
  ) {}

  ngOnInit() {
    this.serviceOne.getAllCharacters().then( (res: any) => {
    this.allCharacters = res;
    console.log (this.allCharacters);
    });
    }
}
    

