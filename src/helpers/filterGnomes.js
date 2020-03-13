export default (gnomes, gnomeNameSearchField, professionSearchField) => {
  return gnomes.filter(
    gnome =>
      gnome.name.toLowerCase().includes(gnomeNameSearchField.toLowerCase()) &&
      gnome.professions.reduce((accumulator, profession) => {
        if (profession.toLowerCase().includes(professionSearchField.toLowerCase())) return true;
        return accumulator;
      }, false)
  );
};
