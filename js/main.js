const oftenPickButton = document.querySelector('.often-pick');
const enterITButton = document.querySelector('.enter-IT');
const getSkillButton = document.querySelector('.get-skill');
const helpChooseButton = document.querySelector('.help-choose');

const careerOftenDiv = document.querySelector('.career__often');
const careerEnterITDiv = document.querySelector('.career__enterIT');
const careerSkillDiv = document.querySelector('.career__skill');
const careerHelpDiv = document.querySelector('.career__help');

const careerDivs = [careerOftenDiv, careerEnterITDiv, careerSkillDiv, careerHelpDiv];

async function hideAllCareerDivs(excludeDiv) {
  await Promise.all(careerDivs.map(div => {
    return new Promise(resolve => {
      if (div !== excludeDiv) {
        div.style.display = 'none';
      }
      resolve();
    });
  }));
}

async function showCareerDiv(div) {
  await hideAllCareerDivs(div);
  div.style.display = 'flex';
}

oftenPickButton.addEventListener('click', async () => {
  await showCareerDiv(careerOftenDiv);
});

enterITButton.addEventListener('click', async () => {
  await showCareerDiv(careerEnterITDiv);
});

getSkillButton.addEventListener('click', async () => {
  await showCareerDiv(careerSkillDiv);
});

helpChooseButton.addEventListener('click', async () => {
  await showCareerDiv(careerHelpDiv);
});

// Call the hideAllCareerDivs function initially to hide all divs except the first one
hideAllCareerDivs();
careerOftenDiv.style.display = 'flex';