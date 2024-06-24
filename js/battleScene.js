const battleBg = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    img: battleBgImg
  });
  let blazit;
  let renderedSprites;
  let battleAnimationId;
  let queue;
  let enemies;
  let enemy;

  function initBattle(){
    enemies = [new Mons(mons.Draggle), new Mons(mons.Bamboom), new Mons(mons.Octelly), new Mons(mons.Mistairy)];
    enemy = enemies[Math.floor(Math.random()*enemies.length)];
    blazit = new Mons(mons.Blazit);
    document.querySelector('#user').style.display = 'block';
    document.querySelector('#dialogBox').style.display = 'none';
    document.querySelector('#playerHealthBar').style.width = '100%';
    document.querySelector('#enemyHealthBar').style.width = '100%';
    document.querySelector('#movementsBox').replaceChildren();
    document.querySelector('#enemyName').innerHTML = enemy.name;
    document.querySelector('#playerName').innerHTML = mons.Blazit.name;
    renderedSprites = [enemy, blazit];
    queue = [];
    blazit.attacks.forEach(attack => {
      const button = document.createElement('button');
      button.innerHTML = attack.name;
      document.querySelector('#movementsBox').append(button);
    });
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];
          blazit.attack({
            attack: selectedAttack,
            recipient: enemy,
            renderedSprites
          })
          if(enemy.health <= 0){
            queue.push(() =>{
              enemy.faint();
            })
            queue.push(() =>{
              gsap.to('#overlapping-div', {
                opacity: 1,
                onComplete: () => {
                  cancelAnimationFrame(battleAnimationId);
                  animate();
                  document.querySelector('#user').style.display = 'none';
                  gsap.to('#overlapping-div', {
                    opacity: 0
                  })
                  battle.initiated = false;
                  audio.battle.stop();
                  audio.Map.play();
                }
              })
            })
          }

          const randomAttack = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)]
          queue.push(() =>{
            enemy.attack({
                attack: randomAttack,
                recipient: blazit,
                renderedSprites
          })
          if(blazit.health <= 0){
            queue.push(() =>{
              blazit.faint();
            })
            queue.push(() =>{
              gsap.to('#overlapping-div', {
                opacity: 1,
                onComplete: () => {
                  cancelAnimationFrame(battleAnimationId);
                  animate();
                  document.querySelector('#user').style.display = 'none';
                  gsap.to('#overlapping-div', {
                    opacity: 0
                  })
                  battle.initiated = false;
                  audio.Map.play();
                }
              })
            })
          }
      })
  })
  button.addEventListener('mouseenter', (e)=> {
    const selectedAttack = attacks[e.currentTarget.innerHTML];
    document.querySelector('#attackType').innerHTML = selectedAttack.type;
    document.querySelector('#attackType').style.color = selectedAttack.color;
  })
})
  }

  function animateBattle() {
    battleAnimationId = window.requestAnimationFrame(animateBattle);
    battleBg.draw();
    renderedSprites.forEach((sprite) => {
      sprite.draw();
    })
  }
  animate();

document.querySelector('#dialogBox').addEventListener('click', (e) => {
    if(queue.length > 0){
        queue[0]();
        queue.shift();
    } else e.currentTarget.style.display = 'none';
})