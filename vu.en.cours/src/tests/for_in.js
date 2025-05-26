const obj = {
    One: 1,
    Two: 2,
    Three: 3
};

for (const attribut in obj)
{
    console.log(`Attribut: ${attribut}, Valeur: ${obj[attribut]}`);
}