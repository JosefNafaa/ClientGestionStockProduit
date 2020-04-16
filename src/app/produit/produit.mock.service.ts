import { Injectable } from '@angular/core';
import {Produit} from '../shared/produit';
import { Component } from '@angular/core';

@Injectable()
export class ProduitMockService{

 PRODUITS: Produit[] = [];

constructor() {
  let p1: Produit =new Produit('Livre',15,10);
  let p2: Produit =new Produit('Souris',20,5);
  let p3: Produit =new Produit('Clavier',10,7);

  this.PRODUITS.push(p1);
  this.PRODUITS.push(p2);
  this.PRODUITS.push(p3);
};

public getProduits() :Produit[]{
  return this.PRODUITS;
}


}
