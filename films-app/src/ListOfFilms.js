// Import các file ảnh SVG
import starWarsImage from './assets/star-wars.jpg.svg';
import inceptionImage from './assets/inception.jpg.svg';
import matrixImage from './assets/the-matrix.jpg.svg';
import parasiteImage from './assets/parasite.jpg.svg';
import spiritedAwayImage from './assets/spirited-away.jpg.svg';
import darkKnightImage from './assets/the-dark-knight.jpg.svg';
import forrestGumpImage from './assets/forrest-gump.jpg.svg';
import titanicImage from './assets/titanic.jpg.svg';
import avengersImage from './assets/avengers-endgame.jpg.svg';

const filmsData = [
  {
    id: 1,
    image: starWarsImage,
    title: "Star Wars: Episode IV - A New Hope",
    year: "1977",
    nation: "USA",
    description: "Luke Skywalker tham gia lực lượng nổi dậy để chống lại Đế quốc Galactic.",
    genre: "Khoa học viễn tưởng",
    clip: "https://www.youtube.com/embed/vZ734NWnAHA"
  },
  {
    id: 2,
    image: inceptionImage,
    title: "Inception",
    year: "2010",
    nation: "USA",
    description: "Một tên trộm có khả năng xâm nhập giấc mơ thực hiện vụ trộm bất khả thi.",
    genre: "Khoa học viễn tưởng",
    clip: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 3,
    image: matrixImage,
    title: "The Matrix",
    year: "1999",
    nation: "USA",
    description: "Một hacker khám phá thực tại ảo và chiến đấu để cứu nhân loại.",
    genre: "Hành động",
    clip: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    id: 4,
    image: parasiteImage,
    title: "Parasite",
    year: "2019",
    nation: "South Korea",
    description: "Một gia đình nghèo lên kế hoạch thâm nhập vào nhà giàu.",
    genre: "Tâm lý",
    clip: "https://www.youtube.com/embed/5xH0HfJHsaY"
  },
  {
    id: 5,
    image: spiritedAwayImage,
    title: "Spirited Away",
    year: "2001",
    nation: "Japan",
    description: "Cô bé Chihiro bước vào thế giới thần bí để cứu cha mẹ.",
    genre: "Hoạt hình",
    clip: "https://www.youtube.com/embed/ByXuk9QqQkk"
  },
  {
    id: 6,
    image: darkKnightImage,
    title: "The Dark Knight",
    year: "2008",
    nation: "USA",
    description: "Batman đối đầu với Joker trong trận chiến tại Gotham.",
    genre: "Hành động",
    clip: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 7,
    image: forrestGumpImage,
    title: "Forrest Gump",
    year: "1994",
    nation: "USA",
    description: "Hành trình cuộc đời của Forrest Gump qua các sự kiện lịch sử.",
    genre: "Tâm lý",
    clip: "https://www.youtube.com/embed/bLvqoHBptjg"
  },
  {
    id: 8,
    image: titanicImage,
    title: "Titanic",
    year: "1997",
    nation: "USA",
    description: "Câu chuyện tình yêu trên con tàu định mệnh Titanic.",
    genre: "Lãng mạn",
    clip: "https://www.youtube.com/embed/2e-eXJ6HgkQ"
  },
  {
    id: 9,
    image: avengersImage,
    title: "Avengers: Endgame",
    year: "2019",
    nation: "USA",
    description: "Các Avengers hợp sức để đảo ngược thảm họa của Thanos.",
    genre: "Hành động",
    clip: "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
];

export default filmsData;