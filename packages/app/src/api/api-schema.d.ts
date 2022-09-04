declare namespace APISchema {
  interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    nickname?: string;
    ageRange?: string;
    birthday?: string;
    birthyear?: string;
    gender?: string;
    password?: string;
    phoneNumber?: string;
  }
}
