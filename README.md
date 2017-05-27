# Space Impact!

## introduction
Space impact is een oud spel dat vroeger gespeeld kon worden op de nokia telefoons.
Ik heb dat vroeger veel gespeeld en vroeg me af of ik het ook kon maken.
Dit project is gestart als project voor PRG08.

## UML Classdiagram 
![alt tag](http://i.imgur.com/1TRSjA8.png)<br />

## installatie
Om dit spel te installeren clone / download je deze repository.

### voor windows
clone / download de repository in xampp/htdocs
Zet je Apacheserver aan en ga naar localhost/space_impact/dist
Enjoy!.

### voor linux
Clone / download de repository naar var/www/html
Zet je Apacheserver aan en ga naar localhost/space_impact/dist
Enjoy!

### of ga naar de website https://stud.hosted.hr.nl/0910256/sites/space_impact/

## Programmeer principes
Dit project is compleet gemaakt in OOP, typescript.
### Gebruikte programmeer principes
#### interface
#### static utility method
#### singleton
#### strategy
#### Inheritance
#### Composition
#### Encapsulation

#### aanpassing code Ugur
Ik heb ten eerste je klasse enemies naar Enemy veranderd. Het was namelijk ene beejte verwarend om in je game.ts een array te hebben met de naam enemies en een object genaamd enemies. het is nu zo
`private enemy: Enemy;
 private enemies: Array<Enemy> = new Array<Enemy>();`

Verder heb ik in de gameObjects klasse de methodes draw en move toegevoegd zodat de childs die kunnen overerven. Bullet, spaceship en enemy.ts hebben alle drie ook die functies dus dat zorgt er dan ook voor dat ze de methods van de parent kunnen overriden en op die manier hun eigen gedrag tonen.

Hierdoor kon ik in game.ts een array maken van gameobjecten en die in de gameloop gebruiken als volgt: `      for (let g of this.gameObjects) {
            g.move();
            g.draw();
        }`

nu hoef je niet langer meer arrays te maken van de andere klasses maar kan je gewoon g.move doen en dat zorgt er dan voor dat alle objecten bewegen.

Ik heb ook nog de interval van enemy aangepast in de constructor. als volgt: 
` setInterval(() => {
            this.gameObjects.push(new Enemy(this.container));
 }, 1000);`

en de create bullet methode aangepast als volgt: `     public createBullet() {
        let spaceShips = this.gameObjects[0];
        this.gameObjects.push(new Bullet(this.container, spaceShips.x, spaceShips.y));
    }`

nu hoef je in spaceship zelf geen instantie meer aan te maken van bullet. Je hoeft nu alleen maar de creatBullet op te roepen via de singleton functie. 
`  Game.getInstance().createBullet();`