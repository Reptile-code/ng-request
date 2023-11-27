import Member from '../../../core/models/member.model';

export default interface Team {
  id: number;
  name: string;
  members: Member[];
}
