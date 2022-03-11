import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `
    <main>
      <h1>Current Player: {{player}}</h1>
      <button (click)="newGame()">Start New Game</button>
      <h2 *ngIf="winner">Player {{winner}} won the game!</h2>
      <section>
        <app-square *ngFor="let val of squares;let i = index"[value]="val"
        (click)="makeMove(i)">
    
        </app-square>
      </section>
    </main>
  `,
  styles: [
      `main{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
      }
      button{
        width: fit-content;
        margin: auto;
        background-color: transparent;
        border: solid 1px black;
        padding: 0.2rem 0.5rem;
      }
      `,
      `section{
        margin: 1.5rem auto;
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 0px;
      }`,
      `app-square{
        /* border: solid 1px black; */
        height: 200px;
      }`
  ]
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = false;
  winner: string = "";

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? "X" : "O";
  }

  makeMove(idx: number){
    if(!this.winner){
      if(!this.squares[idx]){
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
        this.winner = this.calculateWinner();
      }
    }
  }

  calculateWinner(){
    const lines = [[0,1,2], [3,4,5], [6,7,8],
                  [0,3,6], [1,4,7], [2,5,8],
                  [0,4,8], [2,4,6]];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] == this.squares[b] && this.squares[a] == this.squares[c]){
        return this.squares[a];
      }
    }
    return null;
  }

}
