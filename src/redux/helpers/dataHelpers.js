/* eslint-disable camelcase */
import axios from 'axios';

export default async url => {
  try {
    const { data } = await axios.get(url);

    const processedData = data.Brastlewark.map(item => {
      const { hair_color, professions, ...noHairColor } = item;
      return {
        ...noHairColor,
        hairColor: hair_color,
        professions: professions.map(profession => profession.trim()),
      };
    });

    return processedData;
  } catch (error) {
    throw new Error(error.message);
  }
};
