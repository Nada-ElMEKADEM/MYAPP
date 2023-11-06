import React, { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [specialCharsError, setSpecialCharsError] = useState<string | null>(null);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const containsSpecialChars = (value: string): boolean => {
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    return specialCharsRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);

    if (validateEmail(newValue)) {
      setEmailError(null);
    } else {
      setEmailError('Email invalide');
    }};
    const handleAdresseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setAdresse(newValue);

    if (containsSpecialChars(newValue)) {
      setSpecialCharsError('L\'adresse contient des caractères spéciaux');
    } else {
      setSpecialCharsError(null);
    }
  };


  return (
    <div>
      <h2 className="text-[#9b59b6] font-extrabold text-2xl">Contact</h2>

      <div className="flex flex-wrap justify-between">
        <label className="block font-serif">Email</label>
        <input
          className="border p-2 h-12 w-full rounded-lg"
          type="email"
          id="email"
          name="email"
          placeholder="Saisir votre email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>

      <label className="block font-serif">Adresse</label>
      <input
        className="border p-2 h-12 w-full rounded-lg"
        type="text"
        id="adresse"
        name="adresse"
        placeholder="Saisir votre adresse"
        required
        value={adresse}
        onChange={handleAdresseChange}
      />
      {specialCharsError && <p className="text-red-500">{specialCharsError}</p>}

      <span className="block font-serif">Téléphone</span>
      <input
        className="border p-2 h-12 w-full rounded-lg"
        type="tel"
        id="telephone"
        name="telephone"
        placeholder="Saisir votre numéro de téléphone"
        required
      />
    </div>
  );
};
