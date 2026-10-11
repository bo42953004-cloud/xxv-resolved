export type Stat = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: number;
  spark: number[];
  accent: string;
};

export const stats: Stat[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: 84920,
    prefix: "$",
    delta: 12.8,
    spark: [12, 18, 14, 22, 19, 28, 26, 34, 31, 42, 39, 48],
    accent: "#6366f1",
  },
  {
    id: "users",
    label: "Active Users",
    value: 12480,
    delta: 7.4,
    spark: [30, 28, 33, 31, 38, 36, 42, 40, 47, 45, 52, 58],
    accent: "#22d3ee",
  },
  {
    id: "orders",
    label: "Conversions",
    value: 3271,
    delta: -2.1,
    spark: [40, 38, 42, 36, 34, 37, 33, 30, 32, 28, 27, 25],
    accent: "#f59e0b",
  },
  {
    id: "rate",
    label: "Churn Rate",
    value: 2.4,
    suffix: "%",
    delta: -0.6,
    spark: [20, 22, 19, 21, 18, 17, 19, 16, 15, 14, 13, 12],
    accent: "#f43f5e",
  },
];

export const revenueSeries = [
  { m: "Jan", a: 32, b: 18 },
  { m: "Feb", a: 41, b: 24 },
  { m: "Mar", a: 38, b: 21 },
  { m: "Apr", a: 55, b: 33 },
  { m: "May", a: 49, b: 29 },
  { m: "Jun", a: 67, b: 41 },
  { m: "Jul", a: 72, b: 46 },
  { m: "Aug", a: 64, b: 39 },
  { m: "Sep", a: 81, b: 52 },
  { m: "Oct", a: 88, b: 57 },
  { m: "Nov", a: 79, b: 50 },
  { m: "Dec", a: 96, b: 63 },
];

export const channels = [
  { name: "Organic Search", value: 42, color: "#6366f1" },
  { name: "Direct", value: 26, color: "#22d3ee" },
  { name: "Referral", value: 18, color: "#f59e0b" },
  { name: "Social", value: 14, color: "#f43f5e" },
];

export const transactions = [
  { id: "#TX-90231", name: "Amara Okafor", plan: "Enterprise", amount: 1240, status: "Paid", date: "Today, 10:24" },
  { id: "#TX-90228", name: "Liam Whitfield", plan: "Pro", amount: 320, status: "Pending", date: "Today, 09:02" },
  { id: "#TX-90224", name: "Sofia Marquez", plan: "Pro", amount: 320, status: "Paid", date: "Yesterday" },
  { id: "#TX-90219", name: "Kenji Watanabe", plan: "Starter", amount: 89, status: "Failed", date: "Yesterday" },
  { id: "#TX-90212", name: "Nia Robinson", plan: "Enterprise", amount: 1240, status: "Paid", date: "Mar 04" },
  { id: "#TX-90208", name: "Tomas Nowak", plan: "Starter", amount: 89, status: "Paid", date: "Mar 03" },
];

export const activity = [
  { who: "Amara O.", what: "upgraded to Enterprise", when: "2m", tone: "#6366f1" },
  { who: "System", what: "nightly backup completed", when: "41m", tone: "#22d3ee" },
  { who: "Liam W.", what: "opened ticket #4412", when: "1h", tone: "#f59e0b" },
  { who: "Sofia M.", what: "invited 3 team members", when: "3h", tone: "#22c55e" },
  { who: "Kenji W.", what: "payment failed — retrying", when: "5h", tone: "#f43f5e" },
];

export const goals = [
  { label: "Monthly Target", pct: 78, color: "#6366f1" },
  { label: "New Signups", pct: 64, color: "#22d3ee" },
  { label: "Retention", pct: 91, color: "#22c55e" },
];
