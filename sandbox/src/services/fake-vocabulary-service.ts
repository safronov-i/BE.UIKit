import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs/index';
import { VocabularyService } from '../../../sandbox/projects/h21-be-ui-kit/src/services/vocabulary-service';
import { City } from '../../../sandbox/projects/h21-be-ui-kit/src/dto/city';
import { Observable } from 'rxjs';

@Injectable()
export class FakeVocabularyService implements VocabularyService {
	public getCities(pattern: string): Observable<City[]> {
		var data = [
			<City>{
				id: 1,
				name: "Moscow"
			},
			<City>{
				id: 2,
				name: "New York"
			},
			<City>{
				id: 3,
				name: "Bagdad"
			},
			<City>{
				id: 4,
				name: "Erevan"
			}
		];
		return Observable.create((observer: Subscriber<any>) => {
			observer.next(data);
			observer.complete();
		});
	}
}