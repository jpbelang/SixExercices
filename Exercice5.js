var vehicules = {
    "Miata": {
        "fabricant": "Mazda",
        "type": "Roadster"
    },
    "Aztec": {
        "fabricant": "Pontiac",
        "type": "SUV"
    },
    "TR7": {
        "fabricant": "Triumph",
        "type": "Roadster"
    }
};


var vehicule = vehicules[process.argv[2]];
if ( vehicule != undefined )  {
    console.log(vehicule.fabricant);
    console.log(vehicule["fabricant"]);
} else {

    console.log("aucune vehicule de ce type");
}

var sortes = Object.keys(vehicules).sort();
for(var i = 0; i < sortes.length ; i ++) {

    console.log(sortes[i] + ":" + vehicules[sortes[i]].fabricant + ", " + vehicules[sortes[i]].type);
}
