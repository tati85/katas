function countDevelopers(list) {
    let r = list.filter(elem => elem.continent === 'Europe' && elem.language === 'JavaScript');
    return r.length || 0;
}