import React, { useState } from 'react';
export const Infoperso = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [date, setDate] = useState('');
  const [age, setAge] = useState(0);
  const [sexe, setSexe] = useState('');
  const [nomError, setNomError] = useState<string | null>(null);
  const [prenomError, setPrenomError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);

  const handleNomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNom(newValue);

    if (newValue.toLowerCase() === newValue) {
      setNomError('Le nom doit être en majuscules');
    } else {
      setNomError(null);
    }
  };

  const handlePrenomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPrenom(newValue);

    if (newValue.length > 0 && newValue[0] !== newValue[0].toUpperCase()) {
      setPrenomError('La première lettre du prénom doit être en majuscule');
    } else {
      setPrenomError(null);
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setAge(newValue);

    if (newValue <= 18) {
      setAgeError("L'âge doit être supérieur à 18");
    } else {
      setAgeError(null);
    }
  };

  return (
    <div>
      <h2 className="text-[#9b59b6] font-extrabold text-2xl">Informations personnelles</h2>

      <div className="flex flex-wrap justify-between">
        <label className="block font-serif">Nom</label>
        <input
          className="border p-2 h-12 w-full rounded-lg"
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir votre nom"
          required
          value={nom}
          onChange={handleNomChange}
        />
        {nomError && <p className="text-red-500">{nomError}</p>}

        <label className="block font-serif">Prénom</label>
        <input
          className="border p-2 h-12 w-full rounded-lg"
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Saisir votre prénom"
          required
          value={prenom}
          onChange={handlePrenomChange}
        />
        {prenomError && <p className="text-red-500">{prenomError}</p>}

        <label className="block font-serif">Date de naissance</label>
        <input
          className="border p-2 h-12 w-full rounded-lg"
          type="date"
          id="date"
          name="date"
          required
        />

        <label className="block font-serif">Âge</label>
        <input
          className="border p-2 h-12 w-full rounded-lg"
          id="Age" name="age" type="number" placeholder="Âge" required
          value={age}
          onChange={handleAgeChange}
        />
        {ageError && <p className="text-red-500">{ageError}</p>}

        <label className="block font-serif">Sexe</label>
        <input type="radio" id="check-male" name="gender" />
        <label>Homme</label>
        <input type="radio" id="check-female" name="gender" />
        <label>Femme</label>
      </div>
    </div>
  );
};
