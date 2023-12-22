type Ticket = {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
};

export interface cardProps {
  ticket: Ticket;
  grouping: string;
}

export interface cardTitleProps {
  id?: string;
  groupingType?: string;
}

export interface cardBodyProps {
  status?: string;
  title?: string;
  tag?: string[];
  priority?: number;
}
