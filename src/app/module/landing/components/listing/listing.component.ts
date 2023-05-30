import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  showModal: boolean = false;
  intransition: boolean = false;
  selectedCard: any = {};
  cards: any = [
    {
      picture1: '../../../assets/images/card-pic1.jpg',
      picture2: '../../../assets/images/card-pic2.jpg',
      picture3: '../../../assets/images/card-pic3.jpg',
      title: 'Whitefish Estate',
      description: 'Whitefish,Montana,United States',
      rating: '5.0',
      price: '$10,000',
    },
    {
      picture1: 'assets/images/card-pic2.jpg',
      picture2: 'assets/images/card-pic3.jpg',
      picture3: 'assets/images/card-pic4.jpg',
      title: 'Luxury stay in Weston, Saint James, Barbados',
      description: 'Weston, Saint James, Barbados',
      rating: '5.0',
      price: '$1500',
    },
    {
      picture1: 'assets/images/card-pic3.jpg',
      picture2: 'assets/images/card-pic4.jpg',
      picture3: 'assets/images/card-pic5.jpg',
      title: 'Numero 22 - Lake Como - Design Living & Lake View',
      description: 'Laglio, Lombardia, Italy',
      rating: '4.2',
      price: '$359',
    },
    {
      picture1: 'assets/images/card-pic4.jpg',
      picture2: 'assets/images/card-pic5.jpg',
      picture3: 'assets/images/card-pic6.jpeg',
      title: '7,500 sq ft Private Beachfront Estate',
      description: 'Dubai, United Arab Emirates',
      rating: '3.3',
      price: '$4000',
    },
    {
      picture1: 'assets/images/card-pic5.jpg',
      picture2: 'assets/images/card-pic6.jpeg',
      picture3: 'assets/images/card-pic7.jpg',
      title: 'Bohemian & Spacious / Private Pool and Garden',
      description: 'Tulum, Quintana Roo, Mexico',
      rating: '4.5',
      price: '$15,000',
    },
    {
      picture1: 'assets/images/card-pic6.jpeg',
      picture2: 'assets/images/card-pic7.jpg',
      picture3: 'assets/images/card-pic8.jpg',
      title: 'Designer A-Frame Cabin in the Trees',
      description: 'Lake Arrowhead, California, United States',
      rating: '3.99',
      price: '$1000',
    },

    {
      picture1: 'assets/images/card-pic7.jpg',
      picture2: 'assets/images/card-pic8.jpg',
      picture3: 'assets/images/card-pic9.jpg',
      title: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
      description: 'Aspen, Colorado, United States',
      rating: '3.0',
      price: '$570',
    },
    {
      picture1: 'assets/images/card-pic8.jpg',
      picture2: 'assets/images/card-pic9.jpg',
      picture3: 'assets/images/card-pic10.jpg',
      title: "Magnolia's Hillcrest Cottage",
      description: 'Waco, Texas, United States',
      rating: '4.0',
      price: '$190',
    },
    {
      picture1: 'assets/images/card-pic9.jpg',
      picture2: 'assets/images/card-pic10.jpg',
      picture3: 'assets/images/card-pic1.jpg',
      title: 'Unique Architecture Cave House by Cycladica',
      description: 'Oia, South Aegean, Greece',
      rating: '5.0',
      price: '$780',
    },
    {
      picture1: 'assets/images/card-pic10.jpg',
      picture2: 'assets/images/card-pic1.jpg',
      picture3: 'assets/images/card-pic2.jpg',
      title: 'ATELIER ArtVillas Costa Rica',
      description: 'Uvita, Osa, Puntaneras, Costa Rica',
      rating: '4.80',
      price: '$800',
    },
    {
      picture1: 'assets/images/card-pic3.jpg',
      picture2: 'assets/images/card-pic2.jpg',
      picture3: 'assets/images/card-pic1.jpg',
      title: 'Mountainside Luxury Cabin with Batulao View',
      description: 'Calaca, Calabarzon, Philippines',
      rating: '2.0',
      price: '$140',
    },
  ];

  openModal(event: any) {
    this.selectedCard = event;
    this.showModal = true;
    setTimeout(() => {
      this.intransition = true;
    }, 500);
    document.body.style.overflowY = 'hidden';
  }

  closeModal() {
    this.showModal = false;

    setTimeout(() => {
      this.intransition = false;
      this.selectedCard = {};
    }, 500);
    document.body.style.overflowY = 'auto';
  }
}
