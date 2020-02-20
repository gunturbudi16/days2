const domisili = [
  {
    name: "Tatas",
    company: "Arkademy",
    job: "Trainer",
    status: "single",
    city: "Jogja"
  },
  {
    name: "Pratama",
    company: "Emago",
    job: "Trainer",
    status: "single",
    city: "Jakarta"
  }
];
// Jika Tatas telah menikah dan pindah dari Jogja ke Jakarta, serta Pratama direkrut oleh Arkademy
// menjadi Trainer yang bertempat di Jogja, maka ubahlah object diatas menggunakan spread
// operator.

const updateDomisili = domisili.map(i => {
  return { ...i };
});
const updateTatas = updateDomisili.find(i => i.name == "Tatas");
updateTatas.city = "Jakarta";
updateTatas.status = "menikah";

updatePratama = updateDomisili.find(i => i.name == "Pratama");
updatePratama.city = "Jogja";
updatePratama.company = "Arkademy";

console.log(updateDomisili);
