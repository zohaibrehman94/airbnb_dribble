import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showModal: boolean = false;
  intransition: boolean = false;

  @HostListener('window:scroll', []) onWindowScroll() {
    const verticalOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (verticalOffset > 50) {
      document.getElementById('secondaryNav')!.style.position = 'fixed';
      document.getElementById('secondaryNav')!.style.top = '0';
    } else {
      document.getElementById('secondaryNav')!.style.position = 'inherit';
    }
  }

  openModal() {
    this.showModal = true;
    this.intransition = true;
    document.body.style.overflowY = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    setTimeout(() => (this.intransition = false), 500);
    document.body.style.overflowY = 'auto';
  }
}
