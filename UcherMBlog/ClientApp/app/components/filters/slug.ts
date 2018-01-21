import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slug',
    pure: false
})

export class SlugFilter implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;
        var result = value.toLowerCase().trim();
        result = result.replace(/[^a-z0-9\s-]/g, ' ');
        result = result.replace(/[\s-]+/g, '-');
        return result;
    };
}