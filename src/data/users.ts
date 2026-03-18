export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
  joinedAt: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Wilson Chen",
    email: "wilson@example.com",
    role: "Engineer",
    active: true,
    joinedAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Alex Rivera",
    email: "alex@example.com",
    role: "Designer",
    active: true,
    joinedAt: "2023-03-22",
  },
  {
    id: "3",
    name: "Sam Patel",
    email: "sam@example.com",
    role: "Engineer",
    active: false,
    joinedAt: "2022-11-01",
  },
  {
    id: "4",
    name: "Jordan Lee",
    email: "jordan@example.com",
    role: "PM",
    active: true,
    joinedAt: "2023-06-10",
  },
  {
    id: "5",
    name: "Casey Kim",
    email: "casey@example.com",
    role: "Designer",
    active: true,
    joinedAt: "2024-01-05",
  },
  {
    id: "6",
    name: "Riley Brooks",
    email: "riley@example.com",
    role: "Engineer",
    active: true,
    joinedAt: "2023-09-18",
  },
  {
    id: "7",
    name: "Morgan Davis",
    email: "morgan@example.com",
    role: "PM",
    active: false,
    joinedAt: "2022-07-30",
  },
  {
    id: "8",
    name: "Taylor Swift",
    email: "taylor@example.com",
    role: "Engineer",
    active: true,
    joinedAt: "2024-02-14",
  },
];

// Simulates a network request with a delay
export function fetchUsers(delayMs = 800): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), delayMs);
  });
}

export function fetchUserById(id: string, delayMs = 500): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users.find((u) => u.id === id)), delayMs);
  });
}
