function setup() {
  createCanvas(354, 400);
  key1 = new calKey(1, 40, 50);
  key2 = new calKey(2, 130, 50);
  key3 = new calKey(3, 220, 50);
  keyC = new calKey("C",310, 50);
  //-------------------------------------------
  key4 = new calKey(4, 40, 150);
  key5 = new calKey(5, 130, 150);
  key6 = new calKey(6, 220, 150);
  keyA = new calKey("+",310, 150);

  //-------------------------------------------
  key7 = new calKey(7, 40, 250);
  key8 = new calKey(8, 130, 250);
  key9 = new calKey(9, 220, 250);
  keyS = new calKey("-",310, 250);

  //-------------------------------------------
  keyE = new calKey("=", 40, 350);
  key0 = new calKey(0, 130, 350);
  keyD = new calKey("/", 220, 350);
  keyM = new calKey("*",310, 350);

}

function draw() {
  background("purple");
  //textFont("basis33");
  key1.show(); 
  key2.show();
  key3.show(); 
  keyC.show();

  //-----------------------------------------

  key4.show(); 
  key5.show();
  key6.show(); 
  keyA.show();

  //------------------------------------------

  key7.show(); 
  key8.show();
  key9.show(); 
  keyS.show();

  //------------------------------------------

  keyE.show(); 
  key0.show();
  keyD.show(); 
  keyM.show();

}

function mousePressed() {
  //1
  if (mouseX > key1.x - 40 && mouseX < key1.x + 40 && mouseY > key1.y - 40 && mouseY < key1.y + 40) {
    //print("working");
    insert(key1.keyVal)
  }

  //2
  if (mouseX > key2.x - 40 && mouseX < key2.x + 40 && mouseY > key2.y - 40 && mouseY < key2.y+40) {
    //print("working");
    insert(key2.keyVal)
  }

  //3
  if (mouseX > key3.x - 40 && mouseX < key3.x + 40 && mouseY > key3.y - 40 && mouseY < key3.y+40) {
    //print("working")
    insert(key3.keyVal)
  }

  //4
  if (mouseX > key4.x - 40 && mouseX < key4.x + 40 && mouseY > key4.y - 40 && mouseY < key4.y+40) {
    //print("working")
    insert(key4.keyVal)
  }

  //5
  if (mouseX > key5.x - 40 && mouseX < key5.x + 40 && mouseY > key5.y - 40 && mouseY < key5.y+40) {
    //print("working")
    insert(key5.keyVal);
  }

  //6 
  if (mouseX > key6.x - 40 && mouseX < key6.x + 40 && mouseY > key6.y - 40 && mouseY < key6.y+40) {
    //print("working")
    insert(key6.keyVal)
  }

  //7
  if (mouseX > key7.x - 40 && mouseX < key7.x + 40 && mouseY > key7.y - 40 && mouseY < key7.y+40) {
    //print("working")
    insert(key7.keyVal)
  }

  //8
  if (mouseX > key8.x - 40 && mouseX < key8.x + 40 && mouseY > key8.y - 40 && mouseY < key8.y+40) {
    //print("working");
    insert(key8.keyVal)
  }

  //9
  if (mouseX > key9.x - 40 && mouseX < key9.x + 40 && mouseY > key9.y - 40 && mouseY < key9.y+40) {
    //print("working")
    insert(key9.keyVal)
  }

  //0
  if (mouseX > key0.x - 40 && mouseX < key0.x + 40 && mouseY > key0.y - 40 && mouseY < key0.y+40) {
    //print("working")
    insert(key0.keyVal)
  }

  //C
  if (mouseX < keyC.x + 40 && mouseX > keyC.x - 40 && mouseY > keyC.y - 40 && mouseY < keyC.y+40) {
    //print("Worl");
    hel(); 
  }

  //=
  if (mouseX < keyE.x + 40 && mouseX > keyE.x - 40 && mouseY > keyE.y - 40 && mouseY < keyE.y+40) {
    eal();
    //print("helen");
  }

  //+
  if (mouseX > keyA.x - 40 && mouseX < keyA.x + 40 && mouseY > keyA.y - 40 && mouseY < keyA.y+40) {
    //print("working");
    insert(keyA.keyVal);
  }

  //-
  if (mouseX > keyS.x - 40 && mouseX < keyS.x + 40 && mouseY > keyS.y - 40 && mouseY < keyS.y+40) {
    //print("working");
    insert(keyS.keyVal);
  }

  //-/
  if (mouseX < keyD.x + 40 && mouseX > keyD.x - 40 && mouseY > keyD.y - 40 && mouseY < keyD.y+40) {
    insert(keyD.keyVal);
  }

  //*
  if (mouseX < keyM.x + 40 && mouseX > keyM.x - 40 && mouseY > keyM.y - 40 && mouseY < keyM.y+40) {
    insert(keyM.keyVal);
  }
}
