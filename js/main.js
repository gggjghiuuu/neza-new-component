const oftenPickButton = document.querySelector('.often-pick');
const enterITButton = document.querySelector('.enter-IT');
const getSkillButton = document.querySelector('.get-skill');
const helpChooseButton = document.querySelector('.help-choose');

const careerOftenDiv = document.querySelector('.career__often');
const careerEnterITDiv = document.querySelector('.career__enterIT');
const careerSkillDiv = document.querySelector('.career__skill');
const careerHelpDiv = document.querySelector('.career__help');

const careerDivs = [careerOftenDiv, careerEnterITDiv, careerSkillDiv, careerHelpDiv];

function hideAllCareerDivs() {
  careerDivs.forEach(div => {
    div.style.display = 'none';
  });
}

function showCareerDiv(div) {
  hideAllCareerDivs();
  div.style.display = 'flex';
}

oftenPickButton.addEventListener('click', () => {
  showCareerDiv(careerOftenDiv);
});

enterITButton.addEventListener('click', () => {
  showCareerDiv(careerEnterITDiv);
});

getSkillButton.addEventListener('click', () => {
  showCareerDiv(careerSkillDiv);
});

helpChooseButton.addEventListener('click', () => {
  showCareerDiv(careerHelpDiv);
});

// Call the hideAllCareerDivs function initially to hide all divs except the first one
hideAllCareerDivs();
careerOftenDiv.style.display = 'flex';