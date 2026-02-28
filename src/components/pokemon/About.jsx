import styles from './About.module.scss'

export default function PokemonAbout() {
  return (
    <div className={styles.aboutContainer}>
      <h3>What is all of this?</h3>
      <p>
        Pokemon Salmon Red is a fan-made Pokemon game I created using Ruby scripts and RPG Maker.
        It took 5 years to complete and features a bunch of routes and towns to explore, including 8 Gyms,
        a rival, and a final Elite 4 challenge. I added the Pokemon game section to my website because it was very
        fun to make and it serves as a handy companion tool to those who are able to play the game.
      </p>
      <h3>Awesome, how can I play?</h3>
      <p>
        This game is intentionally not available for download to the public. The reason being that it
        borrows many graphical assets from the Nintendo Pokemon franchise and I do not want to be sued.
        You will just have to take my word for it that it is awesome.
      </p>
      <h3>Special Thanks</h3>
      <p>
        Testing a game as large as Pokemon Salmon Red is a monumentous task. I would like to thank my
        friends Justin and Kelsey for devoting many painful hours play-testing the game in its
        early stages. I admit that I quite enjoyed watching them get stuck in various trees/buildings
        and encountering bizarre bugs throughout their playthrough. Especially Kelsey.... Buahaha!
      </p>
      <p>
        I would also like to thank my wife, Heather, who served as the inspiration for making this game
        in the first place and who put up with many nights of locking myself in my room at the computer.
      </p>
    </div>
  )
}
