import { Sprite, canvas, disc, dot, sprite, stamp } from "./pixels";
import type { Artifact } from "../../../lib/artifact";

const ghoul = sprite([
  ".....wwwwww.....",
  "....wwwwwwww....",
  "....wkkwwkkw....",
  "....wwwwwwww....",
  ".....wkkkkw.....",
  "......wwww......",
  "wwwwwmmmmmmwwwww",
  "w....mmmmmm....w",
  "w....mmmmmm....w",
  ".....mmmmmm.....",
  ".....mmmmmm.....",
  ".....ww..ww.....",
  ".....ww..ww.....",
  "....www..www....",
]);

const batUp = sprite([
  "b.............b",
  "bb....b.b....bb",
  "bbb..bbbbb..bbb",
  "bbbbbbbbbbbbbbb",
  ".bbbbbebebbbbb.",
  "..bbbbbbbbbbb..",
  "....b.....b....",
]);

const batDown = sprite([
  "......b.b......",
  ".....bbbbb.....",
  "b...bbebebb...b",
  "bb.bbbbbbbbb.bb",
  ".bbb.bbbbb.bbb.",
  "..bb..bbb..bb..",
  "..b....b....b..",
]);

const batEyes = { e: "m" };

const tombstone = sprite([
  "..ssssss..",
  ".ssssssss.",
  "ssssxxssss",
  "ssssxxssss",
  "ssxxxxxxss",
  "ssssxxssss",
  "ssssxxssss",
  "ssssssssss",
  "ssssssssss",
  "ssssssssss",
]);

const cross = sprite([
  "..xx..",
  "..xx..",
  "xxxxxx",
  "xxxxxx",
  "..xx..",
  "..xx..",
  "..xx..",
  "..xx..",
  "..xx..",
  "..xx..",
]);

const cabinetScreen = (row: string) => `..l${row}l..`;
const cabinet = sprite([
  "....mmmmmmmmmmmm....",
  "...mmmmmmmmmmmmmm...",
  "..mmwwwwwwwwwwwwmm..",
  "..mmmmmmmmmmmmmmmm..",
  "..llllllllllllllll..",
  cabinetScreen("kkkkkkkkkkkkkk"),
  cabinetScreen("kkkkcccccckkkk"),
  cabinetScreen("kkkcccccccckkk"),
  cabinetScreen("kkkcckcckcckkk"),
  cabinetScreen("kkkcccccccckkk"),
  cabinetScreen("kkkckkckkckkkk"),
  cabinetScreen("kkkkkkkkkkkkkk"),
  cabinetScreen("kkkkkkwwkkkkkk"),
  "..llllllllllllllll..",
  ".llllllllllllllllll.",
  ".lllmllwllcllllllll.",
  ".llllllllllllllllll.",
  "..llllllllllllllll..",
  "..llllkkkkkkkkllll..",
  "..llllkkmmmmkkllll..",
  "..llllkkkkkkkkllll..",
  "..llllllllllllllll..",
  "..llllllllllllllll..",
  "..llllllllllllllll..",
]);

const cassetteRow = (middle: string) => `wlll${middle}lllw`;
const cassette = sprite([
  "wwwwwwwwwwwwwwwwwwwwwwww",
  "wllllllllllllllllllllllw",
  "wlwwwwwwwwwwwwwwwwwwwwlw",
  "wlwmmmmmmmmmmmmmmmmmmwlw",
  "wlwwwwwwwwwwwwwwwwwwwwlw",
  "wllllllllllllllllllllllw",
  cassetteRow("kkkkkkkkkkkkkkkk"),
  cassetteRow("kkwwwwkkkkwwwwkk"),
  cassetteRow("kkwkkwkkkkwkkwkk"),
  cassetteRow("kkwwwwkkkkwwwwkk"),
  cassetteRow("kkkkkkkkkkkkkkkk"),
  "wllllllllllllllllllllllw",
  "wwwwwwwwwwwwwwwwwwwwwwww",
]);

function skyline() {
  const art = canvas(48, 24);
  dot(art, [[3, 2], [10, 5], [18, 1], [25, 4], [44, 2], [6, 10], [30, 9], [14, 12]], "w");
  disc(art, 33, 10, 8, "m", (y) => y > 10 && (y - 10) % 3 === 0);
  const buildings = [[0, 7, 10], [7, 5, 14], [12, 8, 8], [20, 6, 16], [26, 7, 11], [33, 6, 18], [39, 9, 9]];
  buildings.forEach(([x, width, height]) => {
    for (let dy = 0; dy < height; dy++) for (let dx = 0; dx < width; dx++) art[24 - height + dy][x + dx] = "l";
    for (let wy = 24 - height + 2; wy < 23; wy += 3)
      for (let wx = x + 1; wx < x + width - 1; wx += 2) {
        const n = wx * 7 + wy * 3;
        if (n % 11 === 0) art[wy][wx] = "c";
        else if (n % 4 === 0) art[wy][wx] = "w";
      }
  });
  return art;
}

function ghoulScene() {
  const art = canvas(28, 18);
  dot(art, [[2, 2], [22, 3], [25, 8], [4, 11]], "w");
  stamp(art, ghoul, 6, 2);
  art[16].fill("l");
  art[17].fill("p");
  return art;
}

function batScene() {
  const art = canvas(48, 22);
  dot(art, [[3, 19], [44, 18], [40, 4], [8, 1]], "w");
  disc(art, 24, 11, 9, "w");
  stamp(art, batUp, 13, 7, { ...batEyes, b: "k" });
  stamp(art, batDown, 21, 12, { ...batEyes, b: "k" });
  stamp(art, batDown, 2, 3, { ...batEyes, b: "l" });
  stamp(art, batUp, 31, 2, { ...batEyes, b: "l" });
  stamp(art, batUp, 3, 14, { ...batEyes, b: "l" });
  return art;
}

function graveyard() {
  const art = canvas(44, 20);
  dot(art, [[3, 2], [14, 4], [26, 1], [41, 6]], "w");
  disc(art, 36, 4, 3, "w");
  art[16].fill("l");
  for (const y of [17, 18, 19]) art[y].fill("p");
  const stone = { s: "l", x: "k" };
  stamp(art, tombstone, 4, 6, stone);
  stamp(art, tombstone.slice(0, 7), 19, 9, stone);
  stamp(art, cross, 32, 6, { x: "l" });
  return art;
}

export const illustrationArtifacts: Artifact[] = [
  {
    title: "Skyline",
    span: "md:col-span-8",
    node: <Sprite art={skyline()} label="A striped magenta sun setting behind a pixel skyline" />,
  },
  {
    title: "Cabinet",
    span: "md:col-span-4",
    node: <Sprite art={cabinet} label="An arcade cabinet with a magenta marquee" className="mx-auto w-full max-w-60" />,
  },
  {
    title: "Ghoul",
    span: "md:col-span-4",
    node: <Sprite art={ghoulScene()} label="A pixel ghoul in a magenta shirt, arms out" />,
  },
  {
    title: "Bats",
    span: "md:col-span-8",
    node: <Sprite art={batScene()} label="Pixel bats flapping across a full moon" />,
  },
  {
    title: "Graveyard",
    span: "md:col-span-6",
    node: <Sprite art={graveyard()} label="Pixel headstones and a cross under a small moon" />,
  },
  {
    title: "Cassette",
    span: "md:col-span-6",
    node: <Sprite art={cassette} label="A pixel cassette tape with a magenta label stripe" className="mx-auto w-full max-w-md" />,
  },
];
