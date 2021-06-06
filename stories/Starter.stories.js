export default { title: 'Starter' }

import StarterStory from '../src/Starter.elm';

export const elm = () => {
 const container = document.createElement('div');
 const elmContainer = document.createElement('div');
 container.appendChild(elmContainer);
  console.log(elmContainer);
 const app = StarterStory.Elm.Starter.init({
   node: elmContainer,
   flags: 5
 })
 return container;
};
