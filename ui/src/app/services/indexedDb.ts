import Dexie, { liveQuery, Table } from 'dexie';
import { Observable } from 'rxjs';

export interface Line {
  id: number;
  streetId: number;
  coordinates: [number, number][];
  lastUpdate: string;
}
export interface Street {
  id: number;
  name: string;
  type: number;
  shape:
    | { coordinates: [number, number][]; type: 'LineString' }
    | { coordinates: [number, number][][]; type: 'MultiLineString' };
  lastUpdate: string;
}

export interface AdminLevel {
  greaterAdminLevelId: number;
  greaterAdminLevelName: string;
  lowerAdminLevelId: number;
  lowerAdminLevelName: string;
  linesIds: number[];
  streetsIds: number[];
  coordinates: [number, number][][][];
  lastUpdate: string;
}
export class IndexedDb extends Dexie {
  segment_lines!: Table<Line, number>;
  streets!: Table<Street, number>;

  constructor() {
    super('congestiometro');
    this.version(3).stores({
      segment_lines: '++id',
      streets: '++id',
    });
    this.on('populate', () => {
      this.bulkPutLines([]);
      this.bulkPutStreets([]);
    });
  }

  public bulkPutLines(newLines: Line[]) {
    return this.segment_lines.bulkPut(newLines);
  }

  public getLines() {
    return new Observable<Line[]>((subscriber) =>
      liveQuery(() => this.segment_lines.toArray()).subscribe((lines) => subscriber.next(lines))
    );
  }

  public clearLines() {
    return this.segment_lines.clear();
  }

  public bulkPutStreets(newStreets: Street[]) {
    return this.streets.bulkPut(newStreets);
  }

  public getStreets() {
    return new Observable<Street[]>((subscriber) =>
      liveQuery(() => this.streets.toArray()).subscribe((streets) => subscriber.next(streets))
    );
  }

  public clearStreets() {
    return this.streets.clear();
  }
}

export const indexedDb = new IndexedDb();
