type prItem = {
  id: number;
  public readonly comment: string;
  link: string;
  se: string;
  platform: string;
  size: string;
  difficulty: string;
  status: string;
  version: string;
  ByStatus: string;
  AhStatus: string;
  HtStatus: string;
  date: Date;
  dateS: string;
  reviewByBY: boolean;
  reviewByAH: boolean;
  reviewByHT: boolean;
};

type voidFunction = () => void;

type stringFunction = (value: string) => void;

type StringNumber = string | number;

type booleanFunction = (value: boolean) => void;

type stringNullFunction = (value: string | null) => void;

type dateFunction = (value: Date) => void;

type prItemFunction = (value: prItem[]) => void;
