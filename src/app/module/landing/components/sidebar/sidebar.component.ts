import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  pages: any = [
    {
      name: 'All Homes',
      icon: '../../../../../assets/logo.svg',
    },
    {
      name: 'Amazing Views',
      icon: '../../../../../assets/views.svg',
    },
    {
      name: 'Tiny Homes',
      icon: '../../../../../assets/tiny-homes.svg',
    },
    {
      name: "Chef's Kitchen",
      icon: '../../../../../assets/chef.svg',
    },
    {
      name: 'Surfing',
      icon: '../../../../../assets/surfiing.svg',
    },
    {
      name: 'Mansions',
      icon: '../../../../../assets/mansion.svg',
    },
    {
      name: 'Luxe',
      icon: '../../../../../assets/luxe.svg',
    },
    {
      name: 'Treehouses',
      icon: '../../../../../assets/tree.svg',
    },
    {
      name: 'Camping',
      icon: '../../../../../assets/camping.svg',
    },
    {
      name: 'Beachfront',
      icon: '../../../../../assets/beach.svg',
    },
    {
      name: 'Farms',
      icon: '../../../../../assets/farm.svg',
    },
    {
      name: 'Castles',
      icon: '../../../../../assets/castle.svg',
    },
    {
      name: 'Islands',
      icon: '../../../../../assets/island.svg',
    },
    {
      name: 'Vineyards',
      icon: '../../../../../assets/vineyard.svg',
    },
    {
      name: 'Amazing Pools',
      icon: '../../../../../assets/pool.svg',
    },
    {
      name: 'Skiing',
      icon: '../../../../../assets/skiing.svg',
    },
    {
      name: 'Desert',
      icon: '../../../../../assets/desert.svg',
    },
  ];
}
