import Alpaca from "./models/a.js"
import Badger from "./models/b.js"
import Cheetah from "./models/c.js"
import Donkey from "./models/d.js"
import Elephant from "./models/e.js"
import Fox from "./models/f.js"
import Giraffe from "./models/g.js"
import Horse from "./models/h.js"
import Iguanna from "./models/i.js"
import Jaguar from "./models/j.js"
import Kangaroo from "./models/k.js"
import Lemur from "./models/l.js"
import Meerkat from "./models/m.js"
import Newt from "./models/n.js"
import Opossum from "./models/o.js"
import Parrot from "./models/p.js"
import Quail from "./models/q.js"
import Raccoon from "./models/r.js"
import Seal from "./models/s.js"
import Tiger from "./models/t.js"
import UmbrellaBird from "./models/u.js"
import Vulture from "./models/v.js"
import Walrus from "./models/w.js"
import XRayTetra from "./models/x.js"
import Yak from "./models/y.js"
import Zebra from "./models/z.js"


let alpacas = {
  alice: new Alpaca('Alice', 'fluffy', 4, 'white', 'huacaya'),
  andy: new Alpaca('Andy', 'nonfluffy', 4, 'brown', 'suri'),
};

let badger = {
  babs: new Badger("Babs", "honey", 4, "black"),
  billy: new Badger("Billy", "american", 4, "grey")
}

let cheetah = {
  chunk: new Cheetah("Chunk", "asiatic", 4, "yellow"),
  claire: new Cheetah("Claire", "sudan", 4, "tan")
}

let donkey = {
  dotty: new Donkey("dotty", "ass", 4, "grey"),
  doc: new Donkey("doc", "wild", 4, "grey")
}

let elephant = {
  ellen: new Elephant("Ellen", "indian", 4, "grey"),
  ethan: new Elephant("Ethan", "asian", 4, "grey")
}

let fox = {
  florence: new Fox("Florence", "bengalensis", 4, "red"),
  frank: new Fox("Frank", "velox", 4, "white")
}

let giraffe = {
  gretchen: new Giraffe("Gretchen", "northern", 4, "yellow"),
  Glen: new Giraffe("Glen", "masai", 4, "yellow")
}

let horse = {
  helga: new Horse("Helga", "draft", 4, "white"),
  hank: new Horse("Hank", "gaited", 4, "grey")
}

let iguanna = {
  irus: new Iguanna("Irus", "green", 4, "green"),
  indianna: new Iguanna("Indianna", "marine", 4, "black")
}

let jaguar = {
  jolene: new Jaguar("Jolene", "arizona", 4, "black"),
  james: new Jaguar("James", "yucatan", 4, "black")
}

let kangaroo = {
  kelly: new Kangaroo("Kelly", "red", 4, "orange"),
  keith: new Kangaroo("Keith", "antilopine", 4, "tan")
}

let lemur = {
  layla: new Lemur("Layla", "ringtailed", 4, "grey"),
  lance: new Lemur("Lance", "ayeaye", 4, "stripes")
}

let meerkat = {
  mary: new Meerkat("Mary", "suricata", 4, "tan"),
  mark: new Meerkat("Mark", "suricata", 4, "tan")
}

let newt = {
  nicky: new Newt("Nicky", "eastern", 4, "green"),
  nick: new Newt("Nick", "smooth", 4, "blue")
}

let opossum = {
  odessa: new Opossum("Odessa", "water", 4, "stripes"),
  oly: new Opossum("Oly", "virginia", 4, "grey")
}

let parrot = {
  patricia: new Parrot("Patricia", "cockatiel", 4, "yellow"),
  peter: new Parrot("Peter", "budgerigar", 4, "orange")
}

let quail = {
  quick: new Quail("Quick", "king", 4, "grey"),
  quincy: new Quail("Quincy", "northern", 4, "black")
}

let raccoon = {
  rachel: new Raccoon("Rachel", "cozumel", 4, "black"),
  raph: new Raccoon("Raph", "trashpanda", 4, "grey")
}

let seal = {
  slender: new Seal("Slender", "harbor", 4, "spotted"),
  spanky: new Seal("Spanky", "harp", 4, "grey")
}

let tiger = {
  theresa: new Tiger("Theresa", "sumatran", 4, "orange"),
  tony: new Tiger("Tony", "malayan", 4, "tan")
}

let umbrellaBird = {
  umba: new UmbrellaBird("Umba", "passeriformes", 4, "black"),
  uppy: new UmbrellaBird("Uppy", "passeriformes", 4, "yellow")
}

let vulture = {
  vicky: new Vulture("Vicky", "turkey", 4, "black"),
  vance: new Vulture("Vance", "bearded", 4, "grey")
}

let walrus = {
  helga: new Walrus("Helga", "atlantic", 4, "grey"),
  hank: new Walrus("Hank", "pacific", 4, "grey")
}

let xRayTetra = {
  xzy: new XRayTetra("Xzy", "cardinal", 4, "yellow"),
  xtreme: new XRayTetra("Xtreme", "serpae", 4, "orange")
}

let yak = {
  yolanna: new Yak("Yolanna", "jiulong", 4, "grey"),
  yeller: new Yak("Yeller", "maiwa", 4, "grey")
}

let zebra = {
  zelda: new Zebra("Zelda", "plains", 4, "stripes"),
  zest: new Zebra("Zest", "mountain", 4, "stripes")
}

alpacas.alice.explainYourself()