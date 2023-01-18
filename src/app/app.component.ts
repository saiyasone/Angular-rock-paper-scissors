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
    let randomPlayer = this.comPlayer.label;
    let userPlay = this.player.label;
    if (
      (userPlay === 'paper' && randomPlayer === 'rock') ||
      (userPlay === 'scissor' && randomPlayer === 'paper') ||
      (userPlay === 'rock' && randomPlayer === 'scissor')
    ) {
      this.playerScore += 1;
      this.winner = 'You win';
    } else if (
      (userPlay === 'paper' && randomPlayer === 'paper') ||
      (userPlay === 'rock' && randomPlayer === 'rock') ||
      (userPlay === 'scissor' && randomPlayer === 'scissor')
    ) {
      this.winner = 'We draw';
    } else {
      this.comScore += 1;
      this.winner = 'You lose';
    }
  }
}
