import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(students: Student[], filterText: string) {
        console.log('filter Pipe');
        if(students.length === 0 || filterText === '') {
            return students;
        }
        else {
            return students.filter((student) => {
                return student.gender.toLowerCase() === filterText.toLowerCase()
            })
        }
    }
}