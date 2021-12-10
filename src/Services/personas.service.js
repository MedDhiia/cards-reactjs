let personas = [
  {
    id: "1",
    fullName: "Jean Smith",
    age: 50,
    avatar:
      "//www.jonathan-menet.fr/blog/wp-content/uploads/2019/10/Personas-generateur-avatar_2.jpg",
    hobbies: ["JAVA", "C+", "C#"],
  },
  {
    id: "2",
    fullName: "Alex Smith",
    age: 30,
    avatar:
      "//www.jonathan-menet.fr/blog/wp-content/uploads/2019/10/Personas-generateur-avatar_3.jpg",
    hobbies: ["PHP", "Symfony", "Laravel", "MYSQL"],
  },
  {
    id: "3",
    fullName: "Adam Smith",
    age: 25,
    avatar:
      "//pngimage.net/wp-content/uploads/2019/05/dessin-homme-femme-png-1.png",
    hobbies: ["ReactJS", "NodeJS", "MangoDB"],
  },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchPersonas = async () => {
  await delay(1000);
  return personas;
};

export const fetchPersonasByFilter = async (searchValue) => {
  await delay(1000);
  return personas.filter((p) => p.fullName.includes(searchValue));
};

export const fetchPersonaById = async (id) => {
  await delay(1000);
  const persona = personas.find((p) => p.id === id);
  return persona;
};

export const addPersona = async (persona) => {
  await delay(1000);
  const newPersona = {
    id: personas.length + 1,
    fullName: persona.fullName,
    age: persona.age,
    avatar: persona.avatar,
    hobbies: persona.hobbies,
  };

  personas = personas.concat(newPersona);
  return newPersona;
};

export const deletePersona = async (id) => {
  await delay(1000);
  personas = personas.filter((p) => p.id !== id);
};

export const updatePersona = async (id, persona) => {
  await delay(1000);
  const updatedPersona = {
    id,
    fullName: persona.fullName,
    age: persona.age,
    avatar: persona.avatar,
    hobbies: persona.hobbies,
  };
  personas = personas.map((p) => (p.id === id ? updatedPersona : p));
  return updatedPersona;
};
