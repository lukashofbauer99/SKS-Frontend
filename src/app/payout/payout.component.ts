import { Component, OnInit } from '@angular/core';
import {StatsService} from "../services/stats.service";

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {

  constructor(private statsService:StatsService) { }

  ngOnInit(): void {
  }

  public payout()
  {
    this.statsService.payout().subscribe();
  }

}
