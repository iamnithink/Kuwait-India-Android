import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "creditCard"
})
export class CreditCardPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const maskedSection = value.slice(0, -4)
    const visibleSection = value.slice(-4)
    let val1 = maskedSection.split("-").join("")
    if (val1.length > 0) {
      val1 = val1.match(new RegExp(".{1,4}", "g")).join(" ")
    }
    let val2 = val1.split("").map((item, index) => {
      if (item != " ") {
        return "*"
      }
      return item
    })
    const returnValue = val2.join("") + " " + visibleSection
    return returnValue
  }
}
