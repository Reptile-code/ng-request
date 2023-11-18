import Member from './member.model';

export default interface Team {
  id: number;
  name: string;
  members: Member[];
}
