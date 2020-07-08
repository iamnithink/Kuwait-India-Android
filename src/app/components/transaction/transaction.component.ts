import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"]
})
export class TransactionComponent implements OnInit {
  @Input() firstAmount: String | Number
  @Input() secondAmount: String | Number
  @Input() firstUnit: String
  @Input() secondUnit: String
  @Input() isDetails: boolean = false

  constructor() {}

  ngOnInit() {}
}
