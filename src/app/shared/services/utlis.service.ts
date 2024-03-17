import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range(start: number, end: number): number[] {
    return [...Array(end - start).keys()].map((el) => el + start);
  }

  generatePagination(currentPage: number, pages: number[]) {
    const pagination = [];
    const lastIndex = pages.length - 1;

    if (currentPage < 3) {
      pagination.push(1, 2);
      if (lastIndex - 1 > 2) {
        pagination.push(pages[lastIndex - 1], pages[lastIndex]);
      } else {
        pagination.push(...pages.slice(2));
      }
    } else {
      pagination.push(currentPage - 1, currentPage);
      if (lastIndex - currentPage > 1) {
        pagination.push(pages[lastIndex - 1], pages[lastIndex]);
      } else {
        pagination.push(...pages.slice(currentPage - 1));
      }
    }

    return pagination.slice(0, lastIndex + 1);
  }
}
