export class Formation {
  id?: number;
  name?: string;
  description?: string;
  catId?: number;
  sessionList?: Session[];
}

export class Session{
  id?: number;
  startDate?: String;
  endDate?: String;
  price?: number;
  maxStudent?: number;
}
