const levels = Array.from(document.getElementsByClassName('level'));

levels.forEach(element =>  {
    element.addEventListener('click', event => {
        if (event.target.tagName === 'INPUT') return;
        let i = event.target.querySelector('input') || event.target.parentNode.childNodes[3];
        const v = isNaN(parseInt(i.value)) ? 1 : parseInt(i.value)+1;
        i.value = v <= 20 ? v : '20';
    })
});

function calcPGLevel()   {
    let levels = [];
    document.querySelectorAll('.level>input').forEach(element => {
        levels.push(isNaN(parseInt(element.value)) ? 0 : parseInt(element.value));
    });
    // bard+cleric+druid+sorcerer+wizzard+⌊paladin/2⌋+⌊ranger/2⌋+⌊fighter/3⌋+⌊rogue/3⌋
    return levels[0]+levels[1]+levels[2]+levels[3]+levels[4]+Math.floor(levels[5]/2)+Math.floor(levels[6]/2)+Math.floor(levels[7]/3)+Math.floor(levels[8]/3);
}

const MATRIX_MC_SPELL_SLOT = [
    [2,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0],
    [4,2,0,0,0,0,0,0,0],
    [4,3,0,0,0,0,0,0,0],
    [4,3,2,0,0,0,0,0,0],
    [4,3,3,0,0,0,0,0,0],
    [4,3,3,1,0,0,0,0,0],
    [4,3,3,2,0,0,0,0,0],
    [4,3,3,3,1,0,0,0,0],
    [4,3,3,3,2,0,0,0,0],
    [4,3,3,3,2,1,0,0,0],
    [4,3,3,3,2,1,0,0,0],
    [4,3,3,3,2,1,1,0,0],
    [4,3,3,3,2,1,1,0,0],
    [4,3,3,3,2,1,1,1,0],
    [4,3,3,3,2,1,1,1,0],
    [4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],
    [4,3,3,3,3,2,1,1,1],
    [4,3,3,3,3,2,2,1,1],
]

function calcSpellSlot() {
    return MATRIX_MC_SPELL_SLOT[calcPGLevel()-1];
}