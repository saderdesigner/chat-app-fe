export const USER_DATA = [
  {
    id: "f79d05d1-692e-4311-8e6c-bf250ef6c532",
    username: "bdobrowolski0@amazon.de",
    display_name: "Brade Dobrowolski",
    password: "TGWRPoQD0D",
  },
  {
    id: "26deba9e-972f-41d4-95c9-7ba046bbf9e5",
    username: "imollison1@storify.com",
    display_name: "Ignazio Mollison",
    password: "dtiui7MmSR",
  },
  {
    id: "cdfd5ed6-e943-4d64-ad1f-b87b3d5fd684",
    username: "dbelvin2@mozilla.com",
    display_name: "Dolly Belvin",
    password: "dsKiW5E6",
  },
  {
    id: "7a867d77-9dcb-4a19-a9ee-81184c4ebf22",
    username: "knossent3@msn.com",
    display_name: "Krispin Nossent",
    password: "mHGSOtGDKu",
  },
  {
    id: "fecb36ca-f620-41bb-9496-3b77338f7ef0",
    username: "iklimschak4@uol.com.br",
    display_name: "Iolande Klimschak",
    password: "J38sijhX5flN",
  },
  {
    id: "e4e63a9c-c59f-4ef6-b2b1-5826ef78b392",
    username: "ffassum5@shareasale.com",
    display_name: "Florinda Fassum",
    password: "U1tI6rHKW",
  },
  {
    id: "8637de0d-cf64-4032-a1e4-37807a531e4a",
    username: "aizatt6@smugmug.com",
    display_name: "Aubrey Izatt",
    password: "UJ78j5gV4r",
  },
  {
    id: "6eb23ed3-d75f-4560-a394-e21404e88241",
    username: "mbaccus7@umn.edu",
    display_name: "Marcie Baccus",
    password: "5eGcE06BBpW",
  },
  {
    id: "f823fe53-1937-4840-8313-652cf900793d",
    username: "fscrogges8@google.es",
    display_name: "Fionna Scrogges",
    password: "VT17NBZZ",
  },
  {
    id: "9ef3b6bc-e19b-4dba-bb8a-14c5479bd984",
    username: "saderdesigner@gmail.com",
    display_name: "Sader",
    password: "123456",
  },
];

export const userAuth = (authUser) => {
  const resUser = USER_DATA.filter(
    (user) =>
      user.username === authUser.username && user.password === authUser.password
  );

  if (resUser.length !== 0) {
    return {
      resUser: {
        id: resUser[0].id,
        displayName: resUser[0].display_name,
        token: resUser[0].id,
      },
      error: null,
    };
  }
  return { resUser: null, error: "User not found" };
};
