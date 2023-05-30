import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showModal: boolean = false;
  intransition: boolean = false;
  booking: string = 'Anywhere';
  guest: number = 1;
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

  selectBooking(bookingText: string) {
    this.booking = bookingText;
  }

  addGuest(type: string) {
    if (this.guest <= 0 && type == 'minus') {
      return;
    }
    if (type == 'add') {
      this.guest += 1;
    }
    if (type == 'minus') {
      this.guest -= 1;
    }
  }
}
