import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'percentages1'
})
export class PercentagePipes implements PipeTransform{
    transform(data:any){
        return data*100;
    }
}