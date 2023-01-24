export class MoviesService {
  movies = [
    {
      id: 1,
      name: 'Shrek',
      author: 'Steve Smith',
      duration: 2.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: 'assets/movies/movie-image-1.png',
      description:
        'Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.',
    },
    {
      id: 2,
      name: 'The Dark Knight',
      author: 'Nolan',
      duration: 2.5,
      type: 'Premium',
      price: 145.5,
      ratings: 5,
      image: 'assets/movies/movie-image-2.png',
      description:
        "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
    },
  ]
}