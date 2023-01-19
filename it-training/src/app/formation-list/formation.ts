import { Session } from "./session";

export class Formation {
  id?: number;
  name?: string;
  description?: string;
  catId?: number;
  sessionList?: Session[];
}

