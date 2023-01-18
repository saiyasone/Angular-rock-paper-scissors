interface gamePlay {
  label: string;
  icon: string;
}

import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  playerScore = 0;
  comScore = 0;
  winner = '';
  player: gamePlay = {
    icon: '',
    label: '',
  };
  gameQuiz: gamePlay[] = [
    {
      label: 'rock',
      icon: 'fas fa-hand-fist',
    },
    {
      label: 'paper',
      icon: 'fas fa-hand',
    },
    {
      label: 'scissor',
      icon: 'fas fa-scissors',
    },
  ];
  comPlayer = this.gameQuiz[0];

  randomPlayer() {
    if (!this.player.label) {
      return;
    }
    let counter = 0;
    let startGame = setInterval(() => {
      counter++;
      this.comPlayer =
        this.gameQuiz[Math.floor(Math.random() * this.gameQuiz.length)];
      this.winner = '';
      if (counter > 5) {
        clearInterval(startGame);
        this.selectWinner();
      }
    }, 100);
  }

  selectAnswer(val: gamePlay) {
    this.player = val;
    this.winner = '';
  }

  selectWinner() {
    let comPlayer$ = this.comPlayer.label;
    let userPlay$ = this.player.label;
    if (
      (userPlay$ === 'paper' && comPlayer$ === 'rock') ||
      (userPlay$ === 'scissor' && comPlayer$ === 'paper') ||
      (userPlay$ === 'rock' && comPlayer$ === 'scissor')
    ) {
      setTimeout(() => {
        this.playerScore += 1;
        this.winner = 'You win';
      }, 250);
    } else if (
      (userPlay$ === 'paper' && comPlayer$ === 'paper') ||
      (userPlay$ === 'rock' && comPlayer$ === 'rock') ||
      (userPlay$ === 'scissor' && comPlayer$ === 'scissor')
    ) {
      setTimeout(() => {
        this.winner = 'We draw';
      }, 250);
    } else {
      setTimeout(() => {
        this.comScore += 1;
        this.winner = 'You lose';
      }, 250);
    }
  }
}
