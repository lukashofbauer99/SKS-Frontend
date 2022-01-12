import { Component, OnInit } from '@angular/core';
import {StatsService} from "../../services/stats.service";
import {Sight} from "../../models/sight";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  options: any;
  pageTitle: string = 'Views';
  chartData: any[] = [];
  date: any;

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.loadSights();
  }

  public loadSights() {
    this.chartData=[]
    this.statsService.getDateStats(this.date).subscribe((stats: Map<Sight, number>) => {
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

    dataPoint = {};
    dataPoint.value = value;
    dataPoint.name = contactName;

    this.chartData.push(dataPoint);
  }

  private setOptions() {
    this.options = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          type: 'pie',
          radius: '60%',
          data: this.chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  private handleError(err: Error) {
    console.error(err);
  }

}
