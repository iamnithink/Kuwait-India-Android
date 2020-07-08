export interface Notification {
  content_available?: string;
  body: string;
  priority?: string;
  title: string;
  date?: string;
  ts?: string;
  month?: string;
  wasTapped?: boolean;
  color?: string;
}
