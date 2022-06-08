let linija, krug, pravokutnik, zvijezda, cvijet, velicina, debljina, kamera, srce, srce_ukras;
let k, p, z;
let slikanje_kamerom;

let tekst_linija = "Alat za crtanje linija. Odabrati i potezati linije mišem.";
let tekst_krug = "Alat za crtanje kruga. Odabrati i kliknuti mišem na scenu.";
let tekst_pravokutnik = "Alat za crtanje pravokutnika. Odabrati i kliknuti mišem na scenu.";
let tekst_zvijezda = "Alat za crtanje zvijezda. Odabrati i kliknuti mišem na scenu.";
let tekst_zvijezda2 = "Alat za crtanje zvijezda 2. Odabrati i kliknuti mišem na scenu.";
let tekst_velicina = "Mijenjanje veličine objekata tipkama m (manje) i v (veće).";
let tekst_debljina = "Mijenjanje debljine tipkama 1 (tanko), 2 (deblje) i 3 (najdeblje).";
let tekst_kamera = "Alat za fotografiranje preko kamere. Odabrati i potvrditi odobrenje.";
let tekst_paleta = "Klikni kako bi odabrao boju obruba/oblika.";
let tekst_ukras = "Klikni kako bi dodao ukras na srce.";
let tekst_spremi = "Klikni kako bi spremio scenu.";
let tekst_izbrisi = "Klikni kako bi izbrisao scenu.";
let ukras = "ukras";
let spremi = "spremi";
let izbrisi = "izbriši";
let trenutna_boja = "Boja:";
let trenutna_debljina = "Debljina:";

var r = 0;
var g = 0;
var b = 0;

var vel_debljina = 1;
var opcija = 0;
var vel_objekta = 25;


function preload() {
  linija = loadImage("linija.png");
  krug = loadImage("krug.png");
  pravokutnik = loadImage("pravokutnik.png");
  zvijezda = loadImage("zvijezda.png");
  cvijet = loadImage("cvijet.png");
  velicina = loadImage("plus-minus.png");
  debljina = loadImage("debljina.png");
  kamera = loadImage("kamera.png");
  srce = loadImage("srce.png");
  srce_ukras = loadImage("ukras.png");
}

function setup() {
  let c = createCanvas(700, 600);
  c.parent('glavna_sekcija');
  background(255);
  fill(0);

  slikanje_kamerom = createCapture(VIDEO);
  slikanje_kamerom.size(150, 150);
  slikanje_kamerom.hide();

  image(linija, 12, 5, 25, 25);
  image(krug, 10, 40, 30, 30);
  image(pravokutnik, 10, 80, 30, 30);
  image(zvijezda, 10, 120, 30, 30);
  image(cvijet, 10, 160, 30, 30);
  image(velicina, 12, 200, 25, 30);
  image(debljina, 10, 242, 30, 25);
  image(kamera, 10, 282, 30, 25);
  
  fill(43, 48, 58);
  rect(7, 320, 15, 30);
  fill(255, 202, 58);
  rect(7, 360, 15, 30);
  fill(138, 201, 38);
  rect(7, 400, 15, 30);
  fill(25, 130, 196);
  rect(7, 440, 15, 30);
  
  fill(247, 249, 249);
  rect(27, 320, 15, 30);
  fill(185, 142, 167);
  rect(27, 360, 15, 30);
  fill(4, 75, 127);
  rect(27, 400, 15, 30);
  fill(130, 2, 99);
  rect(27, 440, 15, 30);

  textSize(15);
  fill(0);
  text (ukras, 7, 500);
  text (spremi, 2, 540);
  text (izbrisi, 6, 580);
  text (trenutna_boja, width-125, height-50);
  text (trenutna_debljina, width-125, height-25);
  
  for (var i = 35; i <= 560; i+=40) {
    line(0, i, 50, i);    
  }
  line(50, 0, 50, 600);
  line(50, 35, 700, 35);
  
  image(srce, 0, 50, 720, 510);
  
  /* default boja i debljina */
  fill(0);
  rect(width-85, height-65, 40, 20);
  stroke(0);
  strokeWeight(1);
  line(width-60, height-30, width-20, height-30);
}

function draw() {
  fill(255);
  noStroke();
  rect(51, 0, 649, 34);
  textAlign(CENTER);
  textSize(18);
  fill(0);
  
  /* ispis pomoćnog teksta */
  if ((mouseX < 50) && (mouseY < 40)) {
    text (tekst_linija, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 40) && (mouseY < 80)) {
    text (tekst_krug, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 80) && (mouseY < 120)) {
    text (tekst_pravokutnik, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 120) && (mouseY < 160)) {
    text (tekst_zvijezda, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 160) && (mouseY < 200)) {
    text (tekst_zvijezda2, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 200) && (mouseY < 240)) {
    text (tekst_velicina, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 240) && (mouseY < 280)) {
    text (tekst_debljina, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 280) && (mouseY < 320)) {
    text (tekst_kamera, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 320) && (mouseY < 480)) {
    text (tekst_paleta, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 480) && (mouseY < 520)) {
    text (tekst_ukras, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 520) && (mouseY < 560)) {
    text (tekst_spremi, width/2, 30);
  }
  if ((mouseX < 50) && (mouseY > 560) && (mouseY < 600)) {
    text (tekst_izbrisi, width/2, 30);
  }

  /* boja obruba */
  if (mouseIsPressed && (mouseX > 7) && (mouseX < 22) && (mouseY > 320) && (mouseY < 350)) {
    r = 43; g = 48; b = 58;
  }
  if (mouseIsPressed && (mouseX > 7) && (mouseX < 22) && (mouseY > 360) && (mouseY < 390)) {
    r = 255; g = 202; b = 58;
  }
  if (mouseIsPressed && (mouseX > 7) && (mouseX < 22) && (mouseY > 400) && (mouseY < 430)) {
    r = 138; g = 201; b = 38;
  }
  if (mouseIsPressed && (mouseX > 7) && (mouseX < 22) && (mouseY > 440) && (mouseY < 470)) {
    r = 25; g = 130; b = 196;
  }
  if (mouseIsPressed && (mouseX > 27) && (mouseX < 42) && (mouseY > 320) && (mouseY < 350)) {
    r = 247; g = 249; b = 249;
  }
  if (mouseIsPressed && (mouseX > 27) && (mouseX < 42) && (mouseY > 360) && (mouseY < 390)) {
    r = 185; g = 142; b = 167;
  }
  if (mouseIsPressed && (mouseX > 27) && (mouseX < 42) && (mouseY > 400) && (mouseY < 430)) {
    r = 4; g = 75; b = 127;
  }
  if (mouseIsPressed && (mouseX > 27) && (mouseX < 42) && (mouseY > 440) && (mouseY < 470)) {
    r = 130; g = 2; b = 99;
  }

  /* debljina obruba */
  if ((keyIsPressed == true) && (key == '1')) {
    vel_debljina = 1;
  }
  if ((keyIsPressed == true) && (key == '2')) {
    vel_debljina = 5;
  }
  if ((keyIsPressed == true) && (key == '3')) {
    vel_debljina = 10;
  }
  
  /* veličina objekta */
  if ((keyIsPressed == true) && (key == 'm')) {
    vel_objekta = vel_objekta - 5;
  }
  if ((keyIsPressed == true) && (key == 'v')) {
    vel_objekta = vel_objekta + 5;
  }
  
  stroke(r, g, b);
  strokeWeight(vel_debljina);
  
  /* prva opcija - crtanje linija */
  if(mouseX > 50) {
    if(mouseIsPressed && opcija == 1) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  
  fill(r, g, b);
  noStroke();

  /* druga opcija - crtanje kruga */
  if(mouseX > 50) {
    if(mouseIsPressed && opcija == 2) {
      k = new crtanje_krug(mouseX, mouseY, vel_objekta);
      k.display();
    }
  }

   /* treća opcija - crtanje pravokutnika */
   if(mouseX > 50) {
    if(mouseIsPressed && opcija == 3) {
      p = new crtanje_pravokutnik(mouseX, mouseY, vel_objekta);
      p.display();
    }
  }
  
  /* četvrta opcija - crtanje zvijezde */
  if(mouseX > 50) {
    if(mouseIsPressed && opcija == 4) {
      z = new crtanje_zvijezda();
      z.display(mouseX, mouseY, vel_objekta/2, vel_objekta, 5);
    }
  }
  
  /* peta opcija - crtanje zvijezde 2 */
  if(mouseX > 50) {
    if(mouseIsPressed && opcija == 5) {
      z = new crtanje_zvijezda();
      z.display(mouseX, mouseY, vel_objekta/2, vel_objekta, 10);
    }
  }
}

function mousePressed() {
  /* opcije */
  if ((mouseX < 50) && (mouseY < 40)) {
    opcija = 1;
  }
  if ((mouseX < 50) && (mouseY > 40) && (mouseY < 80)) {
    opcija = 2;
  }
  if ((mouseX < 50) && (mouseY > 80) && (mouseY < 120)) {
    opcija = 3;
  }
  if ((mouseX < 50) && (mouseY > 120) && (mouseY < 160)) {
    opcija = 4;
  }
  if ((mouseX < 50) && (mouseY > 160) && (mouseY < 200)) {
    opcija = 5;
  }

  /* opcija uključivanja kamere */
  if ((mouseX < 50) && (mouseY > 280) && (mouseY < 320)) {
    image(slikanje_kamerom, 295, 175, 150, 150);
  }
  
  /* opcija dodavanja ukrasa */
  if ((mouseX < 50) && (mouseY > 480) && (mouseY < 520)) {
    image(srce_ukras, 132, 110, 475, 420);
  }
  
  /* opcija spremi */
  if ((mouseX < 50) && (mouseY > 520) && (mouseY < 560)) {
    saveCanvas('mojeLicitarskoSrce', 'png');
  }

  /* opcija izbriši */
  if ((mouseX < 50) && (mouseY > 560) && (mouseY < 600)) {
    fill(255);
    noStroke();
    rect(51, 36, width-50, height-35);
    image(srce, 0, 50, 720, 510);
    fill(0);
    textSize(15);
    textAlign(LEFT);
    text (trenutna_boja, width-125, height-50);
    text (trenutna_debljina, width-125, height-25);
  }
  
  /* trenutna boja */
  noStroke();
  if ((mouseX > 7) && (mouseX < 22) && (mouseY > 320) && (mouseY < 350)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 43; g = 48; b = 58;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 7) && (mouseX < 22) && (mouseY > 360) && (mouseY < 390)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 255; g = 202; b = 58;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 7) && (mouseX < 22) && (mouseY > 400) && (mouseY < 430)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 138; g = 201; b = 38;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 7) && (mouseX < 22) && (mouseY > 440) && (mouseY < 470)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 25; g = 130; b = 196;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  
  if ((mouseX > 27) && (mouseX < 42) && (mouseY > 320) && (mouseY < 350)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 247; g = 249; b = 249;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 27) && (mouseX < 42) && (mouseY > 360) && (mouseY < 390)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 185; g = 142; b = 167;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 27) && (mouseX < 42) && (mouseY > 400) && (mouseY < 430)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 4; g = 75; b = 127;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
  if ((mouseX > 27) && (mouseX < 42) && (mouseY > 440) && (mouseY < 470)) {
    fill(255);
    rect(width-92, height-70, 90, 30);
    r = 130; g = 2; b = 99;
    fill(r, g, b);
    rect(width-85, height-65, 40, 20);
  }
}

function keyPressed() {
  /* trenutna debljina */
  fill(255);
  if ((key == '1')) {
    noStroke();
    rect(width-68, height-40, 66, 25);
    stroke(0);
    strokeWeight(1);
    line(width-60, height-30, width-20, height-30);
  }
  if ((key == '2')) {
    noStroke();
    rect(width-68, height-40, 66, 25);
    stroke(0);
    strokeWeight(5);
    line(width-60, height-30, width-20, height-30);
  }
  if ((key == '3')) {
    noStroke();
    rect(width-68, height-40, 66, 25);
    stroke(0);
    strokeWeight(10);
    line(width-60, height-30, width-20, height-30);
  }
}

class crtanje_krug {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.sirina = vel_objekta;
  }

  display() {
    circle(this.x, this.y, this.sirina);
  }
}
class crtanje_pravokutnik {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.sirina = vel_objekta;
    this.visina = vel_objekta;
  }

  display() {
    rect(this.x, this.y, this.sirina, this.visina);
  }
}
class crtanje_zvijezda {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  display(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
     var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a+halfAngle) * radius1;
      sy = y + sin(a+halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
