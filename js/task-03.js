const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galeryCard = ({ url, alt }) => {
  return `<li class="item" >
  <img src=${url} alt=${alt} width='400px' height='220px'>
</li>`;
}
const galeryMarkUp = images.map(galeryCard).join('');

const imagesList = document.querySelector(".gallery");
imagesList.insertAdjacentHTML("beforeend", galeryMarkUp);
Object.assign(imagesList.style, {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,auto)',
  gap: '30px',
  listStyle: 'none',

})
