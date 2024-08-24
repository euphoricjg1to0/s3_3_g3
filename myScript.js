const virtualPet = {
    name: "pikachu",
    type: "Electric",
    age: 1,
    Starbust: 50,
    HP: 50,
    power: 50,
    evolve: function() {
        if (this.HP <= 0){
            this.type = "ground";
            this.name = "fossil";
        }
        else if (this.Starbust > 100) {
            this.type = "Groundrock";
            this.name = "Baxcallibur";
        } else {
            this.type = "";
          //  this.name = "fossil";
        }
   
        this.updateImage();
    },
    feed: function(amount) {
        this.HP += amount;
        this.Starbust -= amount / 2;
        this.evolve();
        this.updateStatus();
    },
    play: function(time) {
        this.HP -= time;
        this.Starbust += time / 2;
        //this.power += time;
        this.evolve();
        this.updateStatus();
    },
    passTime: function() {
        this.age += 1;
        this.Starbust += 10;
        this.HP -= 10;
        this.evolve();
        this.updateStatus();
    },
    updateStatus: function() {
        document.getElementById('petStatus').innerHTML = `
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Age:</strong> ${this.age}</p>
            <p><strong>Starbust:</strong> ${this.Starbust}</p>
            <p><strong>HP:</strong> ${this.HP}</p>
            <p><strong>power:</strong> ${this.power}</p>
        `;
    },
    updateImage: function() {
        let imageUrl = '';
        if (this.type === "ground") {
            imageUrl = 'images/fossil.png';  // Replace with the actual image URL
            document.getElementById("message").innerHTML = "GAME OVER !";
        } else if (this.type === "Groundrock") {
            imageUrl = 'images/Baxcallibur.jpeg';  // Replace with the actual image URL
            document.getElementById("message").innerHTML = "YOU HAVED EVOLVED!";
            this.power=1000;
        } else {
            imageUrl = 'images/pikachu.png';  // Replace with the default dragon image URL

        }
        document.getElementById('petImage').innerHTML = `<img src="${imageUrl}" alt="${this.type}">`;
    }
};

function feedPet() {
    virtualPet.feed(20);
}

function playWithPet() {
    virtualPet.play(30);
}

function passTime() {
    virtualPet.passTime();
}

// Initial display of the pet's status and image
virtualPet.updateStatus();
virtualPet.updateImage();

