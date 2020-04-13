import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "tic-tac-toe";
  board = [];
  currentPlayer = "";
  winner = "";
  isXturn = true;

  ngOnInit() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
  }

  onClick(i) {
    if (this.board[i] === null) {
      if (this.isXturn) {
        this.board[i] = "X";
        this.currentPlayer = "O";
      } else {
        this.board[i] = "O";
        this.currentPlayer = "X";
      }
    }
    this.isXturn = !this.isXturn;
    this.onWinner();
  }

  onRestart() {
    this.board = Array(9).fill(null);
    this.winner = "";
  }

  onWinner() {
    if (
      (this.board[0] === "X" &&
        this.board[1] === "X" &&
        this.board[2] === "X") ||
      (this.board[3] === "X" &&
        this.board[4] === "X" &&
        this.board[5] === "X") ||
      (this.board[6] === "X" &&
        this.board[7] === "X" &&
        this.board[8] === "X") ||
      (this.board[0] === "X" &&
        this.board[4] === "X" &&
        this.board[8] === "X") ||
      (this.board[2] === "X" &&
        this.board[4] === "X" &&
        this.board[6] === "X") ||
      (this.board[0] === "X" &&
        this.board[3] === "X" &&
        this.board[6] === "X") ||
      (this.board[1] === "X" &&
        this.board[4] === "X" &&
        this.board[7] === "X") ||
      (this.board[2] === "X" && this.board[5] === "X" && this.board[8] === "X")
    ) {
      this.currentPlayer = "";
      this.winner = "X";
    } else if (
      (this.board[0] === "O" &&
        this.board[1] === "O" &&
        this.board[2] === "O") ||
      (this.board[3] === "O" &&
        this.board[4] === "O" &&
        this.board[5] === "O") ||
      (this.board[6] === "O" &&
        this.board[7] === "O" &&
        this.board[8] === "O") ||
      (this.board[0] === "O" &&
        this.board[4] === "O" &&
        this.board[8] === "O") ||
      (this.board[2] === "O" &&
        this.board[4] === "O" &&
        this.board[6] === "O") ||
      (this.board[0] === "O" &&
        this.board[3] === "O" &&
        this.board[6] === "O") ||
      (this.board[1] === "O" &&
        this.board[4] === "O" &&
        this.board[7] === "O") ||
      (this.board[2] === "O" && this.board[5] === "O" && this.board[8] === "O")
    ) {
      this.currentPlayer = "";
      this.winner = "O";
    }
    return this.winner;
  }
}
