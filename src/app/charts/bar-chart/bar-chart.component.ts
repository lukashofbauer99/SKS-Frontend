import { Component, OnInit } from '@angular/core';
import {StatsService} from "../../services/stats.service";
import {Sight} from "../../models/sight";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  options: any;
  pageTitle: string = 'Deal Share by Contact';
  chartData: any[] = [];

  map: Map<string, number> = new Map<string, number>();

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.loadSights();
  }

  private loadSights() {
    this.statsService.getAllStats().subscribe((stats: Map<Sight, number>) => {
      this.handleSightsResponse(new Map(Object.entries(stats)));
    });
  }

  private parseToSight(sightString:string):Sight
  {
    let id:number=0;
    let location: string="";
    let name: string="";
    sightString=sightString.trim()
    let values = sightString.split(',');
    values.forEach((val:string)=> {
        if(val.indexOf("id=")!=-1)
        {
          let str=val.substring(val.indexOf("id="));
          id = Number(val.substring(val.indexOf("id=")+"id=".length));
        }
        else if(val.indexOf("location=")!=-1)
        {
          location = val.substring(val.indexOf("location=")+"location=".length);
        }
        else if(val.indexOf("name=")!=-1)
        {
          name = val.substring(val.indexOf("name=")+"name=".length,val.length-1);
        }
      }
    )
    return new Sight(id,location,name);
  }

  private handleSightsResponse(stats: Map<string, number>) {
    stats.forEach((value: number, key: string) => {
      this.addSight(this.parseToSight(key), value);
    });

    this.setOptions();
  }

  private addSight(sight: Sight, views: number) {
    let value: number = views;
    let contactName: String = sight.name;

    let dataPoint: any = this.chartData.find(dp => dp.name === contactName);

    this.map.set(contactName.toString(), value);
  }

  private setOptions() {
    this.options = {
      grid: {
        //prevents cutoff of y-axis labels
        left: '15%'
      },
      xAxis: {
        type: 'category',
        data: Array.from(this.map.keys())
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => '' + value  + ' Views'
        }
      },
      series: [{
        data: Array.from(this.map.values()),
        type: 'bar'
      }]
    };
  }

  private handleError(err: Error) {
    console.error(err);
  }
}
