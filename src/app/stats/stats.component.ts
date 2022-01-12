import {Component, OnInit} from '@angular/core';
import * as echarts from "echarts";
import {StatsService} from "../services/stats.service";
import {Sight} from "../models/sight";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }



}
